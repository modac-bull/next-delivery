// pages/api/signin.js
import bcrypt from 'bcrypt';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';

import { connectToDatabase } from '@/utils/db';

export default async function signin(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const client = await connectToDatabase();
    const db = client.db();
    const { email, password } = req.body;

    // 사용자 검색
    const user = await db.collection('users').findOne({ email });
    if (!user) {
      return res.status(401).json({ message: '잘못된 입력입니다.' });
    }

    // 비밀번호 확인
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ message: '잘못된 입력입니다.' });
    }

    // JWT 생성
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.NEXT_JWT_SECRET as string,
      { expiresIn: '1h' }, // 토큰 유효 시간 설정
    );

    // 쿠키에 JWT 설정
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('auth', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // 프로덕션에서만 secure 쿠키 설정
        sameSite: 'strict',
        maxAge: 60 * 60 * 1, // 토큰과 동일하게 1시간 설정
        path: '/',
      }),
    );

    return res.status(200).json({ message: '로그인 성공' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error', error });
  }
}
