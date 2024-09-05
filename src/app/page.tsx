import { Button } from "@/components/ui/button";
import { ShoppingBagIcon, UserIcon } from "lucide-react";
import SliderPart from "./SliderPart";
import ImgAndTe from "./ImgAndTe";
import { cn } from "@/lib/utils";
import Footer from "./footer";
import Link from "next/link";
import CartModal from "@/components/cart/modal";
import { defaultSort, IMG_URL, IMG_URL2, IMG_URL_MODEL, sorting } from "@/lib/constants";
import { getProducts } from "@/lib/shopify";

// export const metadata = {
//   description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
//   openGraph: {
//     type: 'website'
//   }
// };

// export const PALETTE = {
//   yellow : "#B59C77"
// }
async function Page({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {

  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.length > 1 ? 'results' : 'result';

  return (
    <>
     <div className="pb-2  bg-appyellow">
      <h1 className="text-center text-white text-3xl mb-2">TIMELESS,ELEGANT</h1>
      <h1 className="text-center text-white text-[10px]">FOR PARISIAN WOMEN OF THE WORLD</h1>
    </div>

    <div 
    style={{backgroundImage : `url('${IMG_URL}')`,backgroundSize : "cover",backgroundPosition : "center"}}
    className="h-[400px] flex justify-center items-end">

        <Button variant={"outline"} className="mb-10 text-[8px]">DISCOVER THE NEW COLLECTION</Button>

    </div>


    <div className="mt-10"></div>

    <div className=" px-2 md:px-20   mx-auto">
      <SliderPart products={products} />
    </div>

    <div className="mt-10"></div>
    <ImgAndTe isEven={false}> 
        <div className="">
              <h1 className="text-2xl">The Muse</h1>
              <p className="text-[10px] my-2">With “La Muse,” each piece is an ode to the contemporary woman—her strength, her elegance, and her ability to inspire and move. This collection also celebrates each woman’s ongoing journey toward her own inner muse.</p>
              <Button variant={"outline"} className="text-[8px] text-black mt-6">DISCOVER THE MUSE</Button>
          </div>
    </ImgAndTe>


    <div className="mt-10"></div>

    <div className="max-w-[80%] mx-auto">
      <div className="md:flex items-center  ">
        <div className="w-1/3  ">
            <div className="w-fit   relative ">
                <div className="px-2">
                  <div 
                    style={{backgroundImage : `url('${IMG_URL}')`,backgroundSize : "cover",backgroundPosition : "center"}}
                    className="h-[200px]  w-44 flex justify-center items-end border border-appyellow">
                  </div>
                </div>

                <div 
                  style={{backgroundImage : `url('${IMG_URL_MODEL}')`,backgroundSize : "cover",backgroundPosition : "center"}}
                  className="h-[150px] absolute -bottom-[20%] left-[50%] w-32 flex justify-center items-end border border-appyellow">
                </div>

                <div 
                  style={{backgroundImage : `url('${IMG_URL2}')`,backgroundSize : "cover",backgroundPosition : "center"}}
                  className="h-[100px] absolute  -bottom-[45%] w-20 flex justify-center items-end border border-appyellow">
                </div> 
                
              </div>
        </div>
        <div className="w-1/3 "></div>

        <div className="mt-40 md:mt-0 max-w-3xl">
          <h1 className="text-2xl "><span className="uppercase">KÔYé</span> commits </h1>
          <p className="text-[12px]  mt-6 text-muted-foreground">
          KÔYÉ is not just a fashion brand; it is an embodiment of ethical principles and a sustainable vision. Each piece reflects a deep commitment to responsible practices, demonstrating a harmonious fusion of style and conscience. KÔYÉ is for the modern woman, proud of her choices and seeking meaning in every purchase.
          Collection
          </p>
        </div>
      </div>


      <div className="mx-auto mt-36">
        <SliderPart products={products} />
      </div>
    </div>


    <div className="mt-10"></div>
    <ImgAndTe isEven={true} >
      <div className="">
            <h1 className="text-2xl">The First Collection</h1>
            <p className="text-[10px] my-2">A true tribute to the Parisian woman, this collection embodies the free, determined and elegant spirit of those who dare to defy conventions to leave their mark. Each piece is a chapter in this story, blending timeless refinement with contemporary audacity.</p>
            <Button variant={"outline"} className="text-[8px] mt-6 text-black">DISCOVER THE COLLECTION</Button>
        </div>
    </ImgAndTe>

    <div className="mt-10"></div>

    <div className="grid md:grid-cols-3 gap-4 px-10 mx-auto py-20">
      {[1,2,3].map((v,index) => {
        return <div className={cn("",{
          "mt-10" : index == 1
        })}>
            <div className="h-[300px]  object-cover rounded-lg border " 
                style={{backgroundImage : `url('${IMG_URL_MODEL}')`,backgroundSize : "cover",backgroundPosition : "center",backgroundRepeat :"no-repeat"}}
            > 
            </div>
             <p className=' my-2'>PAYLERA - $232.00</p>
             <p className="text-[10px]">After about 35 years of periods, the menopause
             comes along and puts a welcomed stop to the…</p>
             <a href=""  className="text-xs text-appyellow  mt-4">READ MORE</a>
        </div>
      })}
    </div>







      {/* <ThreeItemGrid />
      <Carousel />
      <Footer /> */}
    </>
  );
}

export default Page