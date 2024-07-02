'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { supabase } from '@/supabaseClient';

export default function Wish() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWishlist() {
      // love 테이블에서 lovenum, loveb가 true인 데이터를 가져옵니다.
      const { data: loves, error: loveError } = await supabase
        .from('love')
        .select('lovenum')
        .eq('loveb', true);

      if (loveError) {
        console.error('Error fetching love data:', loveError);
        setLoading(false);
        return;
      }

      // product 테이블에서 모든 데이터를 가져옵니다.
      const { data: products, error: productError } = await supabase
        .from('product')
        .select('*');

      if (productError) {
        console.error('Error fetching product data:', productError);
        setLoading(false);
        return;
      }

      // love 테이블의 lovenum과 product 테이블의 prodnum이 일치하는 데이터를 필터링합니다.
      const wishlistProducts = products.filter((product: any) =>
        loves.some((love: any) => love.lovenum === product.prodnum)
      );

      setProducts(wishlistProducts);
      setLoading(false);
    }

    fetchWishlist();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!products.length) {
    return <p>No items in wishlist</p>;
  }

  return (
    <div className='flex flex-col items-center mt-10 mb-40'>
      <div className='w-full flex justify-center'>
        <div className='flex flex-col items-start'>
          <div className='flex mb-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-10 h-10 text-red-600'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
              />
            </svg>
            <span className='ml-2 text-3xl'>찜 리스트</span>
          </div>

          <div className='flex'>
            <div className='px-60 h-12 border-x-2 border-t-2 border-blue-500 text-center'>
              <p className='text-blue-600 mt-2 font-bold'>상품</p>
            </div>
            <div className='px-60 h-12 border-b-2 border-blue-500 text-center bg-gray-100'>
              <p className='mt-2 font-bold'>브랜드</p>
            </div>
          </div>

          <div className='border-y-2 w-full border-gray-300 mt-3 py-2 bg-gray-50'>
            <input type='checkbox' className='ml-5' />
            <span className='ml-2 text-sm'>전체 선택</span>
            <button className='bg-white border border-gray-300 text-xs py-1 px-2 text-blue-600 ml-4'>
              선택삭제
            </button>
          </div>

          {products.map((product: any) => (
            <div
              key={product.prodnum}
              className='border-b border-gray-300 w-full p-3 flex'
            >
              <div>
                <input type='checkbox' />
              </div>
              <Image
                src={product.image}
                width={100}
                height={100}
                alt={product.name}
              />
              <div className='flex flex-col ml-3 mt-1'>
                <p className='text-sm font-bold'>{product.name}</p>
                <p className='text-sm text-red-600 font-bold mt-2'>
                  {product.saleprice.toLocaleString()}원
                </p>
              </div>
              <div className='flex flex-col ml-auto mr-3 my-auto'>
                <button className='border border-blue-500 text-blue-500 w-32 py-1 text-xs rounded-sm'>
                  장바구니 담기
                </button>
                <button className='border border-gray-400 text-gray-500 w-32 py-1 text-xs rounded-sm mt-2'>
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
