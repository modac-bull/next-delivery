import styled from '@emotion/styled/macro';
import React from 'react';

import { FoodDetailItemType } from '@/apis/food/types';

import { variables } from '@/styles/variables';

import FoodOption from './FoodOption';

type Props = {
  data: FoodDetailItemType;
};
export default function FoodInfo({ data }: Props) {
  const { id, title, desc, price, thumbImg, options } = data;

  return (
    <>
      <FoodInfoContainer>
        <div className="img-wrap">
          <img src={thumbImg} />
        </div>
        <div className="info-wrap">
          <h2 className="title-food">{title}</h2>
          <p className="desc-food">{desc}</p>
          <div className="price-wrap">
            <p className="title-feature">가격</p>
            <p className="text-price">{price.toLocaleString()}원</p>
          </div>
        </div>
        <Divider />

        <SectionTitle>추가선택</SectionTitle>
        {options?.map((option) => <FoodOption data={option} />)}
      </FoodInfoContainer>
    </>
  );
}

const FoodInfoContainer = styled.div`
  .img-wrap {
    overflow: hidden;
    img {
      width: 100%;
      aspect-ratio: 5 / 3;
      object-fit: cover;
    }
  }
  .info-wrap {
    padding: 20px 20px;
  }
  .title-food {
    font-size: 18px;
    font-weight: 700;
  }
  .desc-food {
    margin-top: 7px;
    font-size: 14px;
    color: #999;
    line-height: 1.3;
  }
  .price-wrap {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .title-feature {
      font-size: 20px;
      font-weight: 500;
    }
    .text-price {
      font-weight: 700;
      font-size: 20px;
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 8px;
  background-color: #f4f4f4;
  border-top: 1px solid #ededed;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin-top: 25px;
  padding: 0 ${variables['gutter-m']};
`;
