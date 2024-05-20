import Image from 'next/image';

export default function Sale() {
  return (
    <div>
      <div className='relative w-full h-0 pb-[30%] mt-1'>
        <Image
          src='/광고1.png'
          alt='쿠팡로고'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='flex justify-center items-center mt-10'>
        <div className='w-5/6'>
          <div className=' flex'>
            <span className='text-2xl font-bold'>오늘의 발견 </span>
            <span className='mt-2 text-sm'>
              &nbsp;&nbsp; | 오늘 쿠팡이 엄선한 가장 HOT한 상품!
            </span>
          </div>
          <div className='mt-4 border border-gray-300 grid grid-cols-4 gap-4 p-3'>
            <div className='col-span-2 p-2 border border-gray-300'>
              <div className='relative w-full h-0 pb-[55%]'>
                <Image
                  src='/광고.jpg'
                  alt='쿠팡로고'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
            <div className='col-span-2 p-2 border border-gray-300'>
              <div className='relative w-full h-0 pb-[55%]'>
                <Image
                  src='/광고.jpg'
                  alt='쿠팡로고'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
            <div className='col-span-1 p-2 border border-gray-300'>
              <div className='relative w-full h-0 pb-[130%]'>
                <Image
                  src='/광고2.png'
                  alt='쿠팡로고'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
            <div className='col-span-1 p-2 border border-gray-300'>
              <div className='relative w-full h-0 pb-[130%]'>
                <Image
                  src='/광고2.png'
                  alt='쿠팡로고'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
            <div className='col-span-1 p-2 border border-gray-300'>
              <div className='relative w-full h-0 pb-[130%]'>
                <Image
                  src='/광고2.png'
                  alt='쿠팡로고'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
            <div className='col-span-1 p-2 border border-gray-300'>
              <div className='relative w-full h-0 pb-[130%]'>
                <Image
                  src='/광고2.png'
                  alt='쿠팡로고'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
            <div className='col-span-2 p-2 border border-gray-300'>
              <div className='relative w-full h-0 pb-[55%]'>
                <Image
                  src='/광고.jpg'
                  alt='쿠팡로고'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
            <div className='col-span-2 p-2 border border-gray-300'>
              <div className='relative w-full h-0 pb-[55%]'>
                <Image
                  src='/광고.jpg'
                  alt='쿠팡로고'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
          </div>
          <span className='text-2xl font-bold'>
            전세계 핫딜
            <span className='text-blue-700'> 로켓직구 글로벌특가</span>{' '}
          </span>
          <div className='flex'>
            <div className='flex flex-col'>fsdfd</div>
          </div>
        </div>
      </div>
    </div>
  );
}
