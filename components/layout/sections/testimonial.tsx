"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "李明",
    userName: "产品经理",
    comment:
      "Next.js 加 Shadcn 的组合太顺手了。这个模板让我可以快速替换颜色、字体和图片，让页面贴合自己的品牌形象。",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "陈思雨",
    userName: "安全分析师",
    comment:
      "页面结构非常清晰，组件也很容易扩展。我们几乎不需要从零开始，就能搭出专业的产品介绍页。",
    rating: 4.8,
  },

  {
    image: "https://github.com/shadcn.png",
    name: "王子昂",
    userName: "技术负责人",
    comment:
      "模板的代码组织很干净，既适合快速上线，也方便后续接入真实业务数据和内部组件库。",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "赵一诺",
    userName: "数据科学家",
    comment:
      "我最喜欢它的响应式表现。无论在桌面还是手机上，重点内容都能保持良好的阅读节奏。",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "周安然",
    userName: "项目经理",
    comment:
      "我们用它快速完成了活动页初版，团队沟通成本明显降低，设计和开发都能对齐同一套结构。",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "林嘉禾",
    userName: "运维工程师",
    comment:
      "部署和定制都很省心。对于需要快速验证想法的小团队来说，这是很实用的起点。",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          客户评价
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          听听 1000+ 客户怎么说
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="用户头像"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
