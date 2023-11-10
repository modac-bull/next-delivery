import ContentArea from '@/components/layouts/ContentArea';
import Header from '@/components/layouts/Header';
import { CartButton, LikeButton } from '@/components/ui/header';

type Props = {
  user: any;
  isLoggedIn: boolean;
};

export default function Mypage({ user, isLoggedIn }: Props) {
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
      </ContentArea>
    </>
  );
}
