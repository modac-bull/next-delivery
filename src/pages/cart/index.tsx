import React from 'react';

import HeadPageMeta from '@/components/layouts/HeadPageMeta';
import LayoutDefault from '@/components/layouts/LayoutDefault';
import Cart from '@/components/pages/cart/Cart';

export default function CartPage() {
  return (
    <>
      <HeadPageMeta title="음식 배달 앱 (next/ts) - 장바구니 " />

      <LayoutDefault>
        <Cart />
      </LayoutDefault>
    </>
  );
}
