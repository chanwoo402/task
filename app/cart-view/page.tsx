'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CartView() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='px-20 '>
      <div>
        <div className='my-4 mt-0 pt-4'>
          <Link href={'/sale'}>
            <Image src='/download.png' width={150} height={70} alt='어쩔' />
          </Link>
        </div>
        <div className='bg-white border border-gray-300 border-t-2 p-10'>
          <div className='flex'>
            <Link href={'/sale'}>
              <span className='text-4xl justify-start'>
                {' '}
                &lt; <span className='font-bold'> 장바구니</span>
              </span>
            </Link>
            <div className='mt-auto ml-auto'>
              <span className='text-gray-300 font-bold'>
                01 <span className='text-sm'>옵션선택</span>
                <span className='text-lg mx-2 font-light'>&gt;</span>
              </span>

              <span className=' font-bold'>
                <span className='text-blue-500'>02 </span>
                <span className='text-sm '>옵션선택</span>
                <span className='text-lg mx-2 font-light'>&gt;</span>
              </span>

              <span className='text-gray-300 font-bold'>
                03 <span className='text-sm'>주문/결제</span>
                <span className='text-lg mx-2 font-light'>&gt;</span>
              </span>

              <span className='text-gray-300 font-bold'>
                04 <span className='text-sm'>주문완료</span>
              </span>
            </div>
          </div>
          <div className='grid grid-cols-2 text-center mt-8'>
            <div className='col-span-1 p-3 border-x border-t border-blue-400 rounded-tl-md rounded-tr-md'>
              <span className='text-blue-600'>일반구매</span>
            </div>
            <div className='col-span-1 p-3 bg-gray-100 border-blue-400 border-b'>
              정기배송
            </div>
          </div>

          <div className='grid grid-cols-11 gap-4 mt-8'>
            <div className='col-span-7 border border-gray-200 pt-2'>
              <span className='ml-6 text-lg font-bold'>배송 상품</span>
              <hr className='w-full my-2' />
              <div className='flex px-4'>
                <input type='checkbox' className='my-auto' />
                <Image src='/coupang.png' width={150} height={150} alt='어쩔' />
                <div className='text-sm ml-2'>
                  <p>제품명</p>
                  <p className='mt-3 text-green-600'>오늘 XX/XX 도착 보장</p>
                  <p className='mt-1 text-base'>XX,XXX원</p>
                  <div className='flex mt-2'>
                    <button
                      onClick={handleDecrease}
                      className='px-4 p2-2 border-y border-l border-gray-300 rounded-l-md'
                    >
                      -
                    </button>
                    <span className='px-4 py-2 border-t border-b border-gray-300'>
                      {quantity}
                    </span>
                    <button
                      onClick={handleIncrease}
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
            <div className='col-span-4 '>
              <div className='border border-gray-200 pt-2'>
                <span className='ml-6 text-lg font-bold'>주문 예상 금액</span>
                <div className='flex px-6 text-sm mt-3'>
                  <span>총 상품 가격</span>
                  <span className='ml-auto'>xx원</span>
                </div>
                <div className='flex px-6 text-sm mt-2'>
                  <span>총 할인</span>
                  <span className='ml-auto'>-xx원</span>
                </div>
                <div className='flex px-6 text-sm mt-2'>
                  <span>총 배송비</span>
                  <span className='ml-auto'>+xx원</span>
                </div>
                <hr className='mx-5 mt-3' />
                <span className='flex justify-end mr-6 mt-2'>
                  <span className='text-lg font-bold '>19,300</span>원
                </span>
                <div className='text-center bg-blue-600 text-white p-3 m-3 rounded-sm'>
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
        <div className='mt-7'>
          <span className='text-2xl font-bold mt-5'>
            전세계 핫딜
            <span className='text-blue-700'> 로켓직구 글로벌특가</span>{' '}
          </span>
        </div>
        <div className='flex justify-center mt-3'>
          <div className='flex flex-col mr-16'>
            <Image src='/coupang.png' width={150} height={150} alt='어쩔' />
            <p className='text-xs font-bold text-red-500'>
              ％ 지금 58% 할인 중
            </p>
            <p className='text-xs mt-1'>데님 가방 당장사라 장난아님</p>
            <p className='text-sm mt-1 font-bold text-red-500'>5억원</p>
            <p className='mt-1 text-xs'>⭐️⭐️⭐️⭐️⭐️ (2)</p>
          </div>
          <div className='flex flex-col mr-16'>
            <Image src='/coupang.png' width={150} height={150} alt='어쩔' />
            <p className='text-xs font-bold text-red-500'>
              ％ 지금 58% 할인 중
            </p>
            <p className='text-xs mt-1'>데님 가방 당장사라 장난아님</p>
            <p className='text-sm mt-1 font-bold text-red-500'>5억원</p>
            <p className='mt-1 text-xs'>⭐️⭐️⭐️⭐️⭐️ (2)</p>
          </div>
          <div className='flex flex-col mr-16'>
            <Image src='/coupang.png' width={150} height={150} alt='어쩔' />
            <p className='text-xs font-bold text-red-500'>
              ％ 지금 58% 할인 중
            </p>
            <p className='text-xs mt-1'>데님 가방 당장사라 장난아님</p>
            <p className='text-sm mt-1 font-bold text-red-500'>5억원</p>
            <p className='mt-1 text-xs'>⭐️⭐️⭐️⭐️⭐️ (2)</p>
          </div>
          <div className='flex flex-col mr-16'>
            <Image src='/coupang.png' width={150} height={150} alt='어쩔' />
            <p className='text-xs font-bold text-red-500'>
              ％ 지금 58% 할인 중
            </p>
            <p className='text-xs mt-1'>데님 가방 당장사라 장난아님</p>
            <p className='text-sm mt-1 font-bold text-red-500'>5억원</p>
            <p className='mt-1 text-xs'>⭐️⭐️⭐️⭐️⭐️ (2)</p>
          </div>
          <div className='flex flex-col'>
            <Image src='/coupang.png' width={150} height={150} alt='어쩔' />
            <p className='text-xs font-bold text-red-500'>
              ％ 지금 58% 할인 중
            </p>
            <p className='text-xs mt-1'>데님 가방 당장사라 장난아님</p>
            <p className='text-sm mt-1 font-bold text-red-500'>5억원</p>
            <p className='mt-1 text-xs'>⭐️⭐️⭐️⭐️⭐️ (2)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
