import { Button } from '@/components/ui/button';
import Navbar from '@/roam/navbar'
import React from 'react'
import PartnersCarousel from './PartnersCarousel';
import SliderPart, {  } from '@/app/SliderPart';
import { Product } from '@/lib/shopify/types';
import { defaultSort, sorting } from '@/lib/constants';
import { getProducts } from '@/lib/shopify';


export interface CardProp {
  img : string
  label : string
  price : string
  handle:string
  currencyCode:string
}


export function getCardsItems(products :  Product[]) {
  const a : CardProp[] =  products.map((v) => ({
    img : v.featuredImage?.url,
    label : v.title,
    price : v.priceRange.maxVariantPrice.amount,
    handle : v.handle,
    currencyCode:v.priceRange.maxVariantPrice.currencyCode,
  }))


  return a
}


async function homepage({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {

  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.length > 1 ? 'results' : 'result';

  const items = getCardsItems(products)
  console.log(items)
  return (
    <div>
        {/* <Navbar /> */}
        <PartnersCarousel />

        <div className='px-2 pb-10'>
          {<SliderPart cardProps={items} />}
        </div>

        <div className='h-[450px]  relative'>
          <div className=''>
              <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
            >
              <source src="/bgvideo2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            
          </div>
        </div>

        <div className='bg'></div>


        


      
    </div>
  )
}

export default homepage

const VideoBackground = ({children} : any) => {
  return (
    <div className="relative w-full h-full ">
      {/* Vidéo en background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      {/* Image par-dessus */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden ">

        <Navbar />
        <div className='text-4xl text- mx-auto   mt-32 max-w-[70%] space-y-2 text-center text-secondBg'>
          <p className='text-[40px]  '>Upgrade your</p>
          <p className='text-[36px]   '>next <span className='italic'>date night</span></p>
          <p className='text-sm max-w-sm text-center leading-5 uppercase '>Try sensational lubricants with flora protecting microbiome</p>
          <div className='w-fit mx-auto'>
            <Button size={"lg"} className='text-textColor text-lg bg-white'>Shop the new range</Button>
          </div>
        </div>
        <div className='h-full sm:h-fit  w-full sm:max-w-[400px]  mx-auto md:mx-auto '>
          <img
            src="/homevideobgimg.webp"
            alt="Overlay Image"
            className="w-full md:mx-auto max-w-lg  mt-10"
          />

        </div>
      </div>
    </div>
  );
};


export {VideoBackground}