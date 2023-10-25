// 음식 목록 타입
export interface FoodListlItemType {
  id: string;
  thumbImg: string;
  title: string;
  desc: string;
  price: number;
}

// 음식 상세 타입
export interface FoodDetailItemType extends FoodListlItemType {
  options?: FoodOptionItemType[];
}

// 음식 옵션 타입
export interface FoodOptionItemType {
  id: string;
  title: string;
  price: number;
}

// 장바구니 음식 데이터
export interface selectedFoodInfoType {
  foodId: string | null;
  optionIds: string[];
}
