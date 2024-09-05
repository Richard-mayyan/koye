import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// import { GridTileImage } from 'components/grid/tile';
// import Footer from 'components/layout/footer';
// import { Gallery } from 'components/product/gallery';
// import { ProductProvider } from 'components/product/product-context';
// import { ProductDescription } from 'components/product/product-description';
// import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
// import { getProduct, getProductRecommendations } from 'lib/shopify';
// import { Image } from 'lib/shopify/types';


import Link from 'next/link';
import { Suspense } from 'react';
import { GridTileImage } from '@/components/grid/tile';
import Footer from '@/app/footer';
import { Gallery } from '@/components/product/gallery';
import { ProductProvider } from '@/components/product/product-context';
import { ProductDescription } from '@/components/product/product-description';
import { HIDDEN_PRODUCT_TAG } from '@/lib/constants';
import { getProduct, getProductRecommendations } from '@/lib/shopify';
import { Image } from '@/lib/shopify/types';
import SliderPart from '@/app/SliderPart';


export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);


  

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);
  if (!product) return notFound();

  const relatedProducts = await getProductRecommendations(product.id);
  if (!relatedProducts.length) return null;


  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <ProductProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="pb-2  bg-appyellow">
      </div>
      <div className="mx-auto max-w-screen-2xl ">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white  lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
          <div className=" w-1/2 bg-green-700 ">
            <Suspense
              fallback={
                <div className="relative aspect-square h-full  w-full overflow-hidden" />
              }
            >
              <div className='bg-yellow-600 h-full'>
                <Gallery
                  images={product.images.slice(0, 5).map((image: Image) => ({
                    src: image.url,
                    altText: image.altText
                  }))}
                />
              </div>
            </Suspense>
          </div>

          <div className="w-1/2 ">
            <Suspense fallback={null}>
              <ProductDescription product={product} />
            </Suspense>
          </div>
        </div>
        
        {/* <RelatedProducts id={product.id} /> */}
        <div className='md:w-[80%] mx-auto my-24'>
            <SliderPart products={relatedProducts} />
        </div>

      </div>
    </ProductProvider>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);
  if (!relatedProducts.length) return null;

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="flex w-full gap-4 overflow-x-auto pt-1">
        {relatedProducts.map((product) => (
          <li
            key={product.handle}
            className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Link
              className="relative h-full w-full"
              href={`/product/${product.handle}`}
              prefetch={true}
            >
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
