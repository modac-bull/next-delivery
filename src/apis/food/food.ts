import { delay } from '@/utils/delay';

import { DUMMY_FOOD_DETAIL, DUMMY_FOOD_LIST } from './data';
import { FoodDetailItemType, FoodListlItemType } from './types';

/* 
음식 리스트 데이터 api
*/
export const getFoodListDataById = async (
  id: string,
): Promise<FoodListlItemType[]> => {
  const success = true; // 임시

  await delay(400);

  if (success) {
    return DUMMY_FOOD_LIST[id];
  } else {
    throw new Error('Error : ');
  }
};

/* 
음식 상세 데이터 api
*/
export const getFoodDetailById = async (
  id: string,
): Promise<FoodDetailItemType> => {
  const success = true; // 임시

  await delay(400);

  if (success) {
    return DUMMY_FOOD_DETAIL[id];
  } else {
    throw new Error('Error : ');
  }
};
