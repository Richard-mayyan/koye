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
import clsx from 'clsx';
import Autoplay from "embla-carousel-autoplay"

function MoveSliderCmp({api} : {api:any}){
  return (
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
  )
}
//  function buildMoveSliderCmp(api : any) {
//   return <MoveSliderCmp api={undefined} />
// }


 function SliderItem({v} : {v:CardProp}) {
  return (
    <div>
    <p className='text-textColor text-lg uppercase  md:text-[10px]  flex truncate  '>{v.label} <span className='hidden md:block'>-</span>  <Price
         className="flex-none rounded-full  text-black hidden md:block"
         amount={v.price}
         currencyCode={v.currencyCode}
         currencyCodeClassName="hidden @[275px]/label:inline"
       />
   </p>

 <Link
     className="relative h-full w-full "
     href={`/product/${v.handle}`}
     prefetch={true}
   >
     <div className="group">
<div
className="h-[250px] rounded-lg transition duration-300 ease-in-out group-hover:brightness-[1.2]"
style={{
backgroundImage: `url('${v.img}')`,
backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
}}
>
</div>
     </div>

 </Link>
    </div>
  )
}




 export function SliderImgCmp({className,src,handle} : {className:string,src : string,handle:string}) {
  return (
    <Link
    className="relative h-full w-full "
    href={`/product/${handle}`}
    prefetch={true}
  >
    <div className="group">
<div
className={clsx(" rounded-lg transition duration-300 ease-in-out group-hover:brightness-[1.2]",className)}
style={{
backgroundImage: `url('${src}')`,
backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
}}
>
</div>
    </div>

</Link>
  )
}

function NewSlider({cardProps,Label,autoScroll,CustomContent} : {cardProps : CardProp[] ,carouselClx:any,Label:any,autoScroll? : boolean ,CustomContent : any}) {
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
            {Label}
        </div>
      
    </div>

        <Carousel plugins={autoScroll ? [Autoplay({delay: 2000,})]: []} setApi={setApi} opts={{align : "center"}}>
        <CarouselContent>
          {CustomContent}
           
        </CarouselContent>
    </Carousel>
   </div>
  )
}






export default NewSlider