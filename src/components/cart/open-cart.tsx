// import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { ShoppingCartIcon } from 'lucide-react';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-md  text-black transition-colors dark:border-neutral-700 dark:text-white">
      <ShoppingCartIcon
        className={clsx('w-6 h-6 transition-all ease-in-out hover:scale-110', className)}
      />

      {quantity ? (
        <div className="absolute right-0 top-2  -mt-2 h-4 w-4 rounded-full bg-red-600 text-[11px] font-medium text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
