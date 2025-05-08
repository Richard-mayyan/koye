import { Button, buttonVariants } from "@/components/ui/button";
import Navbar from "@/roam/navbar";
import React from "react";
import PartnersCarousel from "./PartnersCarousel";
import SliderPart from "@/app/SliderPart";
import { Collection, Product } from "@/lib/shopify/types";
import { defaultSort, sorting } from "@/lib/constants";
import {
  getCollectionProducts,
  getCollections,
  getProducts,
} from "@/lib/shopify";
import { config } from "../config";
import { HeartIcon } from "lucide-react";
// import SliderOneLine from '@/app/SliderOneLine';
import BienFaitCarousel from "./BienFaitCarousel";
import TestimonialSlider from "./testimonials";
import ImagesViews from "./ImagesViews";
import NewSlider, { SliderImgCmp } from "@/app/NewSliderCmp";
import { CarouselItem } from "@/components/ui/carousel";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Price from "@/components/price";
import ArticleCarousel from "./ArticleCarousel";
import clsx from "clsx";
import Perfection from "./Perfection";

export interface CardProp {
  img?: string;
  label: string;
  price?: string;
  handle: string;
  currencyCode?: string;
  customLink?: string;
}

export function getCardsItemsFromCollection(items: Collection[]) {
  const a: CardProp[] = items.map((v) => ({
    img: v.image?.url,
    label: v.title,
    price: "",
    handle: v.handle,
    currencyCode: "",
    customLink: "/products/" + v.handle,
  }));

  return a;
}

export function getCardsItems(products: Product[]) {
  const a: CardProp[] = products.map((v) => ({
    img: v.featuredImage?.url,
    label: v.title,
    price: v.priceRange.maxVariantPrice.amount,
    handle: v.handle,
    currencyCode: v.priceRange.maxVariantPrice.currencyCode,
    customLink: "/product/" + v.handle,
  }));

  return a;
}

function WhyChoose() {
  return (
    <div className="bg-primaryBg py-14 px-4 space-y-6 text-secondBg lg:h-full">
      <p className=" text-3xl">
        Pourquoi choisir <span className="italic">{config.siteName}</span> ?
      </p>
      <p className="text-sm">
        Votre peau à de la valeur. C’est pour cela que nos produits{" "}
      </p>

      {[
        {
          label: "Alliage entre terre et mere",
          description:
            "Votre peau à de la valeur. C’est pour cela que nos produits",
        },
        {
          label: "Pour tout type de peau",
          description:
            "Votre peau à de la valeur. C’est pour cela que nos produits",
        },
        {
          label: "100% naturel",
          description:
            "Votre peau à de la valeur. C’est pour cela que nos produits",
        },
      ].map((v, index) => {
        return (
          <div className="flex space-x-4 items-center" key={index}>
            <div className="w-1/4 md:w-auto ">
              <div className=" rounded-full border-secondBg  h-12 w-12  flex justify-center bg-white items-center">
                {/* <HeartIcon className="text-secondBg w-1/2 h-1/2 " /> */}
              </div>
            </div>
            <div className=" max-w-md">
              <p className="text-xl">{v.label}</p>
              <p className="text-xs">{v.description} </p>
            </div>
          </div>
        );
      })}

      <div className="bg-white rounded-full h-10 max-w-lg"></div>
    </div>
  );
}

