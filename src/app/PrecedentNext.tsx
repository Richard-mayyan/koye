"use client"

import { cn } from '@/lib/utils'
// import { MoveLeftIcon, MoveRightIcon } from 'lucide-react'

import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpLeftIcon, MoveLeftIcon, MoveRightIcon } from 'lucide-react';
import React from 'react'
import { IMG_URL_MODEL } from '@/lib/constants';

function PrecedentNext() {
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
            {[1,2,3,4,5,6,7,8,2,3,4,5,6,7,8].map((v,index) => {
            return  <CarouselItem key={index} className="basis-1/2 md:basis-1/2 lg:basis-1/4">
                <p className='text-[8px] my-2'>PAYLERA - $232.00</p>
            <div className="h-44  object-cover rounded-lg " 
                style={{backgroundImage : `url('${IMG_URL_MODEL}')`,backgroundSize : "cover",backgroundPosition : "center",backgroundRepeat :"no-repeat"}}
            > 
            </div>
            </CarouselItem>
            })}
        </CarouselContent>
    </Carousel>
   </div>
  )
}

export default PrecedentNext