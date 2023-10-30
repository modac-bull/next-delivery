import React from 'react';

import HeadPageMeta from '@/components/layouts/HeadPageMeta';
import LayoutDefault from '@/components/layouts/LayoutDefault';
import FoodDetail from '@/components/pages/food/FoodDetail';

export default function FoodDetailPage() {
  return (
    <>
      <HeadPageMeta title="음식 배달 앱 (next/ts) - 음식 상세" />

      <LayoutDefault>
        <FoodDetail />
      </LayoutDefault>
    </>
  );
}