async function homepage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  // const products = await getProducts({ sortKey, reverse, query: searchValue });
  const products = await getCollectionProducts({
    collection: "hidden-homepage-featured-items",
  });
  // console.log("ces produits ",products)

  const collections = await getCollections();
  console.log(
    "ces collections ",
    collections.find((c) => c.products?.length)?.products
  );

  // const resultsText = products.length > 1 ? 'results' : 'result';

  const items = getCardsItems(products);
  return (
    <div>
      <div className="h-[100vh] md">
        <VideoBackground>
          <Navbar collections={collections} items={items} />
        </VideoBackground>
      </div>

      <div className="mt-4"></div>
      {/* <PartnersCarousel /> */}
      <BienFaitCarousel />

      <div className="px-4 pb-10"></div>

      {/* <div className="px-4 pb-10">
        {
          <SliderPart
            cardProps={getCardsItemsFromCollection(collections)}
            carouselClx="hidden"
            LABEL={<p className="text-sm">SHOP BY CATEGORY</p>}
          />
        }
      </div> */}

      <div className="lg:flex lg:h-[500px]">
        <div className=" bg-red-800 lg:w-1/2 lg:h-full h-[450px]  relative">
          <div className="">
            <video
              preload="auto"
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

        <div className="lg:w-1/2 h-full bg-green-500 overflow-hidden">
          <WhyChoose />
        </div>
      </div>

      <div className="px-2 pb-10">
        <NewSlider
          cardProps={items}
          Label={
            <div className="w-full text-sm mb-10">
              <p className="text-textColor font-semibold">BESTSELLERS</p>
            </div>
          }
          CustomContent={items.map((v, index) => {
            return (
              <CarouselItem key={index} className="basis-4/5 lg:basis-1/4  ">
                <Link
                  className="relative h-full w-full "
                  href={v.customLink ?? `/product/${v.handle}`}
                  prefetch={true}
                >
                  {v.img && (
                    <SliderImgCmp
                      handle={v.handle}
                      src={v.img}
                      className="h-[250px] lg:h-[320px]"
                    />
                  )}
                  <div className={cn("", {})}>
                    <p className="text-black text-2xl font-light     flex truncate  mt-2 ">
                      {v.label}
                    </p>
                    <p className="text-black text-md   md:text-[0.9rem]  flex truncate  mt-8 ">
                      50ml • Sensation • Micro-biome prebiotic
                      <span className="hidden md:block">-</span>
                    </p>
                    <div className="bg-black h-[1px] mb-8"></div>

                    <div className="flex items-center justify-between space-x-2">
                      <Button className="bg-textColor uppercase lg:text-md text-[10px] py-0 font-bold lg:text-[12px] lg:px-6 lg:py-5">
                        Add to cart
                      </Button>

                      {v.price && v.currencyCode && (
                        <Price
                          className="flex justify-end space-y-2 text-right text-sm font-bold text-textColor"
                          amount={v.price}
                          currencyCode={v.currencyCode}
                        />
                      )}
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            );
          })}
          carouselClx={undefined}
        />
      </div>

      <div className="mt-10"></div>

      <img className="w-full" src="/verifiedpath.svg" alt="" />
      <div className="space-y-6 lg:flex bg-[#E6EAFC]   ">
        <p className="text-textColor text-center text-sm lg:hidden uppercase font-semibold">
          Verified {config.siteName} reviews
        </p>
        {/* <img
          className="w-36 lg:w-1/3 mx-auto"
          src="https://a.storyblok.com/f/153121/648x905/42c81a17b0/home_review.png/m/400x0/"
          alt=""
        /> */}
        <div className="  w-full relative">
          <div className="lg:w-1/2 h-full  mx-auto">
            <TestimonialSlider />
          </div>
        </div>
      </div>
      <img className="w-full rotate-180" src="/verifiedpath.svg" alt="" />

      <div className="mt-4"></div>
      <BienFaitCarousel />

      {/* <div className="px-2 pb-10 mt-20">
        <NewSlider
          autoScroll
          cardProps={items}
          Label={
            <div className="w-full text-sm">
              <p>IN BED WITH</p>
              <div className="bg-black h-[1px] mb-2"></div>
              <p className="mb-10">
                Pictures of {config.siteName} shared by our customers
              </p>
            </div>
          }
          CustomContent={items.map((v, index) => {
            return (
              <CarouselItem key={index} className="basis-4/5 lg:basis-2/5 ">
                <Link
                  className="relative h-full w-full "
                  href={v.customLink ?? `/product/${v.handle}`}
                  prefetch={true}
                >
                  {v.img && (
                    <SliderImgCmp
                      handle={v.handle}
                      src={v.img}
                      className="h-[400px]"
                    />
                  )}
                </Link>
              </CarouselItem>
            );
          })}
          carouselClx={undefined}
        />
      </div> */}

      {/* <div className="lg:flex lg:h-[500px]">
        <div className=" bg-red-800 lg:w-1/2 lg:h-full h-[450px]  relative">
          <ImagesViews imgs={products.map((v) => v.featuredImage?.url)} />
        </div>

        <div className="lg:w-1/2 h-full bg-green-500 overflow-hidden">
          <WhyChoose />
        </div>
      </div> */}

      {/* <div className='px-2 pb-10'>
          {<SliderOneLine onlyImages autoScroll label='AS SEEN IN THE PRESS AND AVERTISING' cardProps={items} />}
        </div> */}

      <div className="px-10 pb-10 pt-10 bg-appyellow">
        <ArticleCarousel />
        {/* <NewSlider
          autoScroll
          cardProps={items}
          Label={
            <div className="w-full text-sm">
            
            </div>
          }
          CustomContent={items.map((v, index) => {
            return (
              <CarouselItem
                key={index}
                className="basis-4/5 lg:basis-[33%] border bg-red-800 pt-4 "
              >
                <Link
                  className="relative h-full w-full "
                  href={v.customLink ?? `/product/${v.handle}`}
                  prefetch={true}
                >
                  {v.img && (
                    <SliderImgCmp
                      handle={v.handle}
                      src={v.img}
                      className="h-[250px]"
                    />
                  )}
                </Link>

                <div className=" w-full">
                  <p>How to use love languages for better</p>
                  <p>dkjfdkjf</p>

                  <Link
                    className="relative h-full w-full text-appyellow "
                    href={v.customLink ?? `/product/${v.handle}`}
                    prefetch={true}
                  >
                    READ MORE
                  </Link>
                </div>
              </CarouselItem>
            );
          })}
          carouselClx={undefined}
        /> */}
      </div>

      <Perfection />

      {/* 
        <div className='px-2 pb-10 bg-secondBg pt-2'>
          {<SliderOneLine onlyImages={true} autoScroll label='LATEST FROM ROAM' cardProps={items} />}
        </div> */}

      {/* <div className="px-2 pb-10 bg-[#F0E8DA] py-2">
        <NewSlider
          cardProps={items}
          Label={
            <div className="w-full text-sm">
              <p className="font-normal">LATEST FROM ROAM</p>
              <div className="bg-black h-[1px] mb-5"></div>
            </div>
          }
          CustomContent={items.slice(0, 3).map((v, index) => {
            return (
              <CarouselItem key={index} className="basis-3/5 lg:basis-1/3 ">
                <Link
                  className="relative h-full w-full "
                  href={v.customLink ?? `/product/${v.handle}`}
                  prefetch={true}
                >
                  {v.img && (
                    <SliderImgCmp
                      handle={v.handle}
                      src={v.img}
                      className={cn("h-[280px] lg:h-[400px]", {
                        "lg:mt-10": index % 2 != 0,
                      })}
                    />
                  )}
                  <p className="font-light text-2xl lg:text-3xl my-2">
                    {v.label}
                  </p>
                  <p className="font-light text-md my-2">
                    Lorem, ipsum dolor sit amet explicabo minima, reprehenderit
                    aliquam similique t?
                  </p>
                </Link>
                <Link className="text-textColor text-sm underline" href={"/"}>
                  READ MORE
                </Link>
              </CarouselItem>
            );
          })}
          carouselClx={"undefined"}
        />
      </div> */}
    </div>
  );
}

