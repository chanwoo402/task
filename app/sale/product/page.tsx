'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/supabaseClient';
import ProductF from '@/components/productGroup';

export default function Product() {
  const [product, setProduct] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      const { data, error } = await supabase.from('product').select('*');

      if (error) {
        console.error('Error fetching product:', error);
      } else {
        setProduct(data);
      }
      setLoading(false);
    }

    fetchProduct();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>No product found</p>;
  }

  return (
    <div>
      <div className='border-t border-gray-300 mt-1'>
        <div className='flex justify-center mt-5'>
          <div className='flex flex-col mr-10'>
            <Image
              src={product[0].image}
              width={70}
              height={70}
              alt={product[0].name}
            />
            <Image
              src={product[0].image}
              width={70}
              height={70}
              alt={product[0].name}
            />{' '}
            <Image
              src={product[0].image}
              width={70}
              height={70}
              alt={product[0].name}
            />{' '}
            <Image
              src={product[0].image}
              width={70}
              height={70}
              alt={product[0].name}
            />{' '}
            <Image
              src={product[0].image}
              width={70}
              height={70}
              alt={product[0].name}
            />{' '}
            <Image
              src={product[0].image}
              width={70}
              height={70}
              alt={product[0].name}
            />
          </div>
          <div>
            <Image
              src={product[0].image}
              width={380}
              height={380}
              alt={product[0].name}
            />
          </div>
          <div className='m-7 flex flex-col'>
            <div className='flex mb-2'>
              <div className='flex flex-col mr-32'>
                <p className='text-blue-500 text-xs'>{product[0].name}</p>
                <p className='mt-1 font-bold'>{product[0].name}</p>
                <p className='text-xs text-blue-500'>⭐️⭐️⭐️⭐️⭐️ 상품명</p>
              </div>
              <div className='ml-48'>
                <div className='flex mt-3'>
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
                      d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                    />
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 ml-3'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z'
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className='pt-2 border-t border-gray-400 mb-3'>
              <p className='mt-3 text-xs'>
                4% <span className='text-gray-500'>{product[0].price}원</span>
              </p>
              <p className='text-lg text-red-700 font-bold'>
                {product[0].price}원
              </p>
            </div>
            <div className='pt-2 border-t border-gray-200'>
              <p className='mt-2 text-xs font-bold'>무료 배송</p>
              <p className='text-sm'>내일 도착 할까</p>
              <p className='mt-1 text-xs '>배송사: 찬우택배</p>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-3'>
              <button>
                <div className='col-span-1 border border-blue-400 p-2 text-center text-base font-bold text-blue-500'>
                  <p>장바구니 담기</p>
                </div>
              </button>
              <button>
                <div className='col-span-1 border border-blue-400 p-2 text-center text-base font-bold bg-blue-600 text-white'>
                  <p>바로구매</p>
                </div>
              </button>
            </div>
            <div className='text-center my-3'>
              <span className='text-sm font-bold'>PC에서도 간편한 결제 -</span>
              <span className='text-xs text-gray-500 ml-5'>쿠페이머니</span>
              <span className='text-xs text-gray-500 ml-5'>카드</span>
              <span className='text-xs text-gray-500 ml-5'>계죄 이체</span>
            </div>
            <div className='pt-2 border-t border-gray-200 mb-3'>
              <div className='text-xs'>
                <p>
                  판매자 :<span className='text-blue-500'>김찬우</span>
                </p>
              </div>
            </div>
            <div className='pt-3 border-t border-gray-200 mb-3 flex'>
              <span className='font-bold text-sm mr-5'>적립</span>
              <span className='text-sm'>
                최대 1000원 쿠팡캐시 적립 - 쿠페이 머니 결제시
              </span>
              <span className='text-sm text-blue-500 font-bold ml-auto'>
                해택보기
              </span>
            </div>
            <div className='py-3 border-t border-gray-200 mb-3'>
              <p className='text-xs'>
                - 사용기한 : 개봉 후 사용기간의 경우 제조연월일 병행표기
              </p>
              <p className='text-xs'>- 쿠팡상품번호 : 123414214-1241412</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='flex flex-col'>
          <ProductF />
          <ProductF />
          <ProductF />
        </div>
      </div>

      <div
        className='mt-10 grid grid-cols-8 border-t-2 border-black mx-auto'
        style={{ width: '1030px' }}
      >
        <div className='col-span-2  border-x border-gray-300 py-3 text-center'>
          <p>상품상세</p>
        </div>
        <div className='col-span-2  border-x border-gray-300 py-3 text-center'>
          <p>상품평(1123)</p>
        </div>
        <div className='col-span-2  border-x border-gray-300 py-3 text-center'>
          <p>문의</p>
        </div>
        <div className='col-span-2  border-x border-gray-300 py-3 text-center'>
          <p>배송/교환/환불</p>
        </div>
      </div>

      <div
        className='mt-10 grid grid-cols-8 border-t-2 border-gray-400 mx-auto'
        style={{ width: '1030px' }}
      >
        <p className='col-span-8 text-sm font-bold mt-8 mb-2'>필수 표기정보</p>

        <div className='col-span-1 py-3 pl-3 bg-gray-100 text-xs  border-y border-gray-300'>
          <p>제품명</p>
        </div>
        <div className='col-span-3 py-3 pl-3 text-xs  border-y border-gray-300'>
          <p>{product[0].name}</p>
        </div>
        <div className='col-span-1 py-3 pl-3 bg-gray-100 text-xs  border-y border-gray-300'>
          <p>제조사</p>
        </div>
        <div className='col-span-3 py-3 pl-3 text-xs  border-y border-gray-300'>
          <p>{product[0].manufacturer}</p>
        </div>

        <div className='col-span-1 py-3 pl-3 bg-gray-100 text-xs  '>
          <p>원산지</p>
        </div>
        <div className='col-span-3 py-3 pl-3 text-xs  '>
          <p>{product[0].origin}</p>
        </div>
        <div className='col-span-1 py-3 pl-3 bg-gray-100 text-xs  '>
          <p>모델명</p>
        </div>
        <div className='col-span-3 py-3 pl-3 text-xs  '>
          <p>{product[0].model}</p>
        </div>

        <div className='col-span-1 py-3 pl-3 bg-gray-100 text-xs  border-y border-gray-300'>
          <p>용량</p>
        </div>
        <div className='col-span-3 py-3 pl-3 text-xs  border-y border-gray-300'>
          <p>{product[0].capacity}</p>
        </div>
        <div className='col-span-1 py-3 pl-3 bg-gray-100 text-xs  border-y border-gray-300'>
          <p>색상</p>
        </div>
        <div className='col-span-3 py-3 pl-3 text-xs  border-y border-gray-300'>
          <p>{product[0].color}</p>
        </div>
      </div>
    </div>
  );
}
