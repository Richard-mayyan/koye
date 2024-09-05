"use client"
import React from 'react'
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpLeftIcon, MoveLeftIcon, MoveRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { IMG_URL_MODEL } from '@/lib/constants';
import { Product } from '@/lib/shopify/types';
import Price from '@/components/price';
import Link from 'next/link';


function SliderPart({products} : {products : Product[]}) {
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
    <div>
        <div className="flex justify-between items-center ">
            <p className='text-[10px]'>TRENDING</p>
            <div className='flex space-x-2  cursor-pointer '>
            <MoveLeftIcon 
            onClick={() => api?.scrollPrev()}
            className={cn("text-black",{
              "text-appyellow" : api?.canScrollPrev()
            })}
             />
              <MoveRightIcon 
              onClick={() => api?.scrollNext()}
            className={cn("text-black",{
              "text-appyellow" : api?.canScrollNext()
            })}
             />
            </div>
        </div>
        <div className='bg-appyellow h-[2px]' 
        ></div>
    </div>
        <Carousel setApi={setApi} opts={{align : "center"}}>
        <CarouselContent>
            {products.map((v,index) => {
            return  <CarouselItem key={index} className="basis-1/2 md:basis-1/2 lg:basis-1/4">
                <p className='text-[10px] my-2 flex'>{v.title} -   <Price
              className="flex-none rounded-full  text-black"
              amount={v.priceRange.maxVariantPrice.amount}
              currencyCode={v.priceRange.maxVariantPrice.currencyCode}
              currencyCodeClassName="hidden @[275px]/label:inline"
            />
           </p>

           <Link
              className="relative h-full w-full"
              href={`/product/${v.handle}`}
              prefetch={true}
            >
            <div className="h-44  object-cover rounded-lg " 
                style={{backgroundImage : `url('${v.featuredImage?.url}')`,backgroundSize : "cover",backgroundPosition : "center",backgroundRepeat :"no-repeat"}}
            > 
            </div>
            </Link>
            </CarouselItem>
            })}
        </CarouselContent>
    </Carousel>
   </div>
  )
}

export default SliderPart