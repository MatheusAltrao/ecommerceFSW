import { prismaClient } from "@/lib/prisma";

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

  console.log(product);
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
};

export default ProductDetails;
