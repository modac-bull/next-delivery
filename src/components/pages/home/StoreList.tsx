import styled from '@emotion/styled/macro';
import React from 'react';

import { StoreItemType } from '@/apis/store/types';

import { variables } from '@/styles/variables';

import StoreItem from './StoreItem';

type Props = {
  data: StoreItemType[];
};

export default function StoreList({ data }: Props) {
  return (
    <StoreListContainer>
      {data.map((store) => (
        <StoreItem
          key={store.id}
          id={store.id}
          title={store.title}
          type={store.type}
          delivery_time={store.delivery_time}
          review_point={store.review_point}
          review_cnt={store.review_cnt}
          distance={store.distance}
          delivery_price_range={store.delivery_price_range}
          thumImgUrls={store.thumImgUrls}
        />
      ))}
    </StoreListContainer>
  );
}

const StoreListContainer = styled.ul`
  margin-top: 20px;
  padding: 0 ${variables['gutter-m']};
`;
