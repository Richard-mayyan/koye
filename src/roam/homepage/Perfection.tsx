import Link from "next/link";
import React from "react";
import { config } from "../config";
import { buttonVariants } from "@/components/ui/button";
import clsx from "clsx";

type Props = {};

function Perfection({}: Props) {
  return (
    <div className="">
      <div className="bg-white py-20 px-10 mb-14">
        <div className="mx-auto text-black text-center space-y-4">
          <p className="text-4xl">Passez à la perfection,</p>
          <p className="text-4xl">Passez à {config.siteName}</p>

          <p className="text-md">All the care for down there</p>
          <Link
            href={"/search"}
            className={`${buttonVariants({
              variant: "roam",
              size: "lg",
            })} uppercase bg-primaryBg `}
          >
            DÉCOUVREZ {config.siteName}
          </Link>
        </div>
      </div>

      <div
        className={clsx(" w-full h-44", "")}
        style={{
          backgroundImage: `url('/flowerspath.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default Perfection;
