import styled from '@emotion/styled/macro';
import React from 'react';

import Button from '@/components/ui/buttons/Button';

import { variables } from '@/styles/variables';

type Props = {
  price: number;
  onClick: () => void;
};

export default function PriceInfo({ price, onClick }: Props) {
  return (
    <PriceInfoContainer>
      <Button variant="primary" onClick={onClick}>
        <span id="total-price">{price.toLocaleString()}</span>원 담기
      </Button>
    </PriceInfoContainer>
  );
}

const PriceInfoContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: ${variables['max-width']};
  margin: 0 auto;
  background-color: #fff;
  border-top: 1px solid #ededed;
  padding: 20px 10px;
`;
