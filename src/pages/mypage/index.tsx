import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Session } from 'next-auth';
import { getSession, useSession } from 'next-auth/react';

import HeadPageMeta from '@/components/layouts/HeadPageMeta';
import LayoutDefault from '@/components/layouts/LayoutDefault';
import Mypage from '@/components/pages/mypage/Mypage';

type PageProps = {
  session: Session;
};

export default function MypagePage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const { data, status } = useSession();

  return (
    <>
      <HeadPageMeta title="마이페이지" />
      <LayoutDefault>
        <Mypage user={data?.user} />
      </LayoutDefault>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context,
) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
