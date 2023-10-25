import styled from '@emotion/styled/macro';
import React from 'react';

import { StoreInfoType } from '@/apis/store/types';

import { variables } from '@/styles/variables';

import LikeItem from './LikeItem';

type Props = {
  data: StoreInfoType[];
};
export default function LikeLists({ data }: Props) {
  return (
    <StoreInfoContainer>
      {data && data.length > 0 ? (
        data?.map((store) => <LikeItem data={store} />)
      ) : (
        <li>좋아요 목록이 없습니다.</li>
      )}
    </StoreInfoContainer>
  );
}

const StoreInfoContainer = styled.ul`
  padding: 20px ${variables['gutter-m']};
`;
