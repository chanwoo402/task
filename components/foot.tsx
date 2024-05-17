import Image from 'next/image';

export default function Foot() {
  return (
    <div className='mt-10'>
      <div className='border-t-2 text-center py-4'>
        <span className='text-sm text-gray-700'>
          회사소개 &nbsp;|&nbsp; Investor &nbsp;|&nbsp; Relations &nbsp;|&nbsp;
          인재채용 &nbsp;|&nbsp; 입점 / 제휴문의 &nbsp;|&nbsp; 공지사항
          &nbsp;|&nbsp; 고객의 소리 &nbsp;|&nbsp; 이용약관 &nbsp;|&nbsp;
          개인정보 &nbsp;|&nbsp; 처리방침 &nbsp;|&nbsp; 쿠팡페이 &nbsp;|&nbsp;
          이용약관 &nbsp;|&nbsp; 쿠팡페이 &nbsp;|&nbsp; 개인정보처리방침
          &nbsp;|&nbsp; 신뢰관리센터 &nbsp;|&nbsp; 제휴마케팅 &nbsp;|&nbsp;
          광고안내
        </span>
      </div>
      <div className='border-t-2 flex justify-center text-xs py-5 my-auto'>
        <div>
          <Image src='/download.png' alt='쿠팡플레이' width={120} height={20} />
        </div>
        <div className='mx-10'>
          <p>상호명 및 호스팅 서비스 제공 : 쿠팡(주)</p>
          <p>대표이사 : 강한승,박대준</p>
          <p>서울시 송파구 송파대로 570</p>
          <p>사업자 등록번호 : 120-88-00767</p>
          <p>통신판매업신고 : 2017-서울송파-0680</p>
          <p>사업자정보 확인</p>
        </div>
        <div className='mx-10'>
          <p>365고객센터 | 전자금융거래분쟁처리담당</p>
          <p className='text-2xl my-1 font-bold'>1577-7011 (유료)</p>
          <p>서울시 송파구 송파대로 570</p>
          <p>email : help@coupang.com</p>
        </div>
        <div className='mx-20'>
          <p>우리은행 채무지급보증 안내</p>
          <p>당사는 고객님이 현금 결제한 금액에 대해</p>
          <p>우리은행과 채무지급보증 계약을 체결하여</p>
          <p>안전거래를 보장하고 있습니다.</p>
          <p>서비스 가입사실 확인</p>
        </div>
      </div>
      <div className='flex justify-center mb-3'>
        <div className='border-t-2'>
          <Image src='/foot.png' alt='반품마켓' width={1200} height={20} />
        </div>
      </div>
      <div className='bg-stone-800 flex justify-center py-3 text-gray-400'>
        <div className='text-xs'>
          <p>
            사이버몰 내 판매되는 상품 중에는 쿠팡에 등록한 개별 판매자가
            판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
          </p>
          <p>
            마켓플레이스(오픈마켓) 상품의 경우 쿠팡은 통신판매중개자이며
            통신판매의 당사자가 아닙니다.
          </p>
          <p>
            쿠팡은 마켓플레이스(오픈마켓) 상품, 거래정보 및 거래 등에 대하여
            책임을 지지 않습니다.
          </p>
          <p>
            쿠팡은 소비자 보호와 안전거래를 위해
            신뢰관리센터(CM112@coupang.com)를 운영하고 있으며, 관련 분쟁이
            발생할 경우 별도의 분쟁 처리절차에 의거 분쟁이 처리됩니다.
          </p>
          <p>Copyright © Coupang Corp. 2010-2024 All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
