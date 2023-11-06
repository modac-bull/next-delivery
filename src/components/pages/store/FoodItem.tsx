import styled from '@emotion/styled/macro';
import Link from 'next/link';
import React from 'react';

import { FoodListlItemType } from '@/apis/food/types';

type Props = {
  data: FoodListlItemType;
};

export default function FoodItem({ data }: Props) {
  const { title, desc, id, price, thumbImg } = data;
  return (
    <FoodItemContainer>
      <Link href={`/food/${id}`}>
        <StyledLink>
          <div className="txt-wrap">
            <p className="title-food">{title}</p>
            <p className="desc-food">{desc}</p>
            <p className="price-food">{price.toLocaleString()}원</p>
          </div>
          <div className="img-wrap">
            <img src={thumbImg} />
          </div>
        </StyledLink>
      </Link>
    </FoodItemContainer>
  );
}

const FoodItemContainer = styled.li`
  &:not(:nth-last-of-type(1)) {
    margin-bottom: 25px;
    border-bottom: 1px solid #ededed;
  }
  .txt-wrap {
    flex: 0 0 60%;
    width: 60%;
    .title-food {
      font-size: 16px;
      font-weight: 700;
    }
    .desc-food {
      margin-top: 5px;
      font-size: 12px;
      color: #666;
    }
    .price-food {
      margin-top: 8px;
      font-size: 16px;
    }
  }
  .img-wrap {
    flex: 0 0 30%;
    width: 30%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: 5px;
  }
`;

const StyledLink = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 25px;
`;