export default homepage;

const VideoBackground = ({ children }: any) => {
  const phoneUpgrade = (
    <div className="md:hidden text-4xl text- mx-auto   mt-32 max-w-[70%] space-y-2 text-center text-secondBg ">
      <p className="text-[40px]  ">Rajeunissez votre peau</p>
      <p className="text-[36px]   ">
        <span className="italic">maintenant !</span>
      </p>
      <p className="text-sm max-w-sm text-center leading-5 uppercase  mx-auto">
        Try sensational lubricants with flora protecting microbiome
      </p>
      {/* <div className="w-fit mx-auto">
        <Button size={"lg"} variant={"roam"}>
          Shop the new range
        </Button>
      </div> */}
    </div>
  );

  const tabUpgrade = (
    <div className="hidden md:block md:bg-primaryBg text-4xl  mx-auto    pt-14 pb-40 max-w-[70%] md:max-w-full md:h-44 space-y-2 text-center text-secondBg z-20 ">
      <p
        style={{ lineHeight: 1 }}
        className="text-[3.6rem] mb-2 max-w-5xl mx-auto   "
      >
        Rajeunissez votre peau <span className="italic">maintenant !</span>{" "}
      </p>
      <p className="  text-[1rem] text-center uppercase  mx-auto">
        Try sensational lubricants with flora protecting microbiome
      </p>
    </div>
  );
  return (
    <div className="relative w-full h-full bg-primaryBg ">
      {/* Vidéo en background */}

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden  ">
        <div className="relative h-full">
          {/* <Navbar ite /> */}
          {children}
          {phoneUpgrade}

          {tabUpgrade}
          <div className="w-[40%] h-[400px] text-white mx-auto  relative ">
            {/* <video
              className=" w-full h-full object-cover rounded-tl-[300px] rounded-tr-[300px]"
              autoPlay
              loop
              muted
            >
              <source src="/bgvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}

            <img
              className="w-full object-cover  mt-10"
              src="/home.svg"
              alt=""
            />

            <div className="w-fit mx-auto absolute bottom-0 left-1/2  -translate-x-1/2 ">
              <Button size={"lg"} variant={"roam"}>
                Découvrez {config.siteName}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoBackground };

{
  /* <div className="h-44 w-full bg-green-400"></div> */
}

{
  /* <div className='bg-primaryBg h-44 z-10 absolute'></div> */
}

{
  /* <div className="h-full sm:h-fit  w-full sm:max-w-[400px]  mx-auto md:mx-auto">
            <img
              src="/homevideobgimg.webp"
              alt="Overlay Image"
              className="w-full md:mx-auto  mt-10 sm:-mt-28"
            />
            <div className="w-fit mx-auto sm:block sm:-mt-8 hidden">
              <Button size={"lg"} variant={"roam"}>
                Shop the new range
              </Button>
            </div>
          </div> */
}
