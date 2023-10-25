import styled from '@emotion/styled/macro';
import React from 'react';

import { FoodDetailItemType, SelectedFoodInfoType } from '@/apis/food/types';

import CartItem from './CartItem';

type Props = {
  data: FoodDetailItemType[];
  selecteHandler: (menuId: string) => void;
};

export default function CartLists({ data, selecteHandler }: Props) {
  return (
    <CartListsContainer>
      {data?.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          data={cartItem}
          selecteHandler={selecteHandler}
        />
      ))}
    </CartListsContainer>
  );
}

const CartListsContainer = styled.ul`
  padding-top: 20px;
`;
