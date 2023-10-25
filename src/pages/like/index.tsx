import React from 'react';

import HeadPageMeta from '@/components/layouts/HeadPageMeta';
import LayoutDefault from '@/components/layouts/LayoutDefault';
import Like from '@/components/pages/like/Like';

export default function LikePage() {
  return (
    <>
      <HeadPageMeta title="음식 배달 앱 (next/ts) - 좋아요F " />

      <LayoutDefault>
        <Like />
      </LayoutDefault>
    </>
  );
}
