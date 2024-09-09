"use client"
// import Grid from 'components/grid';
// import { GridTileImage } from 'components/grid/tile';
// import { Product } from 'lib/shopify/types';
import Link from 'next/link';
import Grid from './grid';
import { GridTileImage } from './grid/tile';
import { Product } from '@/lib/shopify/types';
import { SliderImgCmp } from '@/app/NewSliderCmp';
import { Button } from './ui/button';
import Price from './price';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((v) => (
       <ProductCard v={v} />
      ))}
    </>
  );
}


const ProductCard = ({ v } : {v : Product}) => {
  const first = {
    initial:{ opacity: 1 },
  animate:{ opacity: 1 },
  whileHover:{ opacity: 0 },
  transition:{ duration: 0.5 }
}

  return (
    <Link
      className="relative h-full w-full"
      href={`/product/${v.handle}`}
      prefetch={true}
    >
      <div className="relative h-[250px] lg:h-[320px] overflow-hidden group">
        {v.featuredImage?.url && (
          <motion.img
            src={v.featuredImage.url}
            className="absolute inset-0 h-full w-full object-cover"
            {...(v.images[1]?.url ? first : {})}
            // { && {...first}}
          />
        )}
        {v.images[1]?.url && (
          <motion.img
            src={v.images[1].url}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }} // Shows on hover
            transition={{ duration: 0.5 }}
          />
        )}
      </div>

      <div>
        <p className="text-black text-2xl font-light truncate mt-2">{v.title}</p>
        <p className="text-black text-md md:text-[0.9rem] truncate mt-8">
          50ml • Sensation • Micro-biome prebiotic
        </p>
        <div className="bg-black h-[1px] mb-8"></div>

        <div className="flex items-center justify-between space-x-2">
          <Button className="bg-textColor uppercase lg:text-md text-[10px] py-0 font-bold lg:text-[12px] lg:px-6 lg:py-5">
            Add to cart {v.images.length >1 && <span className='text-[10px]'>+</span> }
          </Button>

          <Price
            className="flex justify-end space-y-2 text-right text-sm font-bold text-textColor"
            amount={v.priceRange.maxVariantPrice.amount}
            currencyCode={v.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
    </Link>
  );
};


