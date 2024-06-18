'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '../../../supabaseClient';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [user_name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const { data, error } = await supabase
      .from('user')
      .insert([{ email, password, user_name, phone }]);

    if (error) {
      setError(error.message);
    } else {
      setError(null);
      // 회원가입 성공 시, 추가적인 동작을 여기서 수행할 수 있습니다.
      console.log('User signed up:', data);
    }
  };

  return (
    <div>
      <div className='flex justify-center mt-12 mb-4'>
        <Link href={'/sale'}>
          <Image src='/download.png' alt='쿠팡로고' width={195} height={41} />
        </Link>
      </div>

      <div className='flex justify-center mt-5'>
        <div className='flex flex-col'>
          <p className='text-sm font-bold  my-5'>회원정보를 입력해주세요</p>

          <form onSubmit={handleSignUp}>
            <div className='border-gray-300 border flex'>
              <div className='w-12 h-12 bg-gray-50 p-3 border-gray-300 border'>
                <div className='text-gray-400'>
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
                      d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                    />
                  </svg>
                </div>
              </div>
              <div>
                <input
                  type='text'
                  placeholder='아이디(이메일)'
                  className='w-96 h-full pl-4'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type='reset' className='mr-3'>
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
                    d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>
              </button>
            </div>
            <div className='border-gray-300 border flex mt-3'>
              <div className='w-12 h-12 bg-gray-50 p-3 border-gray-300 border'>
                <div className='text-gray-400'>
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
                      d='M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z'
                    />
                  </svg>
                </div>
              </div>
              <div>
                <input
                  type='password'
                  placeholder='비밀번호'
                  className='w-96 h-full pl-4'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type='reset' className='mr-3'>
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
                    d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>
              </button>
            </div>
            <div className='border-gray-300 border flex mt-3'>
              <div className='w-12 h-12 bg-gray-50 p-3 border-gray-300 border'>
                <div className='text-gray-400'>
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
                      d='M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z'
                    />
                  </svg>
                </div>
              </div>
              <div>
                <input
                  type='password'
                  placeholder='비밀번호 확인'
                  className='w-96 h-full pl-4'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <button type='reset' className='mr-3'>
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
                    d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>
              </button>
            </div>
            <div className='border-gray-300 border flex mt-3'>
              <div className='w-12 h-12 bg-gray-50 p-3 border-gray-300 border'>
                <div className='text-gray-400'>
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
                      d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                    />
                  </svg>
                </div>
              </div>

              <div>
                <input
                  type='text'
                  placeholder='이름'
                  className='w-96 h-full pl-4'
                  value={user_name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <button type='reset' className='mr-3'>
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
                    d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>
              </button>
            </div>
            <div className='border-gray-300 border flex mt-3'>
              <div className='w-12 h-12 bg-gray-50 p-3 border-gray-300 border'>
                <div className='text-gray-400'>
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
                      d='M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
                    />
                  </svg>
                </div>
              </div>

              <div>
                {' '}
                <input
                  type='text'
                  placeholder='휴대폰번호'
                  className='w-96 h-full pl-4'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <button type='reset' className='mr-3'>
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
                    d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>
              </button>
            </div>
            <div className='my-3'>
              <div className='border border-t-gray-200 mt-3'></div>
            </div>

            <div className='pt-4'>
              <button
                type='submit'
                className='w-full bg-blue-500 text-white py-3 rounded text-lg font-bold'
              >
                동의하고 가입하기
              </button>
            </div>

            {error && (
              <div className='mt-4 text-red-500'>
                <p>{error}</p>
              </div>
            )}
          </form>

          <div className='text-gray-500 text-xs flex flex-col mt-5'>
            <p className='flex justify-center'>법인 고객이신가요?</p>
            <p className='flex justify-center'>
              사업자 회원으로 전용 특가 혜택을 누려보세요.
            </p>
            <p className='flex justify-center text-black text-base text-bold my-2'>
              쿠팡비즈 간편가입
            </p>
            <p className='flex justify-center mt-6'>
              ©Coupang Corp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
