import { DUMMY_STORE_DETAIL, DUMMY_STORE_LIST } from '../store/data';
import { StoreInfo, StoreItemType } from '../store/types';

/* 
가게 리스트 데이터 api
*/
export const getStoreListData = (): Promise<StoreItemType[]> => {
  return new Promise((res, rej) => {
    const success = true; // 임시
    setTimeout(() => {
      if (success) {
        res(DUMMY_STORE_LIST);
      } else {
        rej(new Error());
      }
    }, 400);
  });
};
/* 
가게 상세 데이터 api
*/
export const getStoreDetailByIdx = (idx: number): Promise<StoreInfo> => {
  console.log('idx', idx);
  return new Promise((res, rej) => {
    const success = idx in DUMMY_STORE_DETAIL; // 임시
    setTimeout(() => {
      if (success) {
        res(DUMMY_STORE_DETAIL[idx]);
      } else {
        rej(new Error());
      }
    }, 400);
  });
};
