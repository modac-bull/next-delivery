import { GetStaticProps } from 'next';
import path from 'path';

import { getFoodListDataById } from '@/apis/food/food';
import { FoodDetailItemType } from '@/apis/food/types';
import { getStoreDetailById } from '@/apis/store/store';
import { StoreInfoType } from '@/apis/store/types';

import HeadPageMeta from '@/components/layouts/HeadPageMeta';
import LayoutDefault from '@/components/layouts/LayoutDefault';
import StoreDetail from '@/components/pages/store/StoreDetail';

type Props = {
  storeDetailData: StoreInfoType;
  foodListData: FoodDetailItemType[];
};

export default function StoreDetailPage(props: Props) {
  return (
    <>
      <HeadPageMeta title="음식 배달 앱 (next/ts) - 상세" />

      <LayoutDefault>
        <StoreDetail
          storeDetailData={props.storeDetailData}
          foodListData={props.foodListData}
        />
      </LayoutDefault>
    </>
  );
}

/* 
TODO 
- ISR 방식으로 변경
- 동적 라우팅에 getStaticProps 적용하기
- 클라이언트 사이드 페칭이랑 차이점 구분하기
*/

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = context.params?.id! as string;

  try {
    const storeDetailRes = await getStoreDetailById(id);
    const foodListRes = await getFoodListDataById(id);
    return {
      props: {
        storeDetailData: storeDetailRes,
        foodListData: foodListRes,
      },
      revalidate: 60,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export async function getStaticPaths() {
  /* 
  TODO
  - 사전 렌더링 할 데이터 선정 기준 정하기
  - 임시로 1, 2, 3 id 값의 store 데이터만 사전 렌더링해줌
  */
  const featuredProducts = ['1', '2', '3'];

  const paths = featuredProducts.map((product) => ({
    params: { id: product },
  }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
}
