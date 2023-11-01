import React from 'react';

import { StoreInfoType } from '@/apis/store/types';

import StoreItem from '../home/StoreItem';

type Props = {
  data: StoreInfoType;
};
export default function LikeItem({ data }: Props) {
  return (
    <StoreItem
      key={data.id}
      id={data.id}
      title={data.title}
      type={data.type}
      deliveryTime={data.delivery_time}
      reviewPoint={data.review_point}
      reviewCnt={data.review_cnt}
      distance={data.distance}
      deliveryPriceRange={data.delivery_price_range}
      thumImgUrls={data.thumImgUrls}
    />
  );
}
