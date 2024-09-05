import Grid from '@/components/grid';
import ProductGridItems from '@/components/product-grid-items';
import { defaultSort, sorting } from '@/lib/constants';
import { getProducts } from '@/lib/shopify';
import React from 'react'

async function page({
    searchParams
  }: {
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {

    const { sort, q: searchValue } = searchParams as { [key: string]: string };
    const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  
    const products = await getProducts({ sortKey, reverse, query: searchValue });
    const resultsText = products.length > 1 ? 'results' : 'result';

    
  return (
    
    <div>
        <div className="pb-2  bg-appyellow ">
            <div className='max-w-[80%]  mx-auto py-10'>
                <h1 className=" text-white text-xl mb-4">The Muse</h1>
                <h1 className=" text-white text-xs">With “La Muse,” each piece is an ode to the contemporary woman—her strength, her elegance, and her ability to inspire and move. This collection also celebrates each woman’s ongoing journey toward her own inner muse.</h1>
            </div>
        </div>

        <div className='mt-20'></div>

        <div className='max-w-5xl mx-auto '>
            <div className='mb-5'>
                <p>SHOP ALL</p>
                <div className='h-[2px] bg-appyellow'></div>
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

export default page