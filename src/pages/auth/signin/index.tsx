import React from 'react';

import HeadPageMeta from '@/components/layouts/HeadPageMeta';
import LayoutDefault from '@/components/layouts/LayoutDefault';
import Signin from '@/components/pages/auth/signin/Signin';

export default function SignInPage() {
  return (
    <>
      <HeadPageMeta title="로그인" />

      <LayoutDefault>
        <Signin />
      </LayoutDefault>
    </>
  );
}
