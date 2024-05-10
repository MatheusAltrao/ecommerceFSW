import { ProductWithTotalPrice } from "@/helpers/product";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import Link from "next/link";
import DiscountBadge from "./discountBadge";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex w-full flex-col gap-4">
        <div className="relative flex h-[200px]  items-center justify-center rounded-2xl bg-accent">
          {product.discountPercentage > 0 && (
            <DiscountBadge className="absolute left-2 top-2">
              <p>{product.discountPercentage}%</p>
            </DiscountBadge>
          )}

          <Image
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            style={{
              objectFit: "contain",
            }}
            width={0}
            height={0}
            src={product.imageUrls[0]}
            alt={product.name}
            sizes="100vw"
          />
        </div>

        <div>
          <p className=" overflow-hidden  text-ellipsis whitespace-nowrap text-xs font-light">
            {product.name}
          </p>

          {product.discountPercentage > 0 && (
            <div className="my-1   ">
              <span className="font-semibold ">
                {" "}
                {formatPrice(product.totalPrice)}
              </span>
              <span className="ml-1 text-sm text-zinc-600 line-through ">
                {formatPrice(product.basePrice)}
              </span>
            </div>
          )}

          {product.discountPercentage == 0 && (
            <div className="my-1">
              <span className="font-semibold ">
                {formatPrice(product.totalPrice)}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
