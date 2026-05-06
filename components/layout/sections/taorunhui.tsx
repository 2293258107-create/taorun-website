"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Brush, Coffee, Landmark, Sparkles, Store } from "lucide-react";
import Image from "next/image";

const copy = {
  zh: {
    eyebrow: "陶润会内销文创",
    title: "把陶瓷变成更有色彩的日常体验",
    body:
      "我们希望以文化创意为驱动力，通过陶瓷持续创造多彩的日常体验，点亮和启迪每个人的生活。",
    categories: [
      {
        icon: Sparkles,
        name: "新品",
        products: [
          {
            name: "雅颂",
            image: "/taorunhui/yasong.jpg",
            body:
              "溯盛唐之风，轻启千年风雅，将瑰丽的唐代美学融入现代生活。",
          },
          {
            name: "嘻嘻杯",
            image: "/taorunhui/xixi-cup.jpg",
            body:
              "萌趣硅胶杯盖，搭配玻璃吸管，纵享饮水新乐趣。多彩撞色设计，在日常喝水捕捉生活的快乐。",
          },
          {
            name: "手势杯 POSE杯",
            image: "/taorunhui/pose-cup.jpg",
            body:
              "灵感来自劳动手套，每个POSE代表打工人的每一种情绪，传递生活中的喜怒哀乐。",
          },
        ],
      },
      {
        icon: Coffee,
        name: "杯类",
        products: [
          {
            name: "自然调",
            image: "/taorunhui/natural-tone.jpg",
            body:
              "自然调系列从自然的艺术视野出发，以窑变釉的晕染，模仿山川湖海的景观魅力。",
          },
          {
            name: "阿卜萝计划",
            image: "/taorunhui/apollo.jpg",
            body:
              "致敬于向着无限宇宙追寻的热忱，以超酷前沿的电镀工艺展现未来科技感。",
          },
        ],
      },
      {
        icon: Landmark,
        name: "茶具与餐具",
        products: [
          {
            name: "任我行旅行茶具",
            image: "/taorunhui/travel-tea.jpg",
            body:
              "行天地之间，享逍遥茶事，茶器以现代美学诠释化繁为简。",
          },
          {
            name: "任方圆",
            image: "/taorunhui/renfangyuan.jpg",
            body:
              "一桌茶席，一处美景，往来之亲友，邂逅之过客，皆可品茶言欢。",
          },
          {
            name: "山水畔",
            image: "/taorunhui/shanshuipan.jpg",
            body:
              "枯山水意境融入茶器中，交相协调体悟自然，山水温润着时光的安宁。",
          },
          {
            name: "马卡龙二人食",
            image: "/taorunhui/macaron.jpg",
            body:
              "灵感来源于法式甜点马卡龙，釉色与器物图案相融，保持清新自然的雅致。",
          },
        ],
      },
    ],
    space: {
      eyebrow: "陶润会生活艺术中心",
      title: "以陶瓷为连接，汇聚时尚、设计、艺术与多元生活体验",
      body:
        "陶润会生活艺术中心是有趣的、年轻的、自然且共鸣的。这里包含情景展厅、文创陶瓷生活馆、陶艺体验馆、品牌馆和文化交流空间。",
      items: [
        "情景展厅：一窗一景，情景化探索陶瓷文化。",
        "文创陶瓷生活馆：各式陶瓷满足一站式选购需求。",
        "陶艺体验馆：陶艺体验、教学、研学、团建为一体。",
        "品牌馆：我的生活，我的色彩。",
      ],
    },
  },
  en: {
    eyebrow: "TR Gallery Domestic Creative Ceramics",
    title: "Turning ceramics into colorful everyday experiences",
    body:
      'With "My life, my color" as a brand concept, TR Gallery creates a freer and more personalized way of life expression through ceramics.',
    categories: [
      {
        icon: Sparkles,
        name: "New Products",
        products: [
          {
            name: "Ya Song",
            image: "/taorunhui/yasong.jpg",
            body:
              "Inspired by the style of the Tang Dynasty, bringing classical aesthetics into modern life.",
          },
          {
            name: "Xixi Cup",
            image: "/taorunhui/xixi-cup.jpg",
            body:
              "A playful silicone cup lid, glass straw, and colorful design bring joy to daily drinking.",
          },
          {
            name: "POSE Cup",
            image: "/taorunhui/pose-cup.jpg",
            body:
              "Inspired by work gloves, each pose expresses a mood from everyday working life.",
          },
        ],
      },
      {
        icon: Coffee,
        name: "Cups",
        products: [
          {
            name: "Natural Tone",
            image: "/taorunhui/natural-tone.jpg",
            body:
              "Inspired by natural textures and colors, using kiln-change glaze to echo mountains, rivers, lakes, and seas.",
          },
          {
            name: "Apollo Project",
            image: "/taorunhui/apollo.jpg",
            body:
              "A tribute to the passion for exploring the universe, using electroplating craft to express a futuristic visual language.",
          },
        ],
      },
      {
        icon: Landmark,
        name: "Tea Sets and Dinnerware",
        products: [
          {
            name: "Travel Tea Set",
            image: "/taorunhui/travel-tea.jpg",
            body:
              "A portable tea set that uses modern aesthetics to simplify tea moments on the road.",
          },
          {
            name: "Ren Fang Yuan",
            image: "/taorunhui/renfangyuan.jpg",
            body:
              "A tea table, a landscape, friends and guests sharing tea and conversation.",
          },
          {
            name: "Shanshui Pan",
            image: "/taorunhui/shanshuipan.jpg",
            body:
              "Tea ware that brings the imagery of dry landscape gardens into quiet daily time.",
          },
          {
            name: "Macaron",
            image: "/taorunhui/macaron.jpg",
            body:
              "Inspired by French macarons, the glaze and patterns keep a fresh and elegant feeling.",
          },
        ],
      },
    ],
    space: {
      eyebrow: "TR Gallery Lifestyle Art Center",
      title: "Connecting fashion, design, art, and lifestyle through ceramics",
      body:
        "The center is interesting, young, natural, and resonant, bringing together showroom scenes, a creative ceramic store, pottery experience area, brand hall, and cultural exchange space.",
      items: [
        "Scenario showroom: exploring ceramic culture through immersive scenes.",
        "Creative ceramic store: one-stop ceramic selection for daily life.",
        "Pottery experience: workshops, teaching, study trips, and team building.",
        "Brand hall: my life, my color.",
      ],
    },
  },
} as const;

