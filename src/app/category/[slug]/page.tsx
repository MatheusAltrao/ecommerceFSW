import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/productitem";
import { CATEGORY_ICON } from "@/constansts/categoryIcons";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";

const CategoryProducts = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });

  if (!category) {
    return null;
  }

  return (
    <div className="px-8 py-5">
      <Badge
        variant="outline"
        className="  flex h-8 w-36 items-center justify-center gap-2 rounded-2xl border-2 border-primary px-3 py-2 uppercase"
      >
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {category.name}
      </Badge>

      <div className="mt-8 flex items-center justify-center  ">
        <div className="grid w-full grid-cols-2 gap-8">
          {category.products.map((product) => (
            <ProductItem
              key={product.id}
              product={computeProductTotalPrice(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
