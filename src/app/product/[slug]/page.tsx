import { prismaClient } from "@/lib/prisma";
import ProductsImages from "./components/productsImage";

interface ProductDetailsProps {
  params: {
    slug: string;
  };
}

const ProductDetails = async ({ params: { slug } }: ProductDetailsProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!product) return null;

  return (
    <div className="px-8 py-5">
      <ProductsImages imagesUrls={product.imageUrls} name={product.name} />
    </div>
  );
};

export default ProductDetails;