export const TaorunhuiSection = () => {
  const { language } = useLanguage();
  const content = copy[language];
  const productCards = content.categories.flatMap((category) =>
    category.products.map((product) => ({
      ...product,
      category: category.name,
      Icon: category.icon,
    }))
  );

  return (
    <section id="taorunhui" className="container py-24 sm:py-32">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <h2 className="mb-2 text-lg tracking-wider text-primary">
            {content.eyebrow}
          </h2>
          <h3 className="text-3xl font-bold md:text-4xl">{content.title}</h3>
        </div>
        <p className="max-w-2xl text-muted-foreground">{content.body}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {productCards.slice(0, 8).map(({ name, body, image, category, Icon }) => (
          <Card key={name} className="group overflow-hidden rounded-sm">
            <div className="relative aspect-square overflow-hidden bg-muted">
              <Image
                src={image}
                alt={name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardContent className="space-y-3 p-5">
              <Badge variant="secondary" className="gap-1 rounded-full">
                <Icon className="size-3.5" />
                {category}
              </Badge>
              <h4 className="text-xl font-bold">{name}</h4>
              <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
                {body}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div
        id="space"
        className="mt-20 grid items-center gap-8 rounded-sm bg-stone-950 p-6 text-white md:grid-cols-[1fr_0.9fr] lg:p-10"
      >
        <div className="space-y-6">
          <Badge className="bg-white/10 text-white hover:bg-white/10">
            <Store className="mr-2 size-4" />
            {content.space.eyebrow}
          </Badge>
          <div>
            <h3 className="mb-4 text-3xl font-bold">{content.space.title}</h3>
            <p className="leading-8 text-white/70">{content.space.body}</p>
          </div>
          <div className="grid gap-3">
            {content.space.items.map((item) => (
              <div key={item} className="flex gap-3 text-sm text-white/80">
                <Brush className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-white/10 sm:translate-y-8">
            <Image
              src="/taorunhui/space-1.jpg"
              alt={content.space.eyebrow}
              fill
              sizes="(min-width: 768px) 25vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-white/10">
            <Image
              src="/taorunhui/space-2.jpg"
              alt={content.space.title}
              fill
              sizes="(min-width: 768px) 25vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
