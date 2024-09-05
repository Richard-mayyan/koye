// import { AddToCart } from 'components/cart/add-to-cart';
// import Price from 'components/price';
// import Prose from 'components/prose';
// import { Product } from 'lib/shopify/types';
import { Product } from '@/lib/shopify/types';
import { AddToCart } from '../cart/add-to-cart';
import Price from '../price';
import { VariantSelector } from './variant-selector';
import Prose from '../prose';
import { CheckCircleIcon, CheckIcon } from 'lucide-react';
import { AccordionProduct } from './AccordionProduct';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700 pt-10">
        <h1 className="mb-2 text-xl font-medium">{product.title}</h1>
       
      </div>
      <VariantSelector options={product.options} variants={product.variants} />
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}
      <div className='rounded-md p-4 bg-appyellow-foreground space-y-4'>
            <Price
            className='text-xl'
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            />
           <div className='space-x-2 flex items-center'>
              <CheckIcon className='h-4 w-4' />
              <p className='text-xs'>Taxes included</p>
           </div>

        <AddToCart product={product} />

      </div>

      <div className='mt-10'></div>

      <div className='pr-4 '>
        <AccordionProduct />
      </div>
   

      <div className='mt-10'></div>

      <div className='space-y-4'>
        <div className="flex space-x-2">
          <CheckCircleIcon className='w-4 h-4' />
          <p className='text-xs'>Shipping within 48 hours in mainland France and in European Union countries for products in stock.</p>
        </div>

        <div className="flex space-x-2">
          {/* <CheckCircleIcon className='w-4 h-4' /> */}
          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_40_3325)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.17527 1.96672C6.25732 2.42327 4.0095 3.44884 2.56046 4.9849C1.80262 5.78824 1.35659 6.63192 1.13646 7.67794C0.887318 8.86205 1.04586 9.9197 1.7146 11.5366L2.01639 12.2663L1.25825 13.029C0.841225 13.4484 0.5 13.8553 0.5 13.9329C0.5 14.0107 0.621093 14.2008 0.769007 14.3551L1.03801 14.636L1.89579 13.7822L2.75348 12.9284L3.22503 13.2467C3.83417 13.6578 4.8498 14.0082 5.66556 14.0888C6.54649 14.1759 7.59381 13.9427 8.6457 13.4253C9.35169 13.078 9.65288 12.8458 10.4834 12.0079C11.856 10.6232 12.5978 9.3043 13.132 7.29917C13.5223 5.83384 13.478 2.9152 13.0529 2.0902L12.9122 1.81702L11.4494 1.82844C10.645 1.8347 9.62159 1.89688 9.17527 1.96672ZM9.73841 2.91659C9.38328 2.96109 8.83563 3.05099 8.52152 3.11626L7.95033 3.23486V4.78483V6.3348L9.68874 4.59847C10.6449 3.64354 11.4272 2.85053 11.4272 2.83632C11.4272 2.78645 10.3783 2.83632 9.73841 2.91659ZM10.4834 5.1945L8.69745 6.98258H10.4526H12.2077L12.3107 6.46106C12.3672 6.17417 12.419 5.71602 12.4259 5.44284C12.4533 4.33841 12.4163 3.40642 12.345 3.40642C12.3034 3.40642 11.4658 4.21106 10.4834 5.1945ZM6.28056 3.76205C5.06586 4.2189 4.25089 4.72006 3.46831 5.49142C2.33368 6.60986 1.90891 7.65222 2.02523 9.03251C2.08136 9.69897 2.62126 11.4528 2.77026 11.4528C2.80652 11.4528 3.76434 10.5239 4.89877 9.38844L6.96142 7.3241L6.93431 5.42526L6.90728 3.52642L6.28056 3.76205ZM5.57775 10.1002L3.4552 12.2244L3.91563 12.4943C4.16894 12.6427 4.58805 12.8286 4.84702 12.9074C5.41464 13.0799 6.58513 13.0959 7.1742 12.9392C8.36308 12.6227 9.80695 11.5426 10.6821 10.3151C11.1593 9.64572 11.8245 8.3751 11.8245 8.13301C11.8245 7.99483 11.5762 7.97596 9.76235 7.97596H7.7003L5.57775 10.1002Z" fill="#6C6C85"/>
            </g>
            <defs>
            <clipPath id="clip0_40_3325">
            <rect width="14.0066" height="15" fill="white" transform="translate(0.5 0.625)"/>
            </clipPath>
            </defs>
          </svg>



          <p className='text-xs'>Pre-order items will ship 6 weeks after ordering.</p>
        </div>

        <div className="flex space-x-2">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_40_3329)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.37038 2.71399L0.881375 4.70318L0.878187 7.98827L0.875 11.2734L4.40216 13.2851C6.34212 14.3916 7.97684 15.2831 8.03497 15.2663C8.09309 15.2494 9.69097 14.3499 11.5859 13.2672L15.0312 11.2989L15.0304 8.00102L15.0295 4.70318L11.5362 2.71099C9.61484 1.61534 8.0015 0.720117 7.95106 0.721804C7.90062 0.723398 6.28934 1.61984 4.37038 2.71399ZM5.23438 3.3048C3.73906 4.15962 2.45956 4.89087 2.39103 4.92968C2.30872 4.97627 2.66844 5.2293 3.45059 5.67509L4.63484 6.34999L7.30147 4.64027C8.76809 3.69996 9.9365 2.90037 9.89806 2.86334C9.82363 2.7919 8.02962 1.74987 7.98153 1.75024C7.96588 1.75034 6.72969 2.4499 5.23438 3.3048ZM8.24347 5.12674C6.80469 6.05252 5.61163 6.82587 5.59231 6.84527C5.57291 6.86468 6.09209 7.18549 6.746 7.55815C7.76047 8.1363 7.96616 8.22162 8.14663 8.1394C8.45591 7.99849 13.4708 5.12552 13.5605 5.03787C13.6217 4.97796 11.0433 3.43005 10.8999 3.44055C10.8776 3.44215 9.68225 4.20096 8.24347 5.12674ZM1.83434 8.31724L1.85938 10.7762L4.625 12.3567C6.14609 13.226 7.42231 13.9374 7.46094 13.9374C7.49956 13.9375 7.53125 12.8457 7.53125 11.5114V9.08515L6.35984 8.41765C5.71559 8.05043 5.16716 7.75005 5.14109 7.75005C5.11503 7.75005 5.09375 8.12974 5.09375 8.5938V9.43755H4.625H4.15625L4.15409 8.28912L4.15203 7.14068L3.06838 6.5313C2.47241 6.19615 1.94525 5.90759 1.89706 5.89015C1.84363 5.87084 1.81916 6.82005 1.83434 8.31724ZM11.2141 7.45109L8.47503 9.01568L8.47194 11.4844C8.47016 12.8423 8.50447 13.9391 8.54816 13.9219C8.59184 13.9047 9.87856 13.1755 11.4075 12.3013L14.1875 10.7119V8.29352C14.1875 6.41815 14.1612 5.87637 14.0703 5.88077C14.0059 5.88396 12.7206 6.59055 11.2141 7.45109Z" fill="#6C6C85"/>
          </g>
          <defs>
          <clipPath id="clip0_40_3329">
          <rect width="15.2812" height="15" fill="white" transform="translate(0.5 0.625)"/>
          </clipPath>
          </defs>
        </svg>

          <p className='text-xs'>Delivery time is estimated at 5 - 7 days depending on the day of the order and the carrier's deadlines.</p>
        </div>
      </div>

      <div className='mt-10'></div>


    </>
  );
}
