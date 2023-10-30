import { useEffect, useState } from 'react';

import { getStoreListData } from '@/apis/store/store';
import { StoreItemType } from '@/apis/store/types';

import ContentArea from '@/components/layouts/ContentArea';
import Header from '@/components/layouts/Header';
import { CartButton, LikeButton } from '@/components/ui/header';

import StoreList from './StoreList';

export default function Home() {
  const [storeLists, setStoreLists] = useState<StoreItemType[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getStoreListData();
        setStoreLists(res);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header
        title="메인"
        rightActions={
          <>
            <LikeButton />
            <CartButton />
          </>
        }
      />

      <ContentArea>
        {/* 메인페이지 가게 목록 */}
        {loading ? (
          // TODO Spinner
          <p>로딩중</p>
        ) : storeLists && storeLists.length > 0 ? (
          <StoreList data={storeLists} />
        ) : (
          // TODO 데이터 없음 공통 컴포넌트화 하기
          <div>데이터 없음</div>
        )}
      </ContentArea>
    </>
  );
}
