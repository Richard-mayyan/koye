"use client"
import React from 'react'
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { IMG_URL_MODEL, PALETTE } from './page';
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpLeftIcon, MoveLeftIcon, MoveRightIcon } from 'lucide-react';


function SliderPart() {
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
        <div style={{color : PALETTE.yellow}} className="flex justify-between items-center">
            <p className='text-[10px]'>TRENDING</p>
            <div className='flex space-x-2  cursor-pointer '>
                <MoveLeftIcon style={{color : api?.canScrollPrev() ? PALETTE.yellow : 'black'}} onClick={() => api?.scrollPrev()} />
                <MoveRightIcon style={{color : api?.canScrollNext() ? PALETTE.yellow : 'black'}} onClick={() => api?.scrollNext()} />
            </div>
        </div>
        <div style={{backgroundColor : PALETTE.yellow,height : "2px"}} ></div>
    </div>
        <Carousel setApi={setApi} opts={{align : "center"}}>
        <CarouselContent>
            {[1,2,3,4,5,6,7,8,2,3,4,5,6,7,8].map((v,index) => {
            return  <CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/4">
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

export default SliderPart