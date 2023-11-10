import axios from 'axios';
import { useRouter } from 'next/router';

import ContentArea from '@/components/layouts/ContentArea';
import Header from '@/components/layouts/Header';
import Button from '@/components/ui/buttons/Button';
import { CartButton, LikeButton } from '@/components/ui/header';

type Props = {
  user: any;
  isLoggedIn: boolean;
};

export default function Mypage({ user, isLoggedIn }: Props) {
  const router = useRouter();

  const logoutHandler = async () => {
    try {
      await axios.post('/api/auth/signout');
      router.push('/');
    } catch (error) {
      alert('로그아웃 실패');
    }
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
