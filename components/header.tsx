import Image from 'next/image';

export default function Header() {
  return (
    <div className='px-16'>
      <div className='bg-slate-200 flex text-xs px-8 py-2'>
        <div className='flex'>
          <span>즐겨찾기</span>
          <span className='ml-4 '>입점신청</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 16'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-3 h-3'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m19.5 8.25-7.5 7.5-7.5-7.5'
            />
          </svg>
        </div>
        <div className='ml-auto'>
          <span className='mr-4'>로그인</span>
          <span className='mr-4'>회원가입</span>
          <span>고객센터</span>
        </div>
      </div>
      <div className='flex w-full'>
        <div
          className='bg-blue-500 w-28 h-28 text-white text-sm text-center p-7
        '
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-14 h-10 my-auto'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
          <p>카테고리</p>
        </div>
        <div className='flex flex-col w-full'>
          <div className='p-6 flex w-full h-20'>
            <div>
              <Image
                src='/download.png'
                alt='쿠팡로고'
                width={174}
                height={41}
              />
            </div>
            <div className='border-solid border-2 border-sky-500 flex mx-6 h-10 w-9/12'>
              <div style={{ borderRight: '1px solid blue' }}>
                <div className='flex m-3'>
                  <span className='text-xs mr-20'>전체 </span>
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 16'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-3 h-3'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m19.5 8.25-7.5 7.5-7.5-7.5'
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className='p-2 flex '>
                <input
                  type='text'
                  placeholder='찾고 싶은 상품을 검색해보세요!'
                  className='w-96'
                />
              </div>
              <div className='flex ml-auto m-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-5 h-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z'
                  />
                </svg>
                <div className='ml-3 '>
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
            </div>

            <div className='flex ml-auto'>
              <div className='mr-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-8 h-8'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                  />
                </svg>
                <p className='text-xs'>마이쿠팡</p>
              </div>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-8 h-8'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                  />
                </svg>
                <p className='text-xs'>장바구니</p>
              </div>
            </div>
          </div>
          <div className='flex'>
            <div className='flex ml-5'>
              <Image
                src='/download-1.png'
                alt='쿠팡플레이'
                width={20}
                height={20}
              />
              <span className='text-xs ml-1'>쿠팡플레이</span>
            </div>
            <div className='flex ml-5'>
              <Image
                src='/download-8.png'
                alt='로켓배송'
                width={20}
                height={20}
              />
              <span className='text-xs ml-1'>로켓배송</span>
            </div>
            <div className='flex ml-5'>
              <Image
                src='/download-2.png'
                alt='로켓배송'
                width={20}
                height={20}
              />
              <span className='text-xs ml-1'>로켓프레쉬</span>
            </div>
            <div className='flex ml-5'>
              <Image
                src='/download-3.png'
                alt='쿠팡비즈'
                width={20}
                height={20}
              />
              <span className='text-xs ml-1'>쿠팡비즈</span>
            </div>
            <div className='flex ml-5'>
              <Image
                src='/download-4.png'
                alt='로켓직구'
                width={20}
                height={20}
              />
              <span className='text-xs ml-2'>로켓직구</span>
            </div>
            <div className='flex ml-5'>
              <span className='text-xs ml-2'>골드 박스</span>
            </div>
            <div className='flex ml-5'>
              <span className='text-xs ml-2'>와우회원할인</span>
            </div>
            <div className='flex ml-5'>
              <span className='text-xs ml-2'>이벤트/쿠폰</span>
            </div>
            <div className='flex ml-5'>
              <Image
                src='/download-5.png'
                alt='반품마켓'
                width={20}
                height={20}
              />
              <span className='text-xs ml-2'>반품마켓</span>
            </div>
            <div className='flex ml-5'>
              <Image
                src='/download-6.png'
                alt='착한상점'
                width={20}
                height={20}
              />
              <span className='text-xs ml-2'>착한상점</span>
            </div>
            <div className='flex ml-5'>
              <span className='text-xs ml-2'>기획전</span>
            </div>
            <div className='flex ml-5'>
              <Image
                src='/download-7.png'
                alt='착한상점'
                width={20}
                height={20}
              />
              <span className='text-xs ml-2'>여행티켓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}