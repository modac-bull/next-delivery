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
      delivery_time={data.delivery_time}
      review_point={data.review_point}
      review_cnt={data.review_cnt}
      distance={data.distance}
      delivery_price_range={data.delivery_price_range}
      thumImgUrls={data.thumImgUrls}
    />
  );
}
