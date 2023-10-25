import React, { useEffect, useState } from 'react';

import { getStoreDetailById } from '@/apis/store/store';
import { StoreInfoType } from '@/apis/store/types';

import { localStorageKey } from '@/utils/constants';
import LocalStorageUtil from '@/utils/localStorageUtil';

import ContentArea from '@/components/layouts/ContentArea';
import Header from '@/components/layouts/Header';
import {
  BackButton,
  CartButton,
  HomeButton,
  LikeButton,
} from '@/components/ui/header';

import LikeLists from './LikeLists';

export default function Like() {
  const [likeLists, setLikeLists] = useState<StoreInfoType[] | null>(null);
  const [loading, setLoading] = useState(true);

  const [selectedId, setSelectedId] = useState<string>('');

  // 로컬 스토리지 값으로 데이터 가져오기
  const fetchData = async () => {
    try {
      const getLikeStoreItemData = LocalStorageUtil.get<string[]>(
        localStorageKey['LIKE_KEY'],
        [],
      );
      /* id와 일치하는 가게 상세 데이터 api요청 */
      const likeStoreItemData = await Promise.all(
        getLikeStoreItemData.map((likeId: string) =>
          getStoreDetailById(likeId),
        ),
      );
      setLoading(false);
      setLikeLists(likeStoreItemData);
      return likeStoreItemData;
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const selectRemoveItem = (menuId: string) => {
    console.log('클릭?', menuId);
    setSelectedId(menuId);
  };

  return (
    <>
      <Header
        title="좋아요 페이지"
        leftActions={<BackButton />}
        rightActions={
          <>
            <HomeButton />
            <LikeButton />
            <CartButton />
          </>
        }
      />

      <ContentArea>
        {loading ? (
          <p>로딩중</p>
        ) : !!likeLists ? (
          <LikeLists data={likeLists} />
        ) : (
          <p>데이터 없음</p>
        )}
      </ContentArea>
    </>
  );
}
