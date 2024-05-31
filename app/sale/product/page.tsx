import { Link } from '@nextui-org/react';
import Image from 'next/image';

export default function Product() {
  return (
    <div>
      <div className='border-t border-gray-300 mt-1'>
        <div className='flex justify-center mt-5'>
          <div className='flex flex-col mr-10'>
            <Image src='/coupang.png' width={70} height={70} alt='어쩔' />
            <Image src='/coupang.png' width={70} height={70} alt='어쩔' />
            <Image src='/coupang.png' width={70} height={70} alt='어쩔' />
            <Image src='/coupang.png' width={70} height={70} alt='어쩔' />
            <Image src='/coupang.png' width={70} height={70} alt='어쩔' />
            <Image src='/coupang.png' width={70} height={70} alt='어쩔' />
          </div>
          <div>
            <Image src='/coupang.png' width={380} height={380} alt='어쩔' />
          </div>
          <div className='m-7 flex flex-col'>
            <div className='flex mb-2'>
              <div className='flex flex-col mr-32'>
                <p className='text-blue-500 text-xs'>vksaowkdlqslek</p>
                <p className='mt-1 font-bold'>진짜 안사냐?</p>
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
                4% <span className='text-gray-500'>23,535원</span>
              </p>
              <p className='text-lg text-red-700 font-bold'>23,434원</p>
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
      <div className='flex justify-center mt-5'>
        <div className='flex flex-col'>
          <div>
            <span className='text-2xl font-bold my-5'>
              오늘의
              <span className='text-red-700'> 판매자 특가</span>
            </span>
            <div className='flex mt-3'>
              <div className='flex flex-col mr-16'>
                <Link href={'/sale/product'}>
                  <Image
                    src='/coupang.png'
                    width={150}
                    height={150}
                    alt='어쩔'
                  />
                  <p className='text-xs font-bold text-red-500'>
                    ％ 지금 58% 할인 중
                  </p>
                  <p className='text-xs mt-1'>데님 가방 당장사라 장난아님</p>
                  <p className='text-sm mt-1 font-bold text-red-500'>5억원</p>
                  <p className='mt-1 text-xs'>⭐️⭐️⭐️⭐️⭐️ (2)</p>
                </Link>
              </div>
              <div className='flex flex-col mr-16'>
                <Link href={'/sale/product'}>
                  <Image
                    src='/coupang.png'
                    width={150}
                    height={150}
                    alt='어쩔'
                  />
                  <p className='text-xs font-bold text-red-500'>
                    ％ 지금 58% 할인 중
                  </p>
                  <p className='text-xs mt-1'>데님 가방 당장사라 장난아님</p>
                  <p className='text-sm mt-1 font-bold text-red-500'>5억원</p>
                  <p className='mt-1 text-xs'>⭐️⭐️⭐️⭐️⭐️ (2)</p>
                </Link>
              </div>
              <div className='flex flex-col mr-16'>
                <Link href={'/sale/product'}>
                  <Image
                    src='/coupang.png'
                    width={150}
                    height={150}
                    alt='어쩔'
                  />
                  <p className='text-xs font-bold text-red-500'>
                    ％ 지금 58% 할인 중
                  </p>
                  <p className='text-xs mt-1'>데님 가방 당장사라 장난아님</p>
                  <p className='text-sm mt-1 font-bold text-red-500'>5억원</p>
                  <p className='mt-1 text-xs'>⭐️⭐️⭐️⭐️⭐️ (2)</p>
                </Link>
              </div>
              <div className='flex flex-col mr-16'>
                <Link href={'/sale/product'}>
                  <Image
                    src='/coupang.png'
                    width={150}
                    height={150}
                    alt='어쩔'
                  />
                  <p className='text-xs font-bold text-red-500'>
                    ％ 지금 58% 할인 중
                  </p>
                  <p className='text-xs mt-1'>데님 가방 당장사라 장난아님</p>
                  <p className='text-sm mt-1 font-bold text-red-500'>5억원</p>
                  <p className='mt-1 text-xs'>⭐️⭐️⭐️⭐️⭐️ (2)</p>
                </Link>
              </div>
              <div className='flex flex-col'>
                <Link href={'/sale/product'}>
                  <Image
                    src='/coupang.png'
                    width={150}
                    height={150}
                    alt='어쩔'
                  />
                  <p className='text-xs font-bold text-red-500'>
                    ％ 지금 58% 할인 중
                  </p>
                  <p className='text-xs mt-1'>데님 가방 당장사라 장난아님</p>
                  <p className='text-sm mt-1 font-bold text-red-500'>5억원</p>
                  <p className='mt-1 text-xs'>⭐️⭐️⭐️⭐️⭐️ (2)</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-10'>
        <div className='flex flex-col'>
          <div>
            <span className='text-2xl font-bold my-5'>
              오늘의
              <span className='text-red-700'> 판매자 특가</span>
            </span>
            <div className='flex mt-3'>
              <div className='flex flex-col mr-16'>
                <Link href={'/sale/product'}>
                  <Image
                    src='/coupang.png'
                    width={150}
                    height={150}
                    alt='어쩔'
                  />
                  <p className='text-xs font-bold text-red-500'>
                    ％ 지금 58% 할인 중
                  </p>
                  <p className='text-xs mt-1'>데님 가방 당장사라 장난아님</p>
                  <p className='text-sm mt-1 font-bold text-red-500'>5억원</p>
                  <p className='mt-1 text-xs'>⭐️⭐️⭐️⭐️⭐️ (2)</p>
                </Link>
              </div>
              <div className='flex flex-col mr-16'>
                <Link href={'/sale/product'}>
                  <Image
                    src='/coupang.png'
                    width={150}
                    height={150}
                    alt='어쩔'
                  />
                  <p className='text-xs font-bold text-red-500'>
                    ％ 지금 58% 할인 중
                  </p>
                  <p className='text-xs mt-1'>데님 가방 당장사라 장난아님</p>
                  <p className='text-sm mt-1 font-bold text-red-500'>5억원</p>
                  <p className='mt-1 text-xs'>⭐️⭐️⭐️⭐️⭐️ (2)</p>
                </Link>
              </div>
              <div className='flex flex-col mr-16'>
                <Link href={'/sale/product'}>
                  <Image
                    src='/coupang.png'
                    width={150}
                    height={150}
                    alt='어쩔'
                  />
                  <p className='text-xs font-bold text-red-500'>
                    ％ 지금 58% 할인 중
                  </p>
                  <p className='text-xs mt-1'>데님 가방 당장사라 장난아님</p>
                  <p className='text-sm mt-1 font-bold text-red-500'>5억원</p>
                  <p className='mt-1 text-xs'>⭐️⭐️⭐️⭐️⭐️ (2)</p>
                </Link>
              </div>
              <div className='flex flex-col mr-16'>
                <Link href={'/sale/product'}>
                  <Image
                    src='/coupang.png'
                    width={150}
                    height={150}
                    alt='어쩔'
                  />
                  <p className='text-xs font-bold text-red-500'>
                    ％ 지금 58% 할인 중
                  </p>
                  <p className='text-xs mt-1'>데님 가방 당장사라 장난아님</p>
                  <p className='text-sm mt-1 font-bold text-red-500'>5억원</p>
                  <p className='mt-1 text-xs'>⭐️⭐️⭐️⭐️⭐️ (2)</p>
                </Link>
              </div>
              <div className='flex flex-col'>
                <Link href={'/sale/product'}>
                  <Image
                    src='/coupang.png'
                    width={150}
                    height={150}
                    alt='어쩔'
                  />
                  <p className='text-xs font-bold text-red-500'>
                    ％ 지금 58% 할인 중
                  </p>
                  <p className='text-xs mt-1'>데님 가방 당장사라 장난아님</p>
                  <p className='text-sm mt-1 font-bold text-red-500'>5억원</p>
                  <p className='mt-1 text-xs'>⭐️⭐️⭐️⭐️⭐️ (2)</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className='mt-10 grid grid-cols-8 border-t-2 border-black mx-auto'
        style={{ width: '1030px' }}
      >
        <div className='col-span-2  border-x border-gray-300 py-3 text-center'>
          <p>상품상세</p>
        </div>
        <div className='col-span-2 bg-gray-50 border border-gray-300 py-3 text-center'>
          <p>상품명 (123)</p>
        </div>
        <div className='col-span-2 bg-gray-50 border border-gray-300 py-3 text-center'>
          <p>상품문의</p>
        </div>
        <div className='col-span-2 bg-gray-50 border border-gray-300 py-3 text-center'>
          <p>배송/교환/반품 안내</p>
        </div>

        <p className='col-span-8 text-sm font-bold mt-8 mb-2'>필수 표기정보</p>

        <div className='col-span-1 py-3 pl-3 bg-gray-100 text-xs  border-y border-gray-300'>
          <p>제품명</p>
        </div>
        <div className='col-span-3 py-3 pl-3 text-xs  border-y border-gray-300'>
          <p>김찬우</p>
        </div>
        <div className='col-span-1 py-3 pl-3 bg-gray-100 text-xs  border-y border-gray-300'>
          <p>제품명</p>
        </div>
        <div className='col-span-3 py-3 pl-3 text-xs  border-y border-gray-300'>
          <p>김찬우</p>
        </div>

        <div className='col-span-1 py-3 pl-3 bg-gray-100 text-xs  '>
          <p>제품명</p>
        </div>
        <div className='col-span-3 py-3 pl-3 text-xs  '>
          <p>김찬우</p>
        </div>
        <div className='col-span-1 py-3 pl-3 bg-gray-100 text-xs  '>
          <p>제품명</p>
        </div>
        <div className='col-span-3 py-3 pl-3 text-xs  '>
          <p>김찬우</p>
        </div>

        <div className='col-span-1 py-3 pl-3 bg-gray-100 text-xs  border-y border-gray-300'>
          <p>제품명</p>
        </div>
        <div className='col-span-3 py-3 pl-3 text-xs  border-y border-gray-300'>
          <p>김찬우</p>
        </div>
        <div className='col-span-1 py-3 pl-3 bg-gray-100 text-xs  border-y border-gray-300'>
          <p>제품명</p>
        </div>
        <div className='col-span-3 py-3 pl-3 text-xs  border-y border-gray-300'>
          <p>김찬우</p>
        </div>
      </div>
    </div>
  );
}
