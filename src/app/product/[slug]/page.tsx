import ProductList from "@/components/ui/productList";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import ProductInfo from "./components/productInfo";
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
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <div className="px-8 pb-10 pt-5">
      <ProductsImages imagesUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />

      <div className="mt-10 ">
        <h3 className="mb-5 font-semibold">PRODUTOS RECOMENDADOS</h3>
        <ProductList products={product.category.products} />
      </div>
    </div>
  );
};

export default ProductDetails;
