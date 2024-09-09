import { defaultSort, sorting } from '@/lib/constants';
import { getCollectionProducts, getCollections } from '@/lib/shopify';
import { cn } from '@/lib/utils'
import { getCardsItems } from '@/roam/homepage/homepage';
import Navbar from '@/roam/navbar'
import React from 'react'
import NewSlider, { SliderImgCmp } from '../NewSliderCmp';
import { CarouselItem } from '@/components/ui/carousel';
import Link from 'next/link';

async function page({
    searchParams
  }: {
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
  
    const { sort, q: searchValue } = searchParams as { [key: string]: string };
    const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  
    // const products = await getProducts({ sortKey, reverse, query: searchValue });
    const products = await getCollectionProducts({
      collection: 'hidden-homepage-featured-items'
    });
    // console.log("ces produits ",products)
  
    const collections = await getCollections();
    console.log("ces collections ",collections.find((c) => c.products?.length)?.products)
  
  
    
    // const resultsText = products.length > 1 ? 'results' : 'result';
  
    const items = getCardsItems(products)

    const imgUrl = "https://images.pexels.com/photos/1150618/pexels-photo-1150618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    const imgUrl2= "https://images.pexels.com/photos/338936/pexels-photo-338936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    const imgUrl3 = "https://images.pexels.com/photos/6990475/pexels-photo-6990475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  return (
    <div>

        <div className="lg:flex bg-white w-full">
            <div 
            style={{backgroundImage : `url('${imgUrl}')`,backgroundSize : "cover",backgroundPosition : "center"}}
            className={cn("lg:h-[80vh] h-[40vh] lg:w-1/2  flex  justify-center items-center ")}>
                <div className="absolute top-0">
                <Navbar collections={collections} items={items} />
                </div>

        
                    <div className='font-light text-secondBg text-5xl leading-[4.5rem]'>
                        <p className=' '>For people &</p>
                        <p className=' '>for the planet</p>
                    </div>


            </div>
            
            <div className='lg:w-1/2 font-light text-black text-lg lg:text-4xl leading-[2rem] lg:leading-[3rem] text-center bg-white p-10 lg:p-0 flex items-center justify-center'>
                <div>
                    <p className=' '>We are making the world</p>
                    <p className='text-textColor italic'>a more sex positive place </p>
                    <p className=' '>and our mission is to  </p>
                    <p className=' '>faciliate the conversation </p>
                    <p className='text-textColor italic'>to break down the stigmas of sex</p>
                </div>
            </div>
        </div>


        <div className='px-2 pb-10 mt-20'>
          <NewSlider autoScroll  cardProps={items}
          Label={
              <div className='w-full text-sm'>
              <div className='bg-black h-[1px] mb-2'></div>
            </div>} 

          CustomContent={items.map((v,index) => {
            return  <CarouselItem key={index} className="basis-2/5 lg:basis-1/5  border-[1px] mr-5">
                   <Link
                      className="relative h-full w-full "
                      href={v.customLink ?? `/product/${v.handle}`}
                      prefetch={true}
                    >
                                  {v.img && <SliderImgCmp handle={v.handle} src={v.img} className='h-[400px]' />}
                    </Link>
                  </CarouselItem>
            })}
        carouselClx={undefined} />
        </div>


        <div className='px-10 py-10 space-y-4'>
            <p className='text-xl text-textColor'>Give back programs</p>
            <p className='text-lg text-black'>Other projects we are working on as a new company to ensure we can hold our heads up high.</p>
          </div>


          <div className="lg:flex px-4 space-y-4 lg:space-x-6 md:space-y-0">
            {[1,2,3].map((v,index) => {
                return <div className='border-2 border-[#F0E8DA]' key={index}>

                    <div className='h-44 w-full bg-[#F0E8DA] flex justify-center items-center'>
                        <img className='w-44 ' src="https://a.storyblok.com/f/153121/167x54/446f0eea99/untitled-design-56.png" alt="" />
                    </div>

                    <div className="p-4 space-y-2">
                        <p>1% for the planet</p>
                        <p>We're committed to supporting the environment. With 1% for the planet we give back to causes that support global ecology with partners across the globe.</p>
                    </div>
                    </div>
            })}
          </div>



 


            <div className="lg:flex bg-white w-full">
                <div 
                style={{backgroundImage : `url('${imgUrl2}')`,backgroundSize : "cover",backgroundPosition : "center"}}
                className={cn("lg:h-[80vh] h-[40vh] lg:w-1/2  flex  justify-center items-center  relative ")}>
                    <div className=' h-full w-full absolute backdrop-blur-[3px]'></div>
                   
                        <div className='font-light text-secondBg text-6xl  leading-[4.5rem] z-40'>
                        <p className=' '>Supporting</p>
                        <p className=' '>Biodiversity</p>
                        </div>


                </div>
                
                <div className='lg:w-1/2 font-extralight text-black text-lg lg:text-4xl lg:leading-[4rem] leading-[2rem] text-center bg-white py-10 lg:p-0 flex items-center justify-center '>
                    <div className=' '>
                        <p className=' '>We are making the world</p>
                        <p className='text-textColor italic'>a more sex positive place </p>
                        <p className=' '>and our mission is to  </p>
                        <p className=' '>faciliate the conversation </p>
                        <p className='text-textColor italic '>to break down the stigmas of sex</p>
                    </div>
                </div>
        </div>

        <div className='my-4'></div>


        <div className="lg:flex bg-white w-full">
                <div 
                style={{backgroundImage : `url('${imgUrl3}')`,backgroundSize : "cover",backgroundPosition : "center"}}
                className={cn("lg:h-[80vh] h-[40vh] lg:w-1/2  flex  justify-center items-center  relative ")}>
                    <div className=' h-full w-full absolute backdrop-blur-[3px]'></div>
                   
                        <div className='font-light text-secondBg text-6xl  leading-[4.5rem] z-40'>
                        <p className=' '>Supporting</p>
                        <p className=' '>Biodiversity</p>
                        </div>


                </div>
                
                <div className='lg:w-1/2 font-extralight text-black text-lg lg:text-4xl lg:leading-[4rem] leading-[2rem] text-center bg-white py-10 lg:p-0 flex items-center justify-center '>
                    <div className=' '>
                        <p className=' '>We are making the world</p>
                        <p className='text-textColor italic'>a more sex positive place </p>
                        <p className=' '>and our mission is to  </p>
                        <p className=' '>faciliate the conversation </p>
                        <p className='text-textColor italic '>to break down the stigmas of sex</p>
                    </div>
                </div>
        </div>
        
        <div className='my-10'></div>


        <div className='px-4'>
            <div className='text-xl  mb-10'>
                <p className='text-textColor lg:text-2xl'> <span className='font-medium'>Helping</span>  <span className='italic'>The planet</span> </p>
                <p className='my-4'>Our condoms are made with up to 40% less plastic vs traditional condom foils, so every time you get down with a Roam condom, you’re saving plastic. Not only that, we plant a tree for every order you place. </p>


                <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 gap-4">
                    <div>
                        <div className='h-[150px] lg:h-[250px] w-full bg-primaryBg flex items-center justify-center text-white '>
                            <div>
                                <div className='flex items-center mx-auto w-fit'>
                                    <img className='h-14 mr-4 lg:h-20' src="https://a.storyblok.com/f/153121/x/c22b13bb79/tree-light-large.svg" alt="" />
                                    <p className='text-4xl lg:text-8xl font-semibold'>800kg</p>
                                </div>
                                <p className='text-lg mt-2'>of plastic saved by using our condoms</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='h-[150px] lg:h-[250px] w-full bg-primaryBg flex items-center justify-center text-white text-center '>
                            <div className='px-10 '>
                                <div className='flex items-center mx-auto w-fit'>
                                    <img className='h-10 lg:h-20' src="https://a.storyblok.com/f/153121/x/c22b13bb79/tree-light-large.svg" alt="" />
                                </div>
                                <p className='text-lg mt-2'>trees to be planted to help clean the air + collect water</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className='my-10'></div>




    
    
    </div>
  )
}

export default page