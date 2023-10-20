import { prismaClient } from "@/lib/prisma";
import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "./components/productList";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="px-8 py-5">
      <Image
        src="/images/banner-01.png"
        width={0}
        height={0}
        className="h-auto w-full object-cover"
        sizes="100vw"
        alt="55% de desconto"
        priority={true}
      />

      <div className="mt-8">
        <Categories />
      </div>

      <div className="mt-8">
        <h2 className="font-semibold uppercase">Ofertas</h2>
        <div className="mb-8 mt-5">
          <ProductList products={deals} />
        </div>
      </div>

      <Image
        src="/images/banner-02.png"
        width={0}
        height={0}
        className="h-auto w-full object-cover"
        sizes="100vw"
        alt="55% de desconto em mouses!"
        priority={true}
      />
    </div>
  );
}
