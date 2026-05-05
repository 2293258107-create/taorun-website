"use client";

import { ExternalLink, Globe2, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLanguage } from "@/components/layout/language-provider";
import { siteCopy } from "@/components/layout/site-copy";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const productCategoryLinks = ["#products", "#products", "#products"];

const Logo = () => (
  <Link href="/" className="flex shrink-0 items-center gap-3 font-bold">
    <span className="relative flex h-14 w-16 items-center justify-center overflow-hidden">
      <Image
        src="/taorun-logo-transparent.png"
        alt="Top Collection"
        fill
        sizes="64px"
        className="object-contain"
        priority
      />
    </span>
    <span className="hidden leading-tight sm:block">
      Top Collection
      <span className="block text-xs font-normal text-muted-foreground">
        Liling Ceramics
      </span>
    </span>
  </Link>
);

const LanguageToggle = ({ className = "" }: { className?: string }) => {
  const { language, toggleLanguage } = useLanguage();
  const copy = siteCopy[language].nav;

  return (
    <Button
      type="button"
      size="sm"
      variant="outline"
      onClick={toggleLanguage}
      aria-label={copy.languageLabel}
      className={className}
    >
      <Globe2 className="mr-2 size-4" />
      {copy.languageButton}
    </Button>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { language } = useLanguage();
  const copy = siteCopy[language].nav;
  const routeList = [
    {
      href: "#brand-system",
      label: language === "zh" ? "陶润体系" : "Taorun System",
    },
    {
      href: "#products",
      label: language === "zh" ? "外销产品" : "Export Lines",
    },
    {
      href: "#taorunhui",
      label: language === "zh" ? "内销文创" : "TR Gallery",
    },
    { href: "#contact", label: copy.contact },
  ];

  return (
    <header className="sticky top-5 z-40 mx-auto flex h-16 w-[92%] max-w-screen-xl items-center justify-between rounded-sm border border-secondary bg-background/95 px-3 shadow-sm backdrop-blur">
      <Logo />

      <div className="flex items-center gap-2 lg:hidden">
        <LanguageToggle className="px-3" />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label={copy.openMenu}>
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between bg-background"
          >
            <div>
              <SheetHeader className="mb-4">
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                <Button
                  onClick={() => setIsOpen(false)}
                  asChild
                  variant="ghost"
                  className="justify-start text-base"
                >
                  <Link href="#products">{copy.productLink}</Link>
                </Button>
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col items-start justify-start sm:flex-col">
              <Separator className="mb-2" />
              <Button asChild className="w-full justify-start">
                <Link href="mailto:trade@topcollection.com.cn">
                  {copy.inquiry}
                </Link>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-background text-base">
              {copy.product}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[620px] grid-cols-[220px_1fr] gap-5 p-4">
                <div className="relative min-h-[220px] overflow-hidden rounded-sm">
                  <Image
                    src="https://www.topcollection.com.cn/u_file/2006/photo/f31e86b898.jpg"
                    alt="Top Collection dinnerware category"
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
                <ul className="flex flex-col gap-2">
                  {copy.categories.map(({ title, description }, index) => (
                    <li
                      key={title}
                      className="rounded-sm p-3 text-sm hover:bg-muted"
                    >
                      <Link href={productCategoryLinks[index]}>
                        <p className="mb-1 font-semibold leading-none text-foreground">
                          {title}
                        </p>
                        <p className="line-clamp-2 text-muted-foreground">
                          {description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="px-3 text-base">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden items-center gap-2 lg:flex">
        <Button asChild size="sm" variant="outline">
          <Link href="https://www.topcollection.com.cn/" target="_blank">
            Top Collection
            <ExternalLink className="ml-2 size-4" />
          </Link>
        </Button>
        <Button asChild size="sm" variant="outline">
          <Link href="http://www.taorunhui.com/" target="_blank">
            {language === "zh" ? "陶润会" : "TR Gallery"}
            <ExternalLink className="ml-2 size-4" />
          </Link>
        </Button>
        <LanguageToggle />
      </div>
    </header>
  );
};
