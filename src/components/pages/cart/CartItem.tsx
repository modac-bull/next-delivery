import styled from '@emotion/styled/macro';
import React from 'react';
import { FaTimes } from 'react-icons/fa';

import { FoodDetailItemType, SelectedFoodInfoType } from '@/apis/food/types';

import { localStorageKey } from '@/utils/constants';
import LocalStorageUtil from '@/utils/localStorageUtil';

import { variables } from '@/styles/variables';

type Props = {
  data: FoodDetailItemType;
  selecteHandler: (menuId : string) => void;
};

export default function CartItem({ data, selecteHandler }: Props) {
  const { id, title, desc, price, thumbImg, options } = data;

  const removeCartHandler = (menuId: string) => {
    selecteHandler(menuId)
  };

  return (
    <CartItemContainer>
      <div className="img-wrapper">
        <img src={thumbImg} />
      </div>
      <div className="info-wrapper">
        <button
          type="button"
          className="btn-close"
          onClick={() => removeCartHandler(String(id))}
        >
          <i>{<FaTimes />}</i>
        </button>
        <h3 className="title-food">{title}</h3>
        <ul className="desc-wrap">
          <li className="text-price">가격 : {price.toLocaleString()}원</li>
          <li className="text-desc">{desc}</li>
          <li className="text-options">
            선택된 옵션 :
            {options?.map((option) => (
              <span key={option.id}>{option.title}</span>
            ))}
          </li>
        </ul>
      </div>
    </CartItemContainer>
  );
}

const CartItemContainer = styled.div`
  display: flex;
  padding-left: ${variables['gutter-m']};
  padding-right: ${variables['gutter-m']};
  &:not(:last-child) {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ededed;
  }
  .img-wrapper {
    flex: 0 0 30%;
    width: 30%;
    aspect-ratio: 1 /1;
    overflow: hidden;
    border-radius: 5px;
  }
  .info-wrapper {
    padding-left: 30px;
    position: relative;
    flex: 0 0 70%;
    width: 70%;
    .btn-close {
      position: absolute;
      right: 0;
      top: 0;
    }
    .title-food {
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: 500;
    }
    .desc-wrap {
      color: #999;
      li {
        margin: 4px 0;
      }
      .text-desc {
        font-size: 15px;
      }
      .text-price {
        font-size: 15px;
      }
      .text-options {
        font-size: 15px;
        span {
          margin-right: 5px;
        }
      }
    }
  }
`;
