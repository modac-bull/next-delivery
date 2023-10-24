import React from 'react';

import Header from '@/components/layouts/Header';
import { CartButton, LikeButton } from '@/components/ui/header';

export default function Home() {
  return (
    <>
      <Header
        title="메인"
        rightActions={
          <>
            <LikeButton />
            <CartButton />
          </>
        }
      />
    </>
  );
}
