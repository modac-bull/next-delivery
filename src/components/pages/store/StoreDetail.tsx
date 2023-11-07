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

import useQuery from '@/hooks/\buseQuery';

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
  const router = useRouter();
  const id = router.query.id as string;

  /* 
  사전 렌더링 방식 + 클라이언트 데이터 페칭 
  */
  const [storeDetail, setStoreDetail] = useState<StoreInfoType | null>(
    storeDetailData,
  );
  const [foodLists, setFoodLists] = useState<FoodListlItemType[] | null>(
    foodListData,
  );

  const [loading, setLoading] = useState(true);

  const { data : storeData, error, isLoading, isFetching } = useQuery(
    'store-detail-by-id',
    () => getStoreDetailById(id).then((res) => res),
    { refetchInterval: 5000 }, // 5초마다 데이터를 새로고침합니다.
  );

  // console.log('data', data);

  // useEffect(() => {
  //   if (!router.isReady) return;

  //   const fetchData = async () => {
  //     try {
  //       // const storeDetailRes = await getStoreDetailById(id);
  //       const foodListsRes = await getFoodListDataById(id);

  //       const isLikeRes = await getLikeStoreList();
  //       if (isLikeRes.includes(id)) {
  //         setIsLike(true);
  //       } else {
  //         setIsLike(false);
  //       }

  //       // setStoreDetail(storeDetailRes);
  //       setFoodLists(foodListsRes);
  //       setLoading(false);
  //     } catch (error) {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, [router]);

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

        {!!foodLists ? <FoodLists data={foodLists} /> : <p>데이터 없음</p>}
      </ContentArea>
    </>
  );
}
