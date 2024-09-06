import { Button } from '@/components/ui/button';
import Navbar from '@/roam/navbar'
import React from 'react'
import PartnersCarousel from './PartnersCarousel';
import SliderPart, {  } from '@/app/SliderPart';
import { Product } from '@/lib/shopify/types';
import { defaultSort, sorting } from '@/lib/constants';
import { getProducts } from '@/lib/shopify';
import { config } from '../config';
import { HeartIcon } from 'lucide-react';
import SliderOneLine from '@/app/SliderOneLine';
import BienFaitCarousel from './BienFaitCarousel';
import TestimonialSlider from './testimonials';
import ImagesViews from './ImagesViews';


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


function WhyChoose() {
  return (
    <div className='bg-primaryBg py-14 px-4 space-y-6 text-secondBg'>
    <p className=' text-3xl'>Why choose <span className='italic'>{config.siteName}</span>  </p>
    <p className='text-sm'>Lorem ipsum, dolor sit amet ccorporis aut. Harum, ipsum. Deserunt ea odit repellendus, recusandae odio nihil.  </p>

   {Array(3).fill(0).map((v,index)=> {
    return  <div className='flex space-x-4' key={index}>
        <div className='w-1/4 md:w-auto'>
          <div className=' rounded-full border-secondBg border h-16 w-16  flex justify-center items-center'>
            <HeartIcon className='text-secondBg w-1/2 h-1/2 ' />
          </div>
        </div>
        <div className=' max-w-md'>
          <p className='text-xl'>For <span className='italic'>pleasure</span></p>
          <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, incidunt totam eum, minima atque modi </p>
        </div>
  </div>

   })}


  </div>
  )
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

       <WhyChoose />

        <div className='px-2 pb-10'>
          {<SliderOneLine label='BESTSELLERS' cardProps={items} />}
        </div>


        <BienFaitCarousel />

        <div className='space-y-6'>
          <p className='text-textColor text-center text-sm uppercase font-semibold'>Verified {config.siteName} reviews</p>
          <img className='w-36 mx-auto' src="https://a.storyblok.com/f/153121/648x905/42c81a17b0/home_review.png/m/400x0/" alt="" />
          <TestimonialSlider />
          
        </div>

        <div className='px-2 pb-10'>
          {<SliderOneLine onlyImages autoScroll label='IN BED WITH' cardProps={items} />}
          <p className='mt-4'>Pictures of {config.siteName} shared by our customers</p>
        </div>

        <ImagesViews imgs={products.map((v) => v.featuredImage.url!)} />

       <WhyChoose />

       <div className='px-2 pb-10'>
          {<SliderOneLine onlyImages autoScroll label='AS SEEN IN THE PRESS AND AVERTISING' cardProps={items} />}
        </div>



        <div className='bg-primaryBg py-20 px-10'>
          <div className='mx-auto text-secondBg text-center space-y-4'>
            <p className='text-4xl'>Graduate to {config.siteName}</p>
            <p className='text-md'>All the care for down there</p>
            <Button size={"lg"} className='bg-white font-bold text-textColor text-lg'>SHOP NOW</Button>
          </div>

        </div>


        <div className='px-2 pb-10 bg-secondBg pt-2'>
          {<SliderOneLine onlyImages={true} autoScroll label='LATEST FROM ROAM' cardProps={items} />}
        </div>



        


      
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