import styled from '@emotion/styled/macro';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { getFoodDetailById } from '@/apis/food/food';
import { FoodDetailItemType, SelectedFoodInfoType } from '@/apis/food/types';

import { localStorageKey } from '@/utils/constants';
import LocalStorageUtil from '@/utils/localStorageUtil';

import ContentArea from '@/components/layouts/ContentArea';
import Header from '@/components/layouts/Header';
import { BackButton, CartButton, LikeButton } from '@/components/ui/header';

import { variables } from '@/styles/variables';

import FoodInfo from './FoodInfo';
import FoodOption from './FoodOption';
import PriceInfo from './PriceInfo';

type Props = {
  data: FoodDetailItemType;
};

export default function FoodDetail({ data }: Props) {
  const router = useRouter();
  const id = router.query.id as string;
  const foodDetail = data;

  // const [foodDetail, setFoodDetail] = useState<FoodDetailItemType | null>(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (!router.isReady) return;

  //   const fetchData = async () => {
  //     try {
  //       const foodDetail = await getFoodDetailById(id);
  //       setFoodDetail(foodDetail);

  //       setLoading(false);
  //     } catch (error) {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, [router]);

  /* 
  TODO
  - 옵션 상태 업데이트 핸들러 함수 추가하기
   */
  const [selectedInfo, setSelectedInfo] = useState<SelectedFoodInfoType | null>(
    null,
  );
  const handleAddCart = () => {
    console.log('click?')
    setSelectedInfo((prev) => {
      const prevInfo = prev as SelectedFoodInfoType;
      return {
        ...prevInfo,
        foodId: id,
      };
    });
  };
  useEffect(() => {
    if (!selectedInfo) return;
    let storedCartItems = LocalStorageUtil.get<SelectedFoodInfoType[]>(
      localStorageKey['CART_KEY'],
      [],
    );
    storedCartItems.push(selectedInfo);
    LocalStorageUtil.set(localStorageKey['CART_KEY'], storedCartItems);
  }, [selectedInfo]);

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
        {!!foodDetail ? <FoodInfo data={foodDetail} /> : <p>데이터 없음</p>}

        <SectionTitle>추가선택</SectionTitle>
        {foodDetail?.options?.map((option) => (
          <FoodOption key={option.id} data={option} />
        ))}

        <PriceInfo price={foodDetail?.price ?? 0} onClick={handleAddCart} />
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
