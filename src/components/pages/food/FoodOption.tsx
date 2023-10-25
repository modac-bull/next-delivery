import styled from '@emotion/styled/macro';
import React, { useState } from 'react';

import { FoodOptionItemType } from '@/apis/food/types';

import { colors, variables } from '@/styles/variables';

type Props = {
  data: FoodOptionItemType;
};

export default function FoodOption({ data }: Props) {
  const { id, price, title } = data;

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <FoodOptionContainer>
      <div className="form-label">
        <input
          name={id}
          value={price}
          id={id}
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor={id}>{title}</label>
      </div>
      <p className="text-price">+{price.toLocaleString()}원</p>
    </FoodOptionContainer>
  );
}

const FoodOptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 0 ${variables['gutter-m']};
  .form-label {
    display: flex;
    align-items: center;
    input[type='checkbox'] {
      width: 20px;
      height: 20px;
      line-height: 1;
      border: 1px solid #222;
      border-radius: 5px;
      :checked {
        border-color: ${colors.primary};
        position: relative;
        &:after {
          content: '';
          position: absolute;
          left: 2px;
          top: 2px;
          bottom: 2px;
          right: 2px;
          border-radius: 3px;
          background-color: ${colors.primary};
        }
      }
    }
    label {
      margin-left: 15px;
      font-size: 18px;
      line-height: 1;
    }
  }
  .text-price {
    font-size: 18px;
  }
`;
