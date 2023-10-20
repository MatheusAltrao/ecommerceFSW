"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductsImagesProps {
  name: string;
  imagesUrls: string[];
}

const ProductsImages = ({ name, imagesUrls }: ProductsImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imagesUrls[0]);

  const handleImageClick = (image: string) => {
    setCurrentImage(image);
  };

  return (
    <div className="flex flex-col">
      <div className="flex h-[380px] w-full items-center justify-center rounded bg-accent">
        <Image
          width={0}
          height={0}
          src={currentImage}
          alt={name}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4">
        {imagesUrls.map((image) => (
          <button
            onClick={() => handleImageClick(image)}
            key={image}
            className={`flex h-24 items-center justify-center rounded border  bg-accent transition-colors ${
              currentImage === image ? "border-primary" : "border-transparent"
            }`}
          >
            <Image
              src={image}
              alt={name}
              width={0}
              height={0}
              sizes="100vh"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductsImages;
