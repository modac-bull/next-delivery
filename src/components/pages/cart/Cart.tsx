import React, { useEffect, useState } from 'react';

import { getFoodDetailById } from '@/apis/food/food';
import { FoodDetailItemType, SelectedFoodInfoType } from '@/apis/food/types';

import { localStorageKey } from '@/utils/constants';
import LocalStorageUtil from '@/utils/localStorageUtil';

import ContentArea from '@/components/layouts/ContentArea';
import Header from '@/components/layouts/Header';
import { BackButton, CartButton, LikeButton } from '@/components/ui/header';

import CartLists from './CartLists';

/* 
로컬 스토리지 데이터 가져오기
TODO
- 추후 api 폴더로 옮기기
*/
async function getCartFoodData() {
  const getCartItemData = LocalStorageUtil.get<SelectedFoodInfoType[]>(
    localStorageKey['CART_KEY'],
    [],
  );
  const cartItemData = await Promise.all(
    getCartItemData.map((cart: SelectedFoodInfoType) =>
      getFoodDetailById(cart.foodId),
    ),
  );
  return cartItemData;
}

export default function Cart() {
  const [cartLists, setCartLists] = useState<FoodDetailItemType[] | null>(null);
  const [loading, setLoading] = useState(true);

  const [selectedId, setSelectedId] = useState<string>('');

  // 로컬 스토리지 값으로 데이터 가져오기
  const fetchData = async () => {
    try {
      const cartFoodRes = await getCartFoodData();
      setCartLists(cartFoodRes);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const selectRemoveItem = (menuId: string) => {
    console.log('클릭?', menuId);
    setSelectedId(menuId);
  };

  useEffect(() => {
    if (!selectedId) return;
    let cart = LocalStorageUtil.get<SelectedFoodInfoType[]>(
      localStorageKey['CART_KEY'],
    );

    // 아이템 제거
    cart = cart.filter((item) => item.foodId !== selectedId);

    // 변경된 장바구니 데이터를 다시 로컬 스토리지에 저장
    LocalStorageUtil.set(localStorageKey['CART_KEY'], cart);

    fetchData();

  }, [selectedId]);

  return (
    <>
      <Header
        title="장바구니 페이지"
        leftActions={<BackButton />}
        rightActions={
          <>
            <LikeButton />
            <CartButton />
          </>
        }
      />

      <ContentArea>
        {loading ? (
          <p>로딩중</p>
        ) : !!cartLists ? (
          <CartLists data={cartLists} selecteHandler={selectRemoveItem} />
        ) : (
          <p>데이터 없음</p>
        )}
      </ContentArea>
    </>
  );
}
