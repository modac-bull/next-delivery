// pages/api/signup.js
import bcrypt from 'bcrypt';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';

import { connectToDatabase } from '@/utils/db';

type Data = {
  message?: string;
  token?: string;
  error?: any;
};

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const client = await connectToDatabase();
    const db = client.db();

    const { email, password } = req.body;

    // 이메일 중복 확인
    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      return res.status(422).json({ message: '이미 존재하는 회원입니다.' });
    }

    // 비밀번호 해시
    const hashedPassword = await bcrypt.hash(password, 10);

    // 사용자 정보를 데이터베이스에 저장
    const newUser = await db.collection('users').insertOne({
      email,
      password: hashedPassword,
    });

    // 회원가입 성공 응답
    res.status(201).json({ message: '회원가입 성공' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
}

export default handler;
