import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import { connectToDatabase } from '@/utils/db';

// types/User.ts
export type User = {
  id: string;
  email: string;
  password: string;
  // 필요한 추가 필드
};

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'name' },
        password: { label: 'Password', type: 'password' },
        email: { label: 'Email', type: 'text' },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) {
          throw new Error('유효하지 않은 입력입니다.');
        }

        const client = await connectToDatabase();
        const usersCollection = client.db().collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          throw new Error('존재하지 않는 회원입니다.');
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!isValid) {
          throw new Error('유효하지 않은 입력입니다.');
        }

        // MongoDB의 _id 필드를 문자열 id로 변환
        const userObj: User = {
          id: user._id.toString(),
          email: user.email,
          password: user.password,
          // 필요한 추가 필드 매핑
        };
        console.log('userObj', userObj);
        return userObj;
      },
    }),
  ],
  // 필요한 추가 설정
});
