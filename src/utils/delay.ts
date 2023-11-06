/* api 딜레이 호출 유틸 함수 */
// 비동기 딜레이를 주는 유틸리티 함수
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
