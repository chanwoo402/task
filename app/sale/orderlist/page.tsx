'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/supabaseClient';

// Product와 CartItem 타입을 정의합니다.
type Product = {
  prodnum: number;
  image: string;
  name: string;
  saleprice: number;
};

type CartItem = {
  id: number;
  result: boolean;
  quantity: number;
  product: Product;
};

export default function Orderlist() {
  const [orderItems, setOrderItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrderItems() {
      // 모든 제품을 가져옵니다.
      const { data: products, error: productError } = await supabase
        .from('product')
        .select('prodnum, image, name, saleprice');

      if (productError) {
        console.error('상품 가져오기 에러:', productError);
        setLoading(false);
        return;
      }

      // 장바구니 항목을 가져옵니다.
      const { data: cartItems, error: cartError } = await supabase
        .from('cart')
        .select('cartnum, result')
        .eq('result', true);

      if (cartError) {
        console.error('주문 아이템 가져오기 에러:', cartError);
        setLoading(false);
        return;
      }

      // cartItems의 product_id와 products의 prodnum을 비교하여 일치하는 제품 정보를 추가합니다.
      const formattedData: CartItem[] = cartItems.map((item: any) => {
        const product = products.find(
          (product: any) => product.prodnum === item.cartnum
        );
        if (!product) {
          throw new Error(`Product with prodnum ${item.product_id} not found`);
        }
        return {
          id: item.id,
          result: item.result,
          quantity: item.quantity || 1,
          product: product,
        };
      });

      setOrderItems(formattedData);
      setLoading(false);
    }

    fetchOrderItems();
  }, []);

  if (loading) {
    return <p>로딩 중...</p>;
  }

  if (!orderItems.length) {
    return <p>주문한 상품이 없습니다.</p>;
  }

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col w-40 mt-5'>
        <div className='w-full bg-sky-700 h-14'>
          <p className='text-xl text-white text-center font-bold mt-3'>
            MY쿠팡
          </p>
        </div>
        <Link href={'/login/TT'}>
          <div className='bg-gray-50 border-x border-gray-300 p-4'>
            <p className='my-3 text-sm font-bold'>MY 쇼핑</p>
            <p className='mt-1 text-xs text-blue6500'>주문목록/배송조회</p>
            <p className='mt-1 text-xs'>취소/반품/교환/환불내역</p>
            <p className='mt-1 text-xs'>와우 멤버십</p>
            <p className='mt-1 text-xs'>로켓프레시 프레시백</p>
            <p className='mt-1 text-xs'>정기배송관리</p>
            <p className='mt-1 text-xs '>영수증 조회/줄력</p>
          </div>
          <div className='bg-gray-50 border border-gray-300 p-4'>
            <p className='my-3 text-sm font-bold'>MY 해택</p>
            <p className='mt-1 text-xs'>할인쿠폰</p>
            <p className='mt-1 text-xs'>쿠팡캐시/기프트카드</p>
          </div>
          <div className='bg-gray-50 border-x border-gray-300 p-4'>
            <p className='my-3 text-sm font-bold'>MY 활동</p>
            <p className='mt-1 text-xs text-blue-500'>문의하기</p>
            <p className='mt-1 text-xs'>문의내역 확인</p>
            <p className='mt-1 text-xs'>리뷰관리</p>
            <p className='mt-1 text-xs'>찜 리스트</p>
          </div>
          <div className='bg-gray-50 border border-gray-300 p-4'>
            <p className='my-3 text-sm font-bold'>MY 해택</p>
            <p className='mt-1 text-xs'>할인쿠폰</p>
            <p className='mt-1 text-xs'>쿠팡캐시/기프트카드</p>
          </div>
        </Link>
        <div className='border mt-3 p-3 flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122'
            />
          </svg>
          <p className='text-blue-700 ml-3 text-sm'>쿠팡문의</p>
        </div>

        <div className='border-x  p-3 flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122'
            />
          </svg>
          <p className='text-blue-700 ml-3 text-sm'>쿠팡문의</p>
        </div>

        <div className='border p-3 flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122'
            />
          </svg>
          <p className='text-blue-700 ml-3 text-sm'>쿠팡문의</p>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex'>
          <div className='border-r'>
            <div className='h-14 w- bg-cyan-500 mt-5 text-white flex px-6'>
              <p className='py-4 mr-24'>쿠페이 머니</p>
              <p className='flex ml-20 py-3 text-2xl font-light'>1,001,000</p>
              <p className='ml-1 mt-5 text-sm'>원</p>
            </div>
          </div>
          <div>
            <div className='h-14  bg-cyan-500 mt-5 text-white flex px-6'>
              <p className='py-4 mr-24'>쿠팡 캐시</p>
              <p className='flex ml-20 py-3 text-2xl font-light'>1,001,000</p>
              <p className='ml-1 mt-5 text-sm'>원</p>
            </div>
          </div>
        </div>
        <div className='mt-10 ml-7 mr-3 '>
          <p className='text-lg font-bold'>주문목록</p>
          <div className='border rounded-sm w-96  p-2  border-gray-300 flex'>
            <input
              type='text'
              placeholder='주문한 상품을 검색할 수 있어요!'
              className='w-64 text-sm'
            />
            <div className='ml-auto mr-1 '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5 text-blue-600'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                />
              </svg>
            </div>
          </div>
          <div>
            <div className='text-xs text-center mt-3 flex '>
              <div className='border border-gray-300 p-1 w-20 rounded-2xl'>
                최근 6개월
              </div>
              <div className='border border-gray-300 p-1 w-16 rounded-2xl ml-1'>
                2024
              </div>
              <div className='border border-gray-300 p-1 w-16 rounded-2xl ml-1'>
                2023
              </div>
              <div className='border border-gray-300 p-1 w-16 rounded-2xl ml-1'>
                2022
              </div>
              <div className='border border-gray-300 p-1 w-16 rounded-2xl ml-1'>
                2021
              </div>
              <div className='border border-gray-300 p-1 w-16 rounded-2xl ml-1'>
                2020
              </div>
              <div className='border border-gray-300 p-1 w-16 rounded-2xl ml-1'>
                2019
              </div>
            </div>
          </div>

          <div className='mt-8 border border-gray-100 rounded px-6 pb-6 shadow-md'>
            {orderItems.map((item) => (
              <div key={item.id} className='mt-4'>
                <div className='flex'>
                  <span className='text-lg m-3 font-bold'>2020.12.12 주문</span>
                  <span className='ml-auto text-blue-600 mt-4'>
                    주문 상세보기
                  </span>
                </div>
                <div className='grid grid-cols-7 border rounded'>
                  <div className='col-span-5 flex flex-col px-6 border-r'>
                    <div className='flex'>
                      <p className='my-3 text-xl font-bold'>배송완료</p>
                      <p className='my-3 text-lg text-green-600 ml-3'>
                        12/26(토) 도착
                      </p>
                      <div className='ml-auto mt-3'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='w-6 h-6'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z'
                          />
                        </svg>
                      </div>
                    </div>
                    <div className='flex mb-5'>
                      <div className='my-4 '>
                        <Image
                          src={item.product.image}
                          width={50}
                          height={50}
                          alt={item.product.name}
                        />
                      </div>
                      <div className='flex flex-col ml-2 text-sm'>
                        <p className='w-80'>{item.product.name}</p>
                        <div className='flex'>
                          <p className='w-80 font-light mt-2 '>
                            {item.product.saleprice}원 - {item.quantity}개
                          </p>
                          <button className='border p-2 mt-2 text-sm'>
                            장바구니 담기
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-span-2 p-5 text-center my-auto'>
                    <button className='w-full border border-blue-600 py-2 text-blue-600 rounded text-sm'>
                      배송조회
                    </button>
                    <button className='w-full border border-gray-300 py-2 rounded text-sm mt-2'>
                      교환, 반품 신청
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
