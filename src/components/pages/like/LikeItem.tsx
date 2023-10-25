import React from 'react';

import { StoreInfoType } from '@/apis/store/types';

type Props = {
  data: StoreInfoType;
};
export default function LikeItem({ data }: Props) {
  const { title } = data;

  return <div>{title}</div>;
}
