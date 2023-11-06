import styled from '@emotion/styled/macro';
import React from 'react';

import { FoodListlItemType } from '@/apis/food/types';

import { variables } from '@/styles/variables';

import FoodItem from './FoodItem';

type Props = {
  data: FoodListlItemType[];
};
export default function FoodLists({ data }: Props) {
  return (
    <FoodListsContainer>
      {/* 추천 메뉴 */}
      <SectionTitle>추천 메뉴</SectionTitle>
      {data.length > 0 &&
        data.map((food) => <FoodItem key={food.id} data={food} />)}
    </FoodListsContainer>
  );
}
const FoodListsContainer = styled.ul`
  padding: 0 ${variables['gutter-m']};
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin-top: 25px;
  padding-bottom: 20px;
`;
