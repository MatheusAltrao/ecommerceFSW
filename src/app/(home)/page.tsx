"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-8 py-5">
      <Image
        src="/images/banner-01.png"
        width={0}
        height={0}
        className="h-auto w-full object-cover"
        sizes="100vw"
        alt="55% de desconto"
      />
    </div>
  );
}
