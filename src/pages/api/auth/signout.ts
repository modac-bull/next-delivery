import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // 쿠키 제거 또는 만료
  res.setHeader('Set-Cookie', 'auth=; Max-Age=0; path=/;');

  res.status(200).json({ message: '로그아웃 성공' });
}
