'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ProductF from '@/components/productGroup';
import Link from 'next/link';
import { supabase } from '@/supabaseClient';

// Product와 CartItem 타입을 정의합니다.
type Product = {
  prodnum: number;
  image: string;
  name: string;
  price: number;
  saleprice: number;
};

type CartItem = {
  id: number;
  result: boolean;
  quantity: number; // 수량을 추가합니다.
  product: Product; // product는 이제 항상 존재해야 합니다.
};

export default function CartView() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // CartItem 타입을 사용합니다.
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCartItems() {
      // 모든 제품을 가져옵니다.
      const { data: products, error: productError } = await supabase
        .from('product')
        .select('prodnum, image, name, price, saleprice');

      if (productError) {
        console.error('상품 가져오기 에러:', productError);
        setLoading(false);
        return;
      }

      // 장바구니 항목을 가져옵니다.
      const { data: cartItems, error: cartError } = await supabase
        .from('cart')
        .select('id, cartnum, result, quantity')
        .eq('result', false);

      if (cartError) {
        console.error('장바구니 아이템 가져오기 에러:', cartError);
        setLoading(false);
        return;
      }

      // cartItems의 product_id와 products의 prodnum을 비교하여 일치하는 제품 정보를 추가합니다.
      const formattedData: CartItem[] = cartItems.map((item: any) => {
        const product = products.find(
          (product: any) => product.prodnum === item.cartnum
        );
        if (!product) {
          throw new Error(`Product with prodnum ${item.cartnum} not found`);
        }
        return {
          id: item.id,
          result: item.result,
          quantity: item.quantity || 1, // 수량이 없는 경우 기본값 1
          product: product,
        };
      });

      setCartItems(formattedData);
      setLoading(false);
    }

    fetchCartItems();
  }, []);

  const handleIncrease = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);
  };

  const handleDecrease = (index: number) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
    }
    setCartItems(newCartItems);
  };

  const handlePurchase = async () => {
    // 구매하기 버튼을 눌렀을 때 result를 true로 업데이트
    const updates = cartItems.map((item) => {
      return supabase.from('cart').update({ result: true }).eq('id', item.id);
    });

    try {
      await Promise.all(updates);
      alert('구매가 완료되었습니다.');
      setCartItems([]); // 장바구니를 비웁니다.
    } catch (error) {
      console.error('구매 완료 에러:', error);
      alert('구매 중 오류가 발생했습니다.');
    }
  };

  if (loading) {
    return <p>로딩 중...</p>;
  }

  if (!cartItems.length) {
    return <p>장바구니에 상품이 없습니다.</p>;
  }

  const totalOriginalPrice = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const totalSalePrice = cartItems.reduce(
    (sum, item) => sum + item.product.saleprice * item.quantity,
    0
  );
  const totalDiscount = totalOriginalPrice - totalSalePrice;
  const shippingCost = 3000; // 예를 들어, 고정 배송비

  return (
    <div className='px-20 '>
      <div>
        <div className='my-4 mt-0 pt-4'>
          <Link href={'/sale'}>
            <Image
              src='/download.png'
              width={150}
              height={70}
              alt='로고 이미지'
            />
          </Link>
        </div>
        <div
          className='bg-white border border-gray-300 border-t-2 p-10 mx-auto'
          style={{ width: '1310px' }}
        >
          <div className='flex'>
            <Link href={'/sale'}>
              <span className='text-4xl justify-start'>
                &lt; <span className='font-bold'>장바구니</span>
              </span>
            </Link>
            <div className='mt-auto ml-auto'>{/* 구매 과정 단계 표시 */}</div>
          </div>
          <div className='grid grid-cols-11 gap-4 mt-8'>
            {cartItems.map((item, index) => (
              <div
                key={item.id}
                className='col-span-7 border border-gray-200 pt-2'
              >
                <span className='ml-6 text-lg font-bold'>배송 상품</span>
                <hr className='w-full my-2' />
                <div className='flex px-4'>
                  <input type='checkbox' className='my-auto' />
                  <Image
                    src={item.product.image}
                    width={150}
                    height={150}
                    alt={item.product.name}
                  />
                  <div className='text-sm ml-2'>
                    <p>{item.product.name}</p>
                    <p className='mt-3 text-green-600'>오늘 도착 보장</p>
                    <p className='mt-1 text-base'>{item.product.saleprice}원</p>
                    <div className='flex mt-2'>
                      <button
                        onClick={() => handleDecrease(index)}
                        className='px-4 py-2 border-y border-l border-gray-300 rounded-l-md'
                      >
                        -
                      </button>
                      <span className='px-4 py-2 border-t border-b border-gray-300'>
                        {item.quantity || 1}
                      </span>
                      <button
                        onClick={() => handleIncrease(index)}
                        className='px-4 py-2 border-y border-r border-gray-300 rounded-r-md'
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className='ml-auto underline underline-offset-1 text-sm'>
                    삭제
                  </p>
                </div>
                <div className='bg-gray-100 text-center py-3 text-sm text-blue-700'>
                  <Link href={'/sale'}>
                    <p>상품 추가하기</p>
                  </Link>
                </div>
              </div>
            ))}
            <div className='col-span-4 '>
              <div className='border border-gray-200 pt-2'>
                <span className='ml-6 text-lg font-bold'>주문 예상 금액</span>
                <div className='flex px-6 text-sm mt-3'>
                  <span>총 상품 가격</span>
                  <span className='ml-auto'>
                    {totalOriginalPrice.toLocaleString()}원
                  </span>
                </div>
                <div className='flex px-6 text-sm mt-2'>
                  <span>총 할인</span>
                  <span className='ml-auto'>
                    -{totalDiscount.toLocaleString()}원
                  </span>
                </div>
                <div className='flex px-6 text-sm mt-2'>
                  <span>총 배송비</span>
                  <span className='ml-auto'>
                    +{shippingCost.toLocaleString()}원
                  </span>
                </div>
                <hr className='mx-5 mt-3' />
                <span className='flex justify-end mr-6 mt-2'>
                  <span className='text-lg font-bold '>
                    {(totalSalePrice + shippingCost).toLocaleString()}
                  </span>
                  원
                </span>
                <div
                  className='text-center bg-blue-600 text-white p-3 m-3 rounded-sm cursor-pointer'
                  onClick={handlePurchase}
                >
                  <p>구매하기</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex text-xs mt-6 ml-2'>
            <input type='checkbox' className='mt-1' />
            <span className='mx-3 mt-2'>전체선택</span>
            <button className='border p-1 mt-1'>전체 삭제</button>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='flex flex-col'>
            <ProductF />
            <ProductF />
            <ProductF />
          </div>
        </div>
      </div>
    </div>
  );
}
