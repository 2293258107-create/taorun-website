import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "免费版",
    popular: 0,
    price: 0,
    description:
      "适合个人项目和早期想法验证，快速体验核心能力。",
    buttonText: "免费开始",
    benefitList: [
      "1 名团队成员",
      "1 GB 存储空间",
      "最多 2 个页面",
      "社区支持",
      "AI 辅助",
    ],
  },
  {
    title: "进阶版",
    popular: 1,
    price: 45,
    description:
      "适合正在增长的小团队，覆盖更多页面和协作需求。",
    buttonText: "立即升级",
    benefitList: [
      "4 名团队成员",
      "8 GB 存储空间",
      "最多 6 个页面",
      "优先支持",
      "AI 辅助",
    ],
  },
  {
    title: "企业版",
    popular: 0,
    price: 120,
    description:
      "为成熟团队和复杂业务提供更高配额与专属支持。",
    buttonText: "联系我们",
    benefitList: [
      "10 名团队成员",
      "20 GB 存储空间",
      "最多 10 个页面",
      "电话与邮件支持",
      "AI 辅助",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        价格方案
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        畅享完整能力
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        选择适合当前阶段的方案，从个人验证到团队增长都能平滑升级。
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground"> / 月</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
