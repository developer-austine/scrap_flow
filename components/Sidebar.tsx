"use client";

import Pathname, { usePathname } from 'next/navigation'
import { Button, buttonVariants } from '@/components/ui/button'
import Logo from '@/components/logo'
import { CoinsIcon, HomeIcon, Layers2Icon, MenuIcon, ShieldCheckIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const routes = [
  {
     href: "",
    label:"Home",
    icon: HomeIcon,
  },
  {
    href: "workflows",
   label:"workflows",
   icon: Layers2Icon,
 },
 {
  href: "credentials",
 label:"Credentials",
 icon: ShieldCheckIcon,
},
{
  href: "billing",
 label:"Billing",
 icon: CoinsIcon,
},
]


function DesktopSidebar() {
  const pathname = usePathname();
  const activeRoute = routes.find(route => route.href.length > 0 && pathname.includes(route.href)
) || routes[0];
  return (
    <div className="hidden relative md:block min-w-[280px] max-w-[280px]  h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-fofreground border-r-2 border-separated">
      <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
        <Logo />
      </div>
      <div className="p-2">TODO CREDITS</div>
        <div className="flex flex-col p-2">
          {routes.map(route => (
            <Link key={route.href} href={route.href}
            className={
              buttonVariants({
                variant: activeRoute.href === route.href ?
                "sidebarActiveItem" :
                "sidebarItem"
              })
            }>
              <route.icon size={20} />
              {route.label}
            </Link>
          ))}
        </div>
     </div>
  )
}

export function MobileSidebar() {
  const [isOpen, setOpen] = useState(false)
  const pathname = usePathname();
  const activeRoute = routes.find(route => route.href.length > 0 && pathname.includes(route.href)
) || routes[0];


  return <div className="block border-separate bg-background md:hidden">
    <nav className="container flex items-center justify-between px-8">
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px] space-y-4" side={"left"}>
          <Logo />
          <div className="flex flex-col gap-1">
          {routes.map(route => (
            <Link key={route.href} href={route.href}
            className={
              buttonVariants({
                variant: activeRoute.href === route.href ?
                "sidebarActiveItem" :
                "sidebarItem"
              })}
              onClick={() => setOpen((prev) => !prev)}
            >
              <route.icon size={20} />
              {route.label}
            </Link>
          ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  </div>
}

export default DesktopSidebar;