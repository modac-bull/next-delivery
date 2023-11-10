import { StoreItemType } from '@/apis/store/types';

import ContentArea from '@/components/layouts/ContentArea';
import Header from '@/components/layouts/Header';
import { CartButton, LikeButton } from '@/components/ui/header';
import MypageButton from '@/components/ui/header/LoginButton';

import StoreList from './StoreList';

type Props = {
  data: StoreItemType[];
};

export default function Home({ data }: Props) {
  const storeLists = data;

  return (
    <>
      <Header
        title="메인"
        rightActions={
          <>
            <MypageButton />
            <LikeButton />
            <CartButton />
          </>
        }
      />

      <ContentArea>
        {/* 메인페이지 가게 목록 */}
        {storeLists && storeLists.length > 0 ? (
          <StoreList data={storeLists} />
        ) : (
          // TODO 데이터 없음 공통 컴포넌트화 하기
          <div>데이터 없음</div>
        )}
      </ContentArea>
    </>
  );
}
