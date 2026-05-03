import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ChatWidget } from "@/components/layout/chat-widget";
import { ContactSection } from "@/components/layout/sections/contact";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";

export const metadata = {
  title: "Liling Top Collection - 陶瓷产品与反应釉工艺",
  description:
    "Top Collection 专注于餐具、杯具、厨房配件和摆盘器皿等陶瓷产品制造。",
  openGraph: {
    type: "website",
    url: "https://www.topcollection.com.cn/",
    title: "Liling Top Collection - 陶瓷产品与反应釉工艺",
    description:
      "Top Collection 专注于餐具、杯具、厨房配件和摆盘器皿等陶瓷产品制造。",
    images: [
      {
        url: "https://www.topcollection.com.cn/u_file/2411/photo/65291bfbee.jpg",
        width: 1200,
        height: 630,
        alt: "Top Collection 陶瓷产品展示",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.topcollection.com.cn/",
    title: "Liling Top Collection - 陶瓷产品与反应釉工艺",
    description:
      "Top Collection 专注于餐具、杯具、厨房配件和摆盘器皿等陶瓷产品制造。",
    images: [
      "https://www.topcollection.com.cn/u_file/2411/photo/65291bfbee.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
      <ChatWidget />
    </>
  );
}
