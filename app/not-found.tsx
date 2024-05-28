import Image from 'next/image';

export default function Page() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Image layout='fill' objectFit='cover' src='/404.png' alt='' />
    </div>
  );
}
