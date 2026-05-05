import Image from "next/image";

export const metadata = {
  title: "Contact Me - Top Collection",
};

export default function ContactMePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-4">
      <Image
        src="/contact-me.png"
        alt="Contact Me"
        width={860}
        height={1289}
        priority
        className="h-auto max-h-[calc(100vh-2rem)] w-auto max-w-full object-contain"
      />
    </main>
  );
}
