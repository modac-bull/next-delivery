import styled from '@emotion/styled/macro';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { getFoodDetailById } from '@/apis/food/food';
import { FoodDetailItemType } from '@/apis/food/types';

import ContentArea from '@/components/layouts/ContentArea';
import Header from '@/components/layouts/Header';
import { BackButton, CartButton, LikeButton } from '@/components/ui/header';

import { variables } from '@/styles/variables';

import FoodInfo from './FoodInfo';
import FoodOption from './FoodOption';
import PriceInfo from './PriceInfo';

export default function FoodDetail() {
  const router = useRouter();
  const id = router.query.id as string;

  const [foodDetail, setFoodDetail] = useState<FoodDetailItemType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;

    const fetchData = async () => {
      try {
        const foodDetail = await getFoodDetailById(id);
        setFoodDetail(foodDetail);

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, [router]);

  return (
    <>
      <Header
        title="음식 상세 페이지"
        leftActions={<BackButton />}
        rightActions={
          <>
            <LikeButton />
            <CartButton />
          </>
        }
      />

      <ContentArea>
        {loading ? (
          <p>로딩중</p>
        ) : !!foodDetail ? (
          <FoodInfo data={foodDetail} />
        ) : (
          <p>데이터 없음</p>
        )}

        <SectionTitle>추가선택</SectionTitle>
        {foodDetail?.options?.map((option) => <FoodOption data={option} />)}

        <PriceInfo price={foodDetail?.price ?? 0} />
      </ContentArea>
    </>
  );
}

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin-top: 25px;
  padding: 0 ${variables['gutter-m']};
`;
