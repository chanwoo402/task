'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '../supabaseClient';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<any>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Fetch user data from 'user' table
    const { data: user, error } = await supabase
      .from('user')
      .select('*')
      .eq('email', email)
      .eq('password', password) // Note: Passwords should be hashed in a real application
      .single();

    if (error || !user) {
      setError(error?.message || 'Invalid login credentials');
    } else {
      setUserInfo(user);
      console.log('Logged in user:', user);
      setError(null); // Clear any previous errors
    }
  };

  return (
    <div>
      <div className='flex justify-center mt-12 mb-4'>
        <Link href={'/sale'}>
          <Image src='/download.png' alt='쿠팡로고' width={195} height={41} />
        </Link>
      </div>
      <div className='flex justify-center border-b-2'>
        <div className='border-b-blue-500 border-b-4 px-5'>
          <p className='text-blue-500 m-4 font-bold'>이메일 로그인</p>
        </div>
      </div>

      <div className='flex justify-center mt-3'>
        <div className='flex flex-col'>
          <form onSubmit={handleLogin}>
            <div className='border-gray-300 border flex '>
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
                    d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
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
            <Link href={'/login/sign-up'}>
              <button className='w-full py-3 rounded border border-gray-400'>
                회원가입
              </button>
            </Link>
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
          {error && <p className='text-red-500'>{error}</p>}
          {userInfo && (
            <div className='text-green-500'>
              <h3>Login Successful</h3>
              <p>Welcome, {userInfo.name}</p>
              <p>Email: {userInfo.email}</p>
              {/* Add more user information as needed */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
