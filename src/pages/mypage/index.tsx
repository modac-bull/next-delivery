import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { verifyToken } from '@/utils/verifyToken';

import HeadPageMeta from '@/components/layouts/HeadPageMeta';
import LayoutDefault from '@/components/layouts/LayoutDefault';
import Mypage from '@/components/pages/mypage/Mypage';

type PageProps = {
  isLoggedIn: boolean;
  user: any;
};

export default function MypagePage({
  isLoggedIn,
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <HeadPageMeta title="마이페이지" />
      <LayoutDefault>
        <Mypage user={user} isLoggedIn={isLoggedIn} />
      </LayoutDefault>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context,
) => {
  const { req } = context;
  const { cookies } = req;
  const token = cookies.auth;

  let user = null;
  let isLoggedIn = false;

  try {
    // 토큰 검증
    const decoded = verifyToken(token as string);
    // 토큰이 유효하면, 디코딩된 사용자 정보를 사용할 수 있습니다.
    user = decoded;
    isLoggedIn = true;
  } catch (error) {
    // 토큰이 유효하지 않으면, user는 null 상태를 유지합니다.
    isLoggedIn = false;
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      isLoggedIn,
      user,
    },
  };
};
