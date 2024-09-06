"use client"
import React from 'react'
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpLeftIcon, MoveLeftIcon, MoveRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { IMG_URL_MODEL } from '@/lib/constants';
import { Product } from '@/lib/shopify/types';
import Price from '@/components/price';
import Link from 'next/link';
import { CardProp } from '@/roam/homepage/homepage';
import { Button } from '@/components/ui/button';
import Autoplay from "embla-carousel-autoplay"


// export function Example() {
//   return (
//     <Carousel
   
//     >
//       // ...
//     </Carousel>
//   )
// }

// import { SliderItem } from './SliderPart';


 function SliderItem({v,onlyImages} : {v:CardProp, onlyImages? : boolean}) {
  return (
    <div>


 <Link
     className="relative h-full w-full "
     href={`/product/${v.handle}`}
     prefetch={true}
   >


     <div className="group">
        <div
        className="h-[350px] rounded-lg transition duration-300 ease-in-out group-hover:brightness-[1.2]"
        style={{
        backgroundImage: `url('${v.img}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        }}
        >
        </div>
     </div>

     <div className={cn("",{
      "hidden" : onlyImages
     })}>
            <p className='text-black text-2xl font-light   md:text-[10px]  flex truncate  mt-2 '>{v.label} <span className='hidden md:block'>-</span>  <Price
                className="flex-none rounded-full  text-black hidden md:block"
                amount={v.price}
                currencyCode={v.currencyCode}
                currencyCodeClassName="hidden @[275px]/label:inline"
              />
          </p>
          <p className='text-black text-md   md:text-[10px]  flex truncate  mt-8 '>50ml • Sensation • Micro-biome prebiotic<span className='hidden md:block'>-</span>  
          </p>
          <div className='bg-black h-[1px] mb-8'></div>

          <Button  className='bg-textColor uppercase text-[10px] py-0 font-bold'>Add to cart</Button>
     </div>


 </Link>
    </div>
  )
}



function SliderOneLine({cardProps , label , autoScroll , onlyImages} : {cardProps : CardProp[],label : string,autoScroll? : boolean , onlyImages? : boolean}) {
    const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  
  return (
   <div>
    <div className=' mt-10'>
        <div className="flex justify-between items-center ">
            <p className='text-sm md:text-[10px] text-textColor'>{label}</p>
            <div className='md:flex space-x-2  cursor-pointer hidden  '>
            <MoveLeftIcon 
            onClick={() => api?.scrollPrev()}
            className={cn("text-black",{
              "text-appyellow" : api?.canScrollPrev()
            })}
             />
              <MoveRightIcon 
              onClick={() => {
                api?.scrollNext()
              }}
            className={cn("text-black",{
              "text-appyellow" : api?.canScrollNext()
            })}
             />
            </div>
        </div>
        <div className='bg-black h-[1px] mb-8' 
        ></div>
    </div>
 
        <Carousel plugins={autoScroll ? [
          Autoplay({
            delay: 2000,
          }),]
       : []} className='mt-5' setApi={setApi} opts={{align : "center"}}>
        <CarouselContent>
            {cardProps.map((v,index) => {
            return  <CarouselItem key={index} className="basis-4/5 md:basis-1/2 lg:basis-1/4 ">
                       <SliderItem onlyImages={onlyImages} v={v}  />
                  </CarouselItem>
            })}
        </CarouselContent>
    </Carousel>
   </div>
  )
}






export default SliderOneLine