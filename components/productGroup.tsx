import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/supabaseClient';

export default function ProductGroup() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('product')
        .select('*')
        .limit(10);

      if (error) {
        console.error('Error fetching products:', error);
      } else if (data) {
        const shuffled = data.sort(() => 0.5 - Math.random());
        setProducts(shuffled.slice(0, 5));
      }
      setLoading(false);
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='flex flex-col mt-10'>
      <div>
        <span className='text-2xl font-bold my-5'>
          오늘의
          <span className='text-red-700'> 판매자 특가</span>
        </span>
        <div className='flex mt-3'>
          {products.map((product, index) => (
            <div className='flex flex-col mr-16' key={index}>
              <Link href={`/sale/product/${product.id}`}>
                <div
                  style={{
                    position: 'relative',
                    width: '150px',
                    height: '150px',
                  }}
                >
                  <Image
                    src={product.image || '/default-product.jpg'}
                    alt={product.name || 'Product'}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <p className='text-xs font-bold text-red-500'>
                  지금{' '}
                  {Math.round((1 - product.saleprice / product.price) * 100)}%
                  할인 중
                </p>
                <p className='text-xs mt-1'>{product.name}</p>
                <p className='text-sm mt-1 font-bold text-red-500'>
                  {product.price}원
                </p>
                <p className='mt-1 text-xs'>
                  ⭐️⭐️⭐️⭐️⭐️ ({product.rating})
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
