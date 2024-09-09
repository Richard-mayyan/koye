import Grid from '@/components/grid';
import ProductGridItems from '@/components/product-grid-items';
import { defaultSort, sorting } from '@/lib/constants';
import { getCollection, getCollectionProducts, getCollections } from '@/lib/shopify';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params
}: {
  params: { collection: string };
}): Promise<Metadata> {
  const collection = await getCollection(params.collection);

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description || collection.description || `${collection.title} products`
  };
}

export default async function CategoryPage({
  params,
  searchParams
}: {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getCollectionProducts({ collection: params.collection, sortKey, reverse });

  const collections = await getCollections();


  return (
    <section className=' py-10'>
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <div>
        <div className="pb-2  bg-primaryBg-augmented ">
            <div className='px-4  mx-auto py-10'>
                <h1 className=" text-white text-5xl italic mb-4">{params.collection}</h1>
            </div>
        </div>

        <div className='mt-20'></div>

        <div className='px-4 mx-auto '>
            <div className='mb-5'>
                <p>SHOP</p>
                <div className='h-[2px] bg-appyellow'></div>
            </div>


            <div className='flex space-x-6 mb-10'>
                {collections.map((v,index) => {
                    return <Link href={"/search/"+v.handle}>
                    <p className={cn("text-lg hover:text-textColor cursor-pointer transition ease-in-out duration-150",{
                        "text-textColor" : params.collection.toLowerCase() == v.title.toLowerCase()
                        // "text-textColor" : pathname.includes(v.title)
                    })} key={index}>{v.title}</p>
                    </Link>
                })}
            </div>

      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
      

            {/* <div className="grid grid-cols-3 gap-2">

            </div> */}
        </div>
    </div>
      )}
    </section>
  );
}
