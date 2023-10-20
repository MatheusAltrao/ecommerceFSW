import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const formatedTotalPrice = new Intl.NumberFormat("BRL", {
    style: "currency",
    currency: "BRL",
  }).format(product.totalPrice);

  const formatedBasePrice = new Intl.NumberFormat("BRL", {
    style: "currency",
    currency: "BRL",
  }).format(Number(product.basePrice));

  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex w-full flex-col gap-4">
        <div className="relative flex h-[200px]  items-center justify-center rounded-2xl bg-accent">
          {product.discountPercentage > 0 && (
            <div className=" absolute left-2 top-2 flex items-center justify-center gap-1 rounded-3xl bg-primary  px-2 font-semibold">
              <ArrowDownIcon size={16} />
              <p>{product.discountPercentage}%</p>
            </div>
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
              <span className="font-semibold ">{formatedTotalPrice}</span>
              <span className="ml-1 text-sm text-zinc-600 line-through ">
                {formatedBasePrice}
              </span>
            </div>
          )}

          {product.discountPercentage == 0 && (
            <div className="my-1">
              <span className="font-semibold ">{formatedBasePrice}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
