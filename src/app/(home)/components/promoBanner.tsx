import Image from "next/image";

interface PromoBannerProps {
  src: string;
  alt: string;
}

const PromoBanner = ({ src, alt }: PromoBannerProps) => {
  return (
    <Image
      src={src}
      width={0}
      height={0}
      className="h-auto w-full rounded-lg object-cover lg:hidden"
      sizes="100vw"
      alt={alt}
      priority={true}
    />
  );
};

export default PromoBanner;
