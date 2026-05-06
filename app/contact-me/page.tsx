import Image from "next/image";

export const metadata = {
  title: "Contact Me - Top Collection",
};

export default function ContactMePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-white p-6">
      <Image
        src="/contact-avatar.png"
        alt="Contact avatar"
        width={382}
        height={465}
        priority
        className="h-auto w-[min(58vw,220px)] object-contain"
      />
      <p className="text-center text-2xl font-semibold leading-relaxed text-stone-950 md:text-4xl">
        2.0大楼2楼左转进门第二排第二个工位
      </p>
    </main>
  );
}
