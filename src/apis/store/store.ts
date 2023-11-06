import { delay } from '@/utils/delay';

import { DUMMY_STORE_DETAIL, DUMMY_STORE_LIST } from '../store/data';
import { StoreInfoType, StoreItemType } from '../store/types';

/* 
가게 리스트 데이터 api
*/
export const getStoreListData = async (): Promise<StoreItemType[]> => {
  const success = true; // 임시
  await delay(400);

  if (success) {
    return DUMMY_STORE_LIST; // 성공 시 데이터 반환
  } else {
    throw new Error('Error : ');
  }
};
/* 
가게 상세 데이터 api
*/
export const getStoreDetailById = async (
  id: string,
): Promise<StoreInfoType> => {
  const success = id in DUMMY_STORE_DETAIL; // id 가 있을 경우에만 데이터 조회F
  await delay(400);

  if (success) {
    return DUMMY_STORE_DETAIL[id];
  } else {
    throw new Error('Error : ');
  }
};
