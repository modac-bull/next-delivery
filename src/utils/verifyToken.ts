import jwt from 'jsonwebtoken';

// 토큰을 검증하는 함수
export const verifyToken = (token: string) => {
  if (!token) {
    throw new Error('No token provided');
  }
  return jwt.verify(token, process.env.NEXT_JWT_SECRET as string);
};
