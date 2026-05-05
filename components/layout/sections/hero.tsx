"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { siteCopy } from "@/components/layout/site-copy";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { language } = useLanguage();
  const copy = siteCopy[language].hero;
  const brandName = language === "zh" ? "陶润陶瓷" : "Taorun Ceramics";

  return (
    <section className="relative -mt-24 min-h-[760px] overflow-hidden bg-stone-950 text-white">
      <Image
        src="https://www.topcollection.com.cn/u_file/2411/photo/65291bfbee.jpg"
        alt={copy.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-75"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/45 to-stone-950/10" />

      <div className="container relative flex min-h-[760px] items-center pt-28">
        <div className="max-w-3xl space-y-8">
          <Badge
            variant="outline"
            className="border-white/30 bg-white/10 py-2 text-sm text-white backdrop-blur"
          >
            {copy.badge}
          </Badge>

          <div className="space-y-5">
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              {brandName}
              <span className="block text-2xl font-medium text-white/85 md:text-4xl">
                {copy.eyebrow}
              </span>
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              {copy.body}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="font-bold group/arrow">
              <Link href="#brand-system">
                {copy.primary}
                <ArrowRight className="ml-2 size-5 transition-transform group-hover/arrow:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-bold"
            >
              <Link href="#taorunhui">{copy.secondary}</Link>
            </Button>
          </div>

          <div className="grid max-w-xl grid-cols-3 gap-4 border-t border-white/20 pt-6 text-sm text-white/80">
            {copy.stats.map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold text-white">{value}</div>
                <div>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
