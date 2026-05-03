"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { siteCopy } from "@/components/layout/site-copy";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const categoryAssets = [
  {
    image: "https://www.topcollection.com.cn/u_file/2006/photo/f31e86b898.jpg",
    href: "https://www.topcollection.com.cn/dinnerware_0035",
  },
  {
    image: "https://www.topcollection.com.cn/u_file/2006/photo/f566e6a34e.jpg",
    href: "https://www.topcollection.com.cn/cups-and-mugs_0036",
  },
  {
    image: "https://www.topcollection.com.cn/u_file/2006/photo/1192b690b0.jpg",
    href: "https://www.topcollection.com.cn/kitchen-accessories_0037",
  },
  {
    image: "https://www.topcollection.com.cn/u_file/2006/photo/4bd71485ef.jpeg",
    href: "https://www.topcollection.com.cn/servingware_0034",
  },
];

export const SponsorsSection = () => {
  const { language } = useLanguage();
  const copy = siteCopy[language].categories;

  return (
    <section id="products" className="container py-24 sm:py-32">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="mb-2 text-lg tracking-wider text-primary">
            {copy.eyebrow}
          </h2>
          <h3 className="text-3xl font-bold md:text-4xl">{copy.title}</h3>
        </div>
        <p className="max-w-2xl text-muted-foreground">{copy.body}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {copy.items.map(({ title, label, description }, index) => {
          const { image, href } = categoryAssets[index];

          return (
            <Card key={title} className="group overflow-hidden rounded-sm">
              <Link href={href} target="_blank">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={image}
                    alt={`${label} ${title}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="space-y-2 p-5">
                  <div className="text-sm font-medium uppercase tracking-wider text-primary">
                    {title}
                  </div>
                  <h4 className="text-xl font-bold">{label}</h4>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                </CardContent>
              </Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
