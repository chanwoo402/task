'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/supabaseClient';
import ProductF from '@/components/productGroup';

// 상품 타입 정의
interface Product {
  prodnum: number;
  name: string;
  image: string;
  price: number;
  saleprice: number;
  star: number;
}

export default function Sale() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('product')
        .select('*')
        .limit(9);

      if (error) {
        console.error('Error fetching products:', error);
      } else {
        setProducts(data);
      }
      setLoading(false);
    }

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {products.length > 0 && (
        <Link href={`/sale/product/${products[0].prodnum}`}>
          <div className='relative w-full h-96 border'>
            <Image
              src={products[0].image || '/default-product.jpg'}
              alt={products[0].name}
              layout='fill'
              objectFit='cover'
            />
          </div>
        </Link>
      )}

      <div className='flex justify-center items-center mt-10 '>
        <div className='w-5/6'>
          <div className=' flex'>
            <span className='text-2xl font-bold'>오늘의 발견 </span>
            <span className='mt-2 text-sm'>
              &nbsp;&nbsp; | 오늘 쿠팡이 엄선한 가장 HOT한 상품!
            </span>
          </div>
          <div className='grid grid-cols-4 gap-4 border p-2'>
            {products.slice(1, 3).map((product) => (
              <Link
                key={product.prodnum}
                href={`/sale/product/${product.prodnum}`}
              >
                <div className='col-span-2 relative h-96 border'>
                  <Image
                    src={product.image || '/default-product.jpg'}
                    alt={product.name}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </Link>
            ))}
            {products.slice(3, 7).map((product) => (
              <Link
                key={product.prodnum}
                href={`/sale/product/${product.prodnum}`}
              >
                <div className='col-span-1 relative h-96 border'>
                  <Image
                    src={product.image || '/default-product.jpg'}
                    alt={product.name}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </Link>
            ))}
            {products.slice(7).map((product) => (
              <Link
                key={product.prodnum}
                href={`/sale/product/${product.prodnum}`}
              >
                <div className='col-span-2 relative h-96 border'>
                  <Image
                    src={product.image || '/default-product.jpg'}
                    alt={product.name}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-col'>
          <ProductF />
          <ProductF />
          <ProductF />
        </div>
      </div>
    </div>
  );
}
