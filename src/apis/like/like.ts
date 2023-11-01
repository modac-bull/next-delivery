import { localStorageKey } from '@/utils/constants';
import LocalStorageUtil from '@/utils/localStorageUtil';

const LIKE_KEY = localStorageKey.LIKE_KEY;

/* 
찜 가게 요청 API
1. 80% 확률로 성공하도록 세팅
2. 성공하면 true, 로컬스토리지에 likeIdx 배열로 저장
3. 실패하면 false

TODO
- async 구문으로 바꿔보고 변경점 경험해보기
*/
export const postLikeStore = (id: string): Promise<boolean> => {
  return new Promise((res, rej) => {
    const isSuccess = Math.floor((Math.random() * 10) % 10) < 9; // 80%  확률로 성공
    const getLikeIds = LocalStorageUtil.get<string[]>(LIKE_KEY, []);
    const isExist = getLikeIds.includes(id);
    setTimeout(() => {
      if (isSuccess) {
        if (isExist) {
          return res(true);
        }
        getLikeIds.push(id);
        LocalStorageUtil.set(LIKE_KEY, getLikeIds);
        return res(true);
      } else {
        return rej(false);
      }
    }, 400);
  });
};

/* 
찜 가게 해제 요청 API
1. 80% 확률로 성공하도록 세팅
2. 성공하면 true, 로컬스토리지에서 likeIdx 배열에서 제거
3. 실패하면 false
*/
export const deleteLikeStore = (id: string): Promise<boolean> => {
  return new Promise((res, rej) => {
    const isSuccess = Math.floor((Math.random() * 10) % 10) < 9; // 80%  확률로 성공
    const getLikeIds = LocalStorageUtil.get<string[]>(LIKE_KEY, []);
    const isExist = getLikeIds.includes(id);

    setTimeout(() => {
      if (isSuccess) {
        if (!isExist) {
          return res(true);
        }
        // 로컬 스토리지에서 storeIdx 배열값 제거
        const updatedLikeIds = getLikeIds.filter(
          (likeId: string) => likeId !== id,
        );
        LocalStorageUtil.set(LIKE_KEY, updatedLikeIds);

        return res(true);
      } else {
        return rej(false);
      }
    }, 400);
  });
};

/** 로컬 스토리지 좋아요 가게 Id 배열 반환 */
export const getLikeStoreList = (): Promise<string[]> => {
  return new Promise((res) => {
    const getLikeIds = LocalStorageUtil.get<string[]>(LIKE_KEY, []);
    setTimeout(() => {
      res(getLikeIds);
    }, 400);
  });
};
