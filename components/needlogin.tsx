import { useSession } from 'next-auth/react';

function ProtectedComponent() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  // session.user의 존재 여부를 검사합니다.
  if (!session || !session.user) {
    return <p>Access Denied</p>;
  }

  // 이메일이 존재하는지 추가적으로 확인합니다.
  return <p>Welcome {session.user.email ? session.user.email : 'User'}!</p>;
}
