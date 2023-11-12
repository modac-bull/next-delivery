import axios from 'axios';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

import ContentArea from '@/components/layouts/ContentArea';
import Header from '@/components/layouts/Header';
import Button from '@/components/ui/buttons/Button';
import { CartButton, LikeButton } from '@/components/ui/header';

type Props = {
  user: any;
};

export default function Mypage({ user }: Props) {
  const isLoggedIn = Boolean(user);
  const logoutHandler = () => {
    signOut({ callbackUrl: '/', redirect: false }).then(
      () => (window.location.href = '/'),
    );
  };

  return (
    <>
      <Header
        title="마이페이지"
        rightActions={
          <>
            <LikeButton />
            <CartButton />
          </>
        }
      />

      <ContentArea>
        <p>로그인 계정 이메일 : {user?.email}</p>
        {isLoggedIn ? '로그인 상태' : '로그인 필요'}

        <div>
          <Button onClick={logoutHandler}>로그아웃</Button>
        </div>
      </ContentArea>
    </>
  );
}
