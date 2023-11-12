import { GetStaticProps } from 'next';

import { getFoodDetailById } from '@/apis/food/food';
import { FoodDetailItemType } from '@/apis/food/types';

import HeadPageMeta from '@/components/layouts/HeadPageMeta';
import LayoutDefault from '@/components/layouts/LayoutDefault';
import FoodDetail from '@/components/pages/food/FoodDetail';

type Props = {
  foodDetailData: FoodDetailItemType;
};

export default function FoodDetailPage(props: Props) {
  return (
    <>
      <HeadPageMeta title="음식 배달 앱 (next/ts) - 음식 상세" />

      <LayoutDefault>
        <FoodDetail data={props.foodDetailData} />
      </LayoutDefault>
    </>
  );
}

/* 
TODO
- ISR 적용
- getStaticPath 설정
*/
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  try {
    const foodDetailRes = await getFoodDetailById(id);

    return {
      props: {
        foodDetailData: foodDetailRes,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export async function getStaticPaths() {
  /* 
  TODO
  - 사전 렌더링 할 데이터 선정 기준 정하기
  - 임시로 1, 2, 3 id 값의 food 데이터만 사전 렌더링해줌
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
