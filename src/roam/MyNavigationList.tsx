"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { CardProp } from "./homepage/homepage"
import NewSlider, { SliderImgCmp } from "@/app/NewSliderCmp"
import { CarouselItem } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function MyNavigationList({items} : {items : CardProp[]}) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
  
       {Array(6).fill(0).map((v,index) => {
      return    <NavigationMenuItem className="mx-">
      <NavigationMenuTrigger className="text-secondBg bg-transparent">DEVICES</NavigationMenuTrigger>
      <NavigationMenuContent className="max-w-[1000px] px-4 pb-4">
        {/* <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"> */}

<NewSlider  cardProps={items}
          Label={
              <div className='w-full text-sm mb-10'>
              <p className='text-textColor font-semibold'>BESTSELLERS</p>
            </div>} 

          CustomContent={items.map((v,index) => {
            return  <CarouselItem key={index} className=" basis-1/4  overflow-hidden  ">
                       <SliderImgCmp handle={v.handle} src={v.img} className='h-[200px]' />
                      <div className={cn("",{
                      })}>
                              <p className='text-black text-2xl font-light   md:text-[10px]  flex truncate  mt-2 '>{v.label}
                            </p>
                            <p className='text-black text-md   md:text-[10px]  flex truncate  mt-8 '>50ml • Sensation • Micro-biome prebiotic<span className='hidden md:block'>-</span>  
                            </p>
                            <div className='bg-black h-[1px] mb-8'></div>

                            <Button  className='bg-textColor uppercase text-[10px] py-0 font-bold'>Add to cart</Button>
                      </div>
                  </CarouselItem>
            })}
        carouselClx={undefined} />

     
        {/* </ul> */}
      </NavigationMenuContent>
    </NavigationMenuItem>
      
    //   <li className='text-secondBg'>
    //   DEVICES
    //   </li>
    })}


     
     
        {/* <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
