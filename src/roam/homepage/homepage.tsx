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
// import SliderOneLine from '@/app/SliderOneLine';
import BienFaitCarousel from './BienFaitCarousel';
import TestimonialSlider from './testimonials';
import ImagesViews from './ImagesViews';
import NewSlider, { SliderImgCmp } from '@/app/NewSliderCmp';
import { CarouselItem } from '@/components/ui/carousel';
import Link from 'next/link';
import { cn } from '@/lib/utils';


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
        <div className='mt-4'></div>
        <PartnersCarousel />

        <div className='px-2 pb-10'>
          {<SliderPart cardProps={items}
           carouselClx="hidden md:flex" 
           LABEL={<p className='text-sm'>SHOP BY CATEGORY</p>}
            />}
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
        <NewSlider autoScroll  cardProps={items}
          Label={
              <div className='w-full text-sm mb-10'>
              <p className='text-textColor font-semibold'>BESTSELLERS</p>
            </div>} 

          CustomContent={items.map((v,index) => {
            return  <CarouselItem key={index} className="basis-4/5  ">
                       <SliderImgCmp handle={v.handle} src={v.img} className='' />
                      <div className={cn("",{
                      })}>
                              <p className='text-black text-2xl font-light   md:text-[10px]  flex truncate  mt-2 '>{v.label}
                            </p>
                            <p className='text-black text-md   md:text-[10px]  flex truncate  mt-8 '>50ml • Sensation • Micro-biome prebiotic<span className='hidden md:block'>-</span>  
                            </p>
                            <div className='bg-black h-[1px] mb-8'></div>

                            <Button  className='bg-textColor uppercase text-[10px] py-0 font-bold'>Add to cart</Button>
                      </div>
                  </CarouselItem>
            })}
        carouselClx={undefined} />
        </div> 

        <div className='mt-4'></div>
        <BienFaitCarousel />
        <div className='mt-4'></div>


        <div className='space-y-6'>
          <p className='text-textColor text-center text-sm uppercase font-semibold'>Verified {config.siteName} reviews</p>
          <img className='w-36 mx-auto' src="https://a.storyblok.com/f/153121/648x905/42c81a17b0/home_review.png/m/400x0/" alt="" />
          <TestimonialSlider />
          
        </div>

        <div className='px-2 pb-10'>
          <NewSlider autoScroll  cardProps={items}
          Label={
              <div className='w-full text-sm'>
              <p>IN BED WITH</p>
              <div className='bg-black h-[1px] mb-2'></div>
              <p className='mb-4'>Pictures of {config.siteName} shared by our customers</p>
            </div>} 

          CustomContent={items.map((v,index) => {
            return  <CarouselItem key={index} className="basis-4/5  ">
                      <SliderImgCmp handle={v.handle} src={v.img} className='h-[400px]' />

                  </CarouselItem>
            })}
        carouselClx={undefined} />


        </div>



        <div className='h-[400px]'>
          <ImagesViews imgs={products.map((v) => v.featuredImage.url!)} />
        </div>

       <WhyChoose />

       {/* <div className='px-2 pb-10'>
          {<SliderOneLine onlyImages autoScroll label='AS SEEN IN THE PRESS AND AVERTISING' cardProps={items} />}
        </div> */}

<div className='px-2 pb-10'>
          <NewSlider autoScroll  cardProps={items}
          Label={
              <div className='w-full text-sm'>
              <p>AS SEEN IN THE PRESS AND AVERTISING</p>
              <div className='bg-black h-[1px] mb-5'></div>
            </div>} 

          CustomContent={items.map((v,index) => {
            return  <CarouselItem key={index} className="basis-4/5  ">
                      <SliderImgCmp handle={v.handle} src={v.img} className='h-[400px]' />

                  </CarouselItem>
            })}
        carouselClx={undefined} />


        </div>




        <div className='bg-primaryBg py-20 px-10 mb-14'>
          <div className='mx-auto text-secondBg text-center space-y-4'>
            <p className='text-4xl'>Graduate to {config.siteName}</p>
            <p className='text-md'>All the care for down there</p>
            <Button variant={"roam"}>SHOP NOW</Button>
          </div>

        </div>

{/* 
        <div className='px-2 pb-10 bg-secondBg pt-2'>
          {<SliderOneLine onlyImages={true} autoScroll label='LATEST FROM ROAM' cardProps={items} />}
        </div> */}



<div className='px-2 pb-10 bg-[#F0E8DA] py-2'>
          <NewSlider autoScroll  cardProps={items}
          Label={
              <div className='w-full text-sm'>
              <p className='font-normal'>LATEST FROM ROAM</p>
              <div className='bg-black h-[1px] mb-5'></div>
            </div>} 

          CustomContent={items.map((v,index) => {
            return  <CarouselItem key={index} className="basis-3/5  ">
                      <SliderImgCmp handle={v.handle} src={v.img} className='h-[280px]' />
                      <p className='font-light text-xl my-2'>{v.label}</p>
                      <Link className='text-textColor text-sm underline' href={"/"}>READ MORE</Link>

                  </CarouselItem>
            })}
        carouselClx={"undefined"} />


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
            <Button size={"lg"} variant={"roam"}>Shop the new range</Button>
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