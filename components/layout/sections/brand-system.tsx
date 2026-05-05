"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Factory, Globe2, Palette } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const copy = {
  zh: {
    eyebrow: "陶润体系",
    title: "同一个陶润，一端连接全球制造，一端表达生活美学",
    body:
      "陶润会官网介绍，陶润会隶属于陶润集团——世界一流反应釉陶瓷制造商。陶润集团传承自1905年瓷业先行者文俊铎，2003年创立以来，陶润日用陶瓷出口规模已达全国前3，产品远销50多个国家。",
    lines: [
      {
        icon: Globe2,
        name: "Top Collection",
        label: "外销与全球供应",
        href: "https://www.topcollection.com.cn/",
        image: "https://www.topcollection.com.cn/u_file/2411/photo/2ac065629c.jpg",
        body:
          "Top Collection Industrial Co.,Ltd 位于中国湖南醴陵，专注餐具、杯具、厨房配件和摆盘器皿等陶瓷产品，融合现代工艺与中国陶瓷文化。",
      },
      {
        icon: Palette,
        name: "陶润会 TR Gallery",
        label: "内销文创与生活艺术",
        href: "http://www.taorunhui.com/about.html",
        image: "/taorunhui/about-1.jpg",
        body:
          "陶润会于2015年始创于瓷都醴陵，秉承“传承，育人，连接”的使命，以“文创陶瓷引领者”为愿景，致力于成为世界级的生活陶瓷品牌。",
      },
    ],
    timeline: [
      { value: "1905", label: "文俊铎开启醴陵陶瓷新纪元" },
      { value: "2003", label: "陶润日用陶瓷体系创立" },
      { value: "2015", label: "陶润会始创于瓷都醴陵" },
      { value: "50+", label: "产品远销国家和地区" },
    ],
    button: "查看官方来源",
  },
  en: {
    eyebrow: "Taorun System",
    title:
      "One Taorun, connecting global manufacturing with lifestyle ceramics",
    body:
      "According to the official TR Gallery website, TR Gallery belongs to Taorun Group, a world-class reactive glaze ceramic manufacturer. Taorun traces its ceramic lineage to 1905 and has built a daily ceramic export system with products sold to more than 50 countries.",
    lines: [
      {
        icon: Globe2,
        name: "Top Collection",
        label: "Export and global supply",
        href: "https://www.topcollection.com.cn/",
        image: "https://www.topcollection.com.cn/u_file/2411/photo/2ac065629c.jpg",
        body:
          "Top Collection Industrial Co.,Ltd is based in Liling, Hunan, China. It specializes in dinnerware, cups and mugs, kitchen accessories, and servingware.",
      },
      {
        icon: Palette,
        name: "TR Gallery",
        label: "Domestic creative ceramics",
        href: "http://www.taorunhui.com/about.html",
        image: "/taorunhui/about-1.jpg",
        body:
          "TR Gallery was founded in Liling in 2015. Its official mission is inheritance, education, and connection, with the vision of becoming a world-class lifestyle ceramic brand.",
      },
    ],
    timeline: [
      { value: "1905", label: "Liling ceramic lineage begins" },
      { value: "2003", label: "Taorun daily ceramic system founded" },
      { value: "2015", label: "TR Gallery founded in Liling" },
      { value: "50+", label: "Countries and regions reached" },
    ],
    button: "View Official Source",
  },
} as const;

export const BrandSystemSection = () => {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <section id="brand-system" className="bg-muted/40 py-24 sm:py-32">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <Badge variant="outline" className="mb-4">
            <Factory className="mr-2 size-4" />
            {content.eyebrow}
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {content.title}
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            {content.body}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {content.lines.map((line) => {
            const Icon = line.icon;

            return (
              <Card
                key={line.name}
                className="overflow-hidden rounded-sm border-secondary bg-background"
              >
                <div className="grid h-full md:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative min-h-[260px] overflow-hidden bg-muted">
                    <Image
                      src={line.image}
                      alt={line.name}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="flex flex-col justify-between p-6">
                    <div>
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary px-3 py-1 text-sm text-muted-foreground">
                        <Icon className="size-4 text-primary" />
                        {line.label}
                      </div>
                      <h3 className="mb-3 text-2xl font-bold">{line.name}</h3>
                      <p className="leading-7 text-muted-foreground">
                        {line.body}
                      </p>
                    </div>

                    <Button asChild variant="secondary" className="mt-6 w-fit">
                      <Link href={line.href} target="_blank">
                        {content.button}
                        <ExternalLink className="ml-2 size-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.timeline.map((item) => (
            <Card key={item.value} className="rounded-sm bg-background">
              <CardContent className="p-5">
                <div className="text-2xl font-bold text-primary">
                  {item.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {item.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
