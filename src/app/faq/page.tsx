import { AccordionFAQ } from '@/components/product/AccordionFAQ';
import { AccordionProduct } from '@/components/product/AccordionProduct';
import { defaultSort, sorting } from '@/lib/constants';
import { getCollectionProducts, getCollections } from '@/lib/shopify';
import { cn } from '@/lib/utils';
import { config } from '@/roam/config';
import { getCardsItems } from '@/roam/homepage/homepage';
import Navbar from '@/roam/navbar';
import React from 'react'

async function page({
    searchParams
  }: {
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {

    const { sort, q: searchValue } = searchParams as { [key: string]: string };
    const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  
    // const products = await getProducts({ sortKey, reverse, query: searchValue });
    const products = await getCollectionProducts({
      collection: 'hidden-homepage-featured-items'
    });
    // console.log("ces produits ",products)
  
    const collections = await getCollections();
    console.log("ces collections ",collections.find((c) => c.products?.length)?.products)
  
    const items = getCardsItems(products)
  
    const imgUrl ="https://images.pexels.com/photos/6128127/pexels-photo-6128127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  return (
    <div>
           <div 
      style={{backgroundImage : `url('${imgUrl}')`,backgroundSize : "cover",backgroundPosition : "center"}}
      className={cn("h-[60vh]  flex  justify-start items-center pl-10")}>
        <div className="absolute top-0">
        <Navbar collections={collections} items={items} />
        </div>

          <div className='font-light text-white'>
            <p className=' text-5xl'>FAQs</p>
            <p className='text-xl '>Everything you need to know</p>
          </div>
    </div>


          <div className='px-10 py-10'>
            <p className='text-4xl text-textColor'>Get in touch</p>
            <p className='text-lg text-black'>If you have any other questions, please email {config.appEmail} and one of our lovely team will be happy to help!</p>
          </div>

          <div className='pr-4  bg-secondBg px-10 py-10'>
          <p className='text-4xl text-textColor'>General questions</p>
            <AccordionFAQ />
      </div>


        
    </div>
  )
}

export default page