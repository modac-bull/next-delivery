import React from 'react';

import Header from '@/components/layouts/Header';
import { BackButton, CartButton, LikeButton } from '@/components/ui/header';

export default function Like() {
  return (
    <>
      <Header
        title="좋아요 페이지"
        leftActions={<BackButton />}
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
