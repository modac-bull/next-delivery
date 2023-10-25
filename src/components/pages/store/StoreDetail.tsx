import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { getFoodListDataById } from '@/apis/food/food';
import { FoodListlItemType } from '@/apis/food/types';
import { getStoreDetailById } from '@/apis/store/store';
import { StoreInfoType } from '@/apis/store/types';

import ContentArea from '@/components/layouts/ContentArea';
import Header from '@/components/layouts/Header';
import { BackButton, CartButton, LikeButton } from '@/components/ui/header';

import StoreInfo from './StoreInfo';

export default function StoreDetail() {
  const router = useRouter();
  const id = router.query.id as string;

  const [storeDetail, setStoreDetail] = useState<StoreInfoType | null>(null);
  const [foodLists, setFoodLists] = useState<FoodListlItemType[] | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;

    const fetchData = async () => {
      try {
        const storeDetailRes = await getStoreDetailById(id);
        const foodListsRes = await getFoodListDataById(id);

        console.log('id', IDBKeyRange);
        console.log(storeDetailRes);
        setStoreDetail(storeDetailRes);
        setFoodLists(foodListsRes);

        setLoading(false);
      } catch (error) {
        console.log('error');
        setLoading(false);
      }
    };
    fetchData();
  }, [router]);

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
        {loading ? (
          <p>로딩중</p>
        ) : !!storeDetail ? (
          <StoreInfo data={storeDetail} />
        ) : (
          <p>데이터 없음</p>
        )}
      </ContentArea>
    </>
  );
}
