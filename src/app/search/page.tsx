import Grid from '@/components/grid';
import ProductGridItems from '@/components/product-grid-items';
import { defaultSort, sorting } from '@/lib/constants';
import { getCollections, getProducts } from '@/lib/shopify';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'


export default async function page({
    params,
    searchParams
  }: {
    params: any;
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {

    const { sort, q: searchValue } = searchParams as { [key: string]: string };
    const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  
    const products = await getProducts({ sortKey, reverse, query: searchValue });
    const resultsText = products.length > 1 ? 'results' : 'result';

  const collections = await getCollections();

//   const pathname = usePathname()


    
  return (
    
    <div>
        <div className="pb-2  bg-primaryBg-augmented ">
            <div className='px-4  mx-auto py-10'>
                <h1 className=" text-white text-5xl italic mb-4">Shop everything</h1>
            </div>
        </div>

        <div className='mt-20'></div>

        <div className='px-4 mx-auto '>
            <div className='mb-5'>
                <p>SHOP ALL</p>
                <div className='h-[2px] bg-appyellow'></div>
            </div>


            <div className='flex space-x-6 mb-10'>
                {collections.map((v,index) => {
                    return <Link href={"/search/"+v.handle}>
                    <p className={cn("text-lg hover:text-textColor cursor-pointer transition ease-in-out duration-150",{
                        "text-textColor" : false
                        // "text-textColor" : pathname.includes(v.title)
                    })} key={index}>{v.title}</p>
                    </Link>
                })}
            </div>

            {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? 'There are no products that match '
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
      

            {/* <div className="grid grid-cols-3 gap-2">

            </div> */}
        </div>
    </div>
  )
}

