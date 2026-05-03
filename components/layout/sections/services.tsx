"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { siteCopy } from "@/components/layout/site-copy";
import Image from "next/image";

const workImages = [
  "https://www.topcollection.com.cn/u_file/2006/case/10/1a1ea8e60a.jpg.500x500.jpg",
  "https://www.topcollection.com.cn/u_file/2006/case/10/e915b5350b.jpg.500x500.jpg",
  "https://www.topcollection.com.cn/u_file/2006/case/10/6fafbd2ccc.jpg.500x500.jpg",
  "https://www.topcollection.com.cn/u_file/2006/case/10/b5ce9131f1.jpg.500x500.jpg",
  "https://www.topcollection.com.cn/u_file/2006/case/10/3a6a9a42b1.jpg.500x500.jpg",
];

export const ServicesSection = () => {
  const { language } = useLanguage();
  const copy = siteCopy[language].works;

  return (
    <section id="latest-work" className="bg-stone-950 py-24 text-white sm:py-32">
      <div className="container">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="mb-2 text-lg tracking-wider text-white/70">
              {copy.eyebrow}
            </h2>
            <h3 className="text-3xl font-bold md:text-4xl">{copy.title}</h3>
          </div>
          <p className="max-w-xl text-white/70">{copy.body}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {copy.items.map(({ title, label }, index) => (
            <div
              key={`${label}-${index}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-white/10"
            >
              <Image
                src={workImages[index]}
                alt={`${label} ${title}`}
                fill
                sizes="(min-width: 768px) 20vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="text-sm uppercase tracking-wider text-white/70">
                  {title}
                </div>
                <div className="text-lg font-bold">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
