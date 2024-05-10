import { CartContext, CartProduct } from "@/providers/cart";
import { formatPrice } from "@/utils/formatPrice";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import { Button } from "./button";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  const { decreaseproductQuantity, increaseproductQuantity, removeProducts } =
    useContext(CartContext);

  const handleDecreaseProduct = () => {
    decreaseproductQuantity(product.id);
  };

  const handleIncreaseproductQuantity = () => {
    increaseproductQuantity(product.id);
  };

  const handleRemoveProducts = () => {
    removeProducts(product.id);
  };

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            alt={product.name}
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
          />
        </div>
      </div>

      <div className="flex h-full flex-1 flex-col">
        <div className="flex flex-col">
          <p className="text-[10px]">{product.name}</p>

          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">
              {formatPrice(product.totalPrice)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-75">
                {formatPrice(product.basePrice)}
              </p>
            )}
          </div>
        </div>

        <div className=" mt-1 flex items-center gap-4">
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8"
            onClick={handleDecreaseProduct}
          >
            <ArrowLeftIcon size={18} />
          </Button>

          <span className="text-xs">{product.quantity}</span>

          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8"
            onClick={handleIncreaseproductQuantity}
          >
            <ArrowRightIcon size={18} />
          </Button>
        </div>
      </div>

      <div>
        <Button
          size="icon"
          variant="outline"
          className="h-8 w-8 transition-colors hover:text-red-500"
          onClick={handleRemoveProducts}
        >
          <TrashIcon size={18} />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
