import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { getFoodListDataById } from '@/apis/food/food';
import { FoodDetailItemType, FoodListlItemType } from '@/apis/food/types';
import {
  deleteLikeStore,
  getLikeStoreList,
  postLikeStore,
} from '@/apis/like/like';
import { getStoreDetailById, getStoreListData } from '@/apis/store/store';
import { StoreInfoType } from '@/apis/store/types';

import ContentArea from '@/components/layouts/ContentArea';
import Header from '@/components/layouts/Header';
import { BackButton, CartButton, LikeButton } from '@/components/ui/header';

import FoodLists from './FoodLists';
import StoreInfo from './StoreInfo';

type Props = {
  storeDetailData: StoreInfoType;
  foodListData: FoodDetailItemType[];
};

export default function StoreDetail({ storeDetailData, foodListData }: Props) {
  const storeDetail = storeDetailData;
  const foodLists = foodListData;

  // 좋아요
  const [isLike, setIsLike] = useState(false);
  const setLikeHandler = async (storeId: string) => {
    setIsLike((prev) => !prev); // 임시로 변경
    try {
      let response;
      if (isLike) {
        response = await deleteLikeStore(storeId);
      } else {
        response = await postLikeStore(storeId);
      }
      if (!response) {
        // 실패하면 상태 다시 변경 (원래대로)
        setIsLike((prev) => !prev);
        alert('좋아요 요청 실패');
      }
    } catch (error) {
      // 에러나도 원래대로
      setIsLike((prev) => !prev);
    }
  };

  return (
    <>
      <Header
        title="가게 상세 페이지"
        leftActions={<BackButton />}
        rightActions={
          <>
            <LikeButton />
            <CartButton />
          </>
        }
      />
      <ContentArea>
        {!!storeDetail ? (
          <StoreInfo
            data={storeDetail}
            isLike={isLike}
            likeHandler={setLikeHandler}
          />
        ) : (
          <p>데이터 없음</p>
        )}

        {!!foodLists ? <FoodLists data={foodLists} /> : <p>데이터 없음F</p>}
      </ContentArea>
    </>
  );
}
