import { BenefitsSection } from "@/components/layout/sections/benefits";
import { BrandSystemSection } from "@/components/layout/sections/brand-system";
import { ChatWidget } from "@/components/layout/chat-widget";
import { ContactSection } from "@/components/layout/sections/contact";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TaorunhuiSection } from "@/components/layout/sections/taorunhui";

export const metadata = {
  title: "Taorun Ceramics - Top Collection 与陶润会",
  description:
    "陶润体系连接全球陶瓷制造、Top Collection 外销供应与陶润会生活艺术文创产品。",
  openGraph: {
    type: "website",
    url: "https://taorun-website.vercel.app/",
    title: "Taorun Ceramics - Top Collection 与陶润会",
    description:
      "陶润体系连接全球陶瓷制造、Top Collection 外销供应与陶润会生活艺术文创产品。",
    images: [
      {
        url: "https://www.topcollection.com.cn/u_file/2411/photo/65291bfbee.jpg",
        width: 1200,
        height: 630,
        alt: "陶润陶瓷产品展示",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://taorun-website.vercel.app/",
    title: "Taorun Ceramics - Top Collection 与陶润会",
    description:
      "陶润体系连接全球陶瓷制造、Top Collection 外销供应与陶润会生活艺术文创产品。",
    images: [
      "https://www.topcollection.com.cn/u_file/2411/photo/65291bfbee.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandSystemSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <TaorunhuiSection />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
      <ChatWidget />
    </>
  );
}
