'use client';

import Image from 'next/image';
import { useProduct, useUpdateURL } from './product-context';
import { GridTileImage } from '../grid/tile';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  const { state, updateImage } = useProduct();
  const updateURL = useUpdateURL();
  const imageIndex = state.image ? parseInt(state.image) : 0;

  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;

  const buttonClassName =
    'h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center';

  return (
    <form className=' h-full'>
      <div className="relative overflow-hidden h-full">
        {images[imageIndex] && (
          <img
            className="h-full w-full object-cover "
            // fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt={images[imageIndex]?.altText as string}
            src={images[imageIndex]?.src as string}
            // priority={true}
          />
        )}
        {/* <div className='h-full w-full bg-yellow-900  '></div> */}

     
        <div className=' w-full  absolute md:bottom-10 bottom-2'>
          {images.length > 1 ? (
            <ul className=" flex items-center justify-center gap-2 overflow-auto py-1 md:mb-0">
              {images.map((image, index) => {
                const isActive = index === imageIndex;

                return (
                  <li key={image.src} className="h-12 w-12">
                    <button
                      formAction={() => {
                        const newState = updateImage(index.toString());
                        updateURL(newState);
                      }}
                      aria-label="Select product image"
                      className="h-full w-full"
                    >
                      <GridTileImage
                        alt={image.altText}
                        src={image.src}
                        width={80}
                        height={80}
                        active={isActive}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
            ) : null}
        </div> 


      
      </div>

    </form>
  );
}
