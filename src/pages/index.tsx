import { getStoreListData } from '@/apis/store/store';
import { StoreItemType } from '@/apis/store/types';

import HeadPageMeta from '@/components/layouts/HeadPageMeta';
import LayoutDefault from '@/components/layouts/LayoutDefault';
import Home from '@/components/pages/home/Home';

type Props = {
  storeData: StoreItemType[];
};

export default function HomePage(props: Props) {
  console.log('props : ', props);
  return (
    <>
      <HeadPageMeta title="음식 배달 앱 (next/ts)" />

      <LayoutDefault>
        <Home data={props.storeData} />
      </LayoutDefault>
    </>
  );
}

/* 
TODO
- SSR로 변경하기
- 데이터 페칭 차이 구분
*/
export async function getServerSideProps() {
  const res = await getStoreListData();

  return {
    props: {
      storeData: res,
    },
  };
}
