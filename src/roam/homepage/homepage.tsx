import { Button } from '@/components/ui/button';
import Navbar from '@/roam/navbar'
import React from 'react'

function homepage() {
  return (
    <div>
        {/* <Navbar /> */}
      
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
      <div className="absolute top-0 left-0 w-full h-full  ">

        <Navbar />
        <div className='text-4xl text- mx-auto   mt-32 max-w-[70%] space-y-2 text-center text-secondBg'>
          <p className='text-[40px]  '>Upgrade your</p>
          <p className='text-[36px]   '>next <span className='italic'>date night</span></p>
          <p className='text-sm max-w-sm text-center leading-5 uppercase '>Try sensational lubricants with flora protecting microbiome</p>
          <div className='w-fit mx-auto'>
            <Button size={"lg"} className='text-textColor text-lg bg-white'>Shop the new range</Button>
          </div>
        </div>
        <img
          src="/homevideobgimg.webp"
          alt="Overlay Image"
          className="w-full mt-10"
        />
      </div>
    </div>
  );
};


export {VideoBackground}