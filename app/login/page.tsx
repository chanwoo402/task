'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useUser } from '@/context/UserContext';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { setUser } = useUser();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });

      const { data } = response;
      if (data.token) {
        // JWT 토큰을 로컬 스토리지에 저장
        localStorage.setItem('token', data.token);
        setUser(data.user);
        router.push('/sale');
      } else {
        setError('Invalid login credentials');
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'An unexpected error occurred');
    }
  };

  return (
    <div>
      <div className='flex justify-center mt-12 mb-4'>
        <a href='/sale'>
          <img src='/download.png' alt='쿠팡로고' width={195} height={41} />
        </a>
      </div>
      <div className='flex justify-center border-b-2'>
        <div className='border-b-blue-500 border-b-4 px-5'>
          <p className='text-blue-500 m-4 font-bold'>이메일 로그인</p>
        </div>
      </div>
      <div className='flex justify-center mt-3'>
        <div className='flex flex-col'>
          <form onSubmit={handleLogin}>
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
            <div className='mt-2 flex'>
              <div className='flex justify-start'>
                <input type='checkbox' className='w-5 h-5'></input>
                <p className='text-sm text-gray-600 ml-2'>자동로그인</p>
              </div>
              <div className='ml-auto'>
                <span className='text-sm text-blue-600'>
                  아이디.비밀번호 찾기
                </span>
              </div>
            </div>
            <div className='mt-2 mb-3'>
              <button
                type='submit'
                className='w-full bg-blue-600 text-white py-3 rounded'
              >
                로그인
              </button>
            </div>
          </form>
          <div className='pt-4 border-t border-gray-400'>
            <a href={'/login/sign-up'}>
              <button className='w-full py-3 rounded border border-gray-400'>
                회원가입
              </button>
            </a>
          </div>
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
          {error && (
            <p className='text-red-500'>
              {'아이디 혹은 비밀번호가 일치하지 않습니다'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
