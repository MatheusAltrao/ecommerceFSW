import { prismaClient } from "@/lib/prisma";
import Categories from "./components/categories";
import ProductList from "./components/productList";
import PromoBanner from "./components/promoBanner";
import SectionTitle from "./components/sectionTitle";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  const headphones = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "headphones",
      },
    },
  });

  return (
    <div className="space-y-8 px-8 py-5">
      <PromoBanner src="/images/banner-01.png" alt="55% de desconto" />

      <div>
        <Categories />
      </div>

      <div>
        <SectionTitle title="Ofertas" />
        <div className="mb-8 mt-5">
          <ProductList products={deals} />
        </div>
      </div>

      <PromoBanner
        src="/images/banner-02.png"
        alt="55% de desconto em mouses!"
      />

      <div>
        <SectionTitle title="MOUSES" />
        <div className="mb-8 mt-5">
          <ProductList products={mouses} />
        </div>
      </div>

      <PromoBanner
        src="/images/banner-03.png"
        alt="20% de desconto em fones!"
      />

      <div>
        <SectionTitle title="headphones" />
        <div className="mb-8 mt-5">
          <ProductList products={headphones} />
        </div>
      </div>

      <div>
        <SectionTitle title="teclados" />
        <div className="mb-8 mt-5">
          <ProductList products={keyboards} />
        </div>
      </div>
    </div>
  );
}
