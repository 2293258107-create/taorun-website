"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { siteCopy } from "@/components/layout/site-copy";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const productAssets = [
  {
    image:
      "https://www.topcollection.com.cn/u_file/2210/products/24/9a1d44d29d.jpg.500x500.jpg",
    href: "https://www.topcollection.com.cn/stoneware-dinnerware-p00193p1.html",
  },
  {
    image:
      "https://www.topcollection.com.cn/u_file/2210/products/24/fa4f80c988.jpg.500x500.jpg",
    href: "https://www.topcollection.com.cn/stoneware-dinnerware-p00192p1.html",
  },
  {
    image:
      "https://www.topcollection.com.cn/u_file/2210/products/24/a7b8d86c76.jpg.500x500.jpg",
    href: "https://www.topcollection.com.cn/stoneware-dinnerware-p00191p1.html",
  },
  {
    image:
      "https://www.topcollection.com.cn/u_file/2210/products/24/e8998e1555.jpg.500x500.jpg",
    href: "https://www.topcollection.com.cn/stoneware-dinnerware-p00190p1.html",
  },
  {
    image:
      "https://www.topcollection.com.cn/u_file/2006/products/10/d1c79b0845.jpg.500x500.jpg",
    href: "https://www.topcollection.com.cn/stoneware-dinnerware-p00176p1.html",
  },
  {
    image:
      "https://www.topcollection.com.cn/u_file/2006/products/10/e4cf72f8e1.jpg.500x500.jpg",
    href: "https://www.topcollection.com.cn/mug-p00118p1.html",
  },
  {
    image:
      "https://www.topcollection.com.cn/u_file/2006/products/04/aae29d9e69.jpg.500x500.jpg",
    href: "https://www.topcollection.com.cn/mug-p00096p1.html",
  },
  {
    image:
      "https://www.topcollection.com.cn/u_file/2006/products/04/c16c30a938.jpg.500x500.jpg",
    href: "https://www.topcollection.com.cn/stoneware-dinnerware-p00095p1.html",
  },
];

export const FeaturesSection = () => {
  const { language } = useLanguage();
  const copy = siteCopy[language].products;

  return (
    <section id="best-selling" className="container py-24 sm:py-32">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="mb-2 text-lg tracking-wider text-primary">
          {copy.eyebrow}
        </h2>
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">{copy.title}</h3>
        <p className="text-lg text-muted-foreground">{copy.body}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {copy.items.map(({ name, label }, index) => {
          const { image, href } = productAssets[index];

          return (
            <Card
              key={`${label}-${index}`}
              className="group overflow-hidden rounded-sm border-secondary bg-background"
            >
              <Link href={href} target="_blank">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={image}
                    alt={`${label} ${name}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="space-y-1 p-5">
                  <h4 className="font-bold">{label}</h4>
                  <p className="text-sm text-muted-foreground">{name}</p>
                </CardContent>
              </Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
