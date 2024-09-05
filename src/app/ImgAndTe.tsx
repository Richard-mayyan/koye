import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { IMG_URL } from '@/lib/constants'

function ImgAndTe({isEven,children} : {isEven : boolean,children : any}) {
    

  return (
    <div className={cn("md:flex md:h-[400px] bg-green-900",{
        "flex-row-reverse" : isEven
      })}>
    <div 
      style={{backgroundImage : `url('${IMG_URL}')`,backgroundSize : "cover",backgroundPosition : "center"}}
      className={cn("h-[200px] md:h-full  w-full md:w-1/2 flex  justify-center items-end")}>
    </div>

    <div className="text-white w-full  md:w-1/2 flex  items-center p-10 md:px-10 bg-appyellow">
      {children}
    </div>
    
  </div>
  )
}

export default ImgAndTe