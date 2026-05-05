"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { siteCopy } from "@/components/layout/site-copy";
import { Separator } from "@/components/ui/separator";
import { Instagram, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const productLinks = [
  {
    label: "Dinnerware",
    href: "https://www.topcollection.com.cn/dinnerware_0035",
  },
  {
    label: "Cups and Mugs",
    href: "https://www.topcollection.com.cn/cups-and-mugs_0036",
  },
  {
    label: "Kitchen Accessories",
    href: "https://www.topcollection.com.cn/kitchen-accessories_0037",
  },
  {
    label: "Servingware",
    href: "https://www.topcollection.com.cn/servingware_0034",
  },
];

const aboutLinks = [
  {
    label: "About Us",
    href: "https://www.topcollection.com.cn/about-us-1.html",
  },
  {
    label: "Showroom",
    href: "https://www.topcollection.com.cn/showroom-a00014a1.html",
  },
  {
    label: "Company News",
    href: "https://www.topcollection.com.cn/article/company-news_c0001",
  },
  {
    label: "Trade Shows",
    href: "https://www.topcollection.com.cn/article/trade-shows_c0002",
  },
];

const partners = [
  "https://www.topcollection.com.cn/u_file/1508/photo/726f7eee99.png",
  "https://www.topcollection.com.cn/u_file/1508/photo/3304f75ccf.png",
  "https://www.topcollection.com.cn/u_file/1508/photo/ae11a46351.png",
  "https://www.topcollection.com.cn/u_file/1508/photo/03060945a3.png",
  "https://www.topcollection.com.cn/u_file/1508/photo/b2db463cea.png",
];

export const FooterSection = () => {
  const { language } = useLanguage();
  const copy = siteCopy[language].footer;

  return (
    <footer id="footer" className="border-t border-secondary bg-muted/30">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.3fr_0.8fr_0.8fr_1.2fr]">
          <div className="space-y-5">
            <Link href="#" className="flex items-center gap-4 font-bold">
              <span className="relative flex h-20 w-24 items-center justify-center overflow-hidden">
                <Image
                  src="/taorun-logo-transparent.png"
                  alt="Top Collection"
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </span>
              <span className="text-2xl">Top Collection</span>
            </Link>
            <p className="max-w-md leading-7 text-muted-foreground">
              {copy.description}
            </p>
            <Link
              href="https://instagram.com/topcollection_ceramics?utm_medium=copy_link"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Instagram className="size-4" />
              topcollection_ceramics
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold">{copy.products}</h3>
            {productLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold">{copy.about}</h3>
            {aboutLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-bold">{copy.service}</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>{copy.address}</p>
              <p className="flex items-center gap-2">
                <Phone className="size-4" />
                0731-2318 2077
              </p>
              <p>Fax: 0731-2318 2739</p>
              <p className="flex items-center gap-2">
                <Mail className="size-4" />
                trade@topcollection.com.cn
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">
              {copy.partners}
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              {partners.map((partner, index) => (
                <div
                  key={partner}
                  className="relative h-10 w-20 overflow-hidden rounded-sm bg-background"
                >
                  <Image
                    src={partner}
                    alt={`Top Collection partner ${index + 1}`}
                    fill
                    sizes="80px"
                    className="object-contain p-1"
                  />
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground">{copy.rights}</p>
        </div>
      </div>
    </footer>
  );
};
