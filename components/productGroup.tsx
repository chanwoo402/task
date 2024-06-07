import Link from 'next/link';
import Image from 'next/image';

export default function ProductGroup() {
  return (
    <div className='flex flex-col'>
      <div>
        <span className='text-2xl font-bold my-5'>
          오늘의
          <span className='text-red-700'> 판매자 특가</span>
        </span>
        <div className='flex mt-3'>
          <div className='flex flex-col mr-16'>
            <Link href={'/sale/product'}>
              <Image src='/coupang.png' width={150} height={150} alt='어쩔' />
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
              <Image src='/coupang.png' width={150} height={150} alt='어쩔' />
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
              <Image src='/coupang.png' width={150} height={150} alt='어쩔' />
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
              <Image src='/coupang.png' width={150} height={150} alt='어쩔' />
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
              <Image src='/coupang.png' width={150} height={150} alt='어쩔' />
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
  );
}
