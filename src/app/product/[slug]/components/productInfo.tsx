"use client";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discountBadge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const { addProductToCart } = useContext(CartContext);

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };

  const formatedTotalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.totalPrice);

  const formatedBasePrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(product.basePrice));

  const handleAddToCard = () => {
    addProductToCart({ ...product, quantity });
  };

  return (
    <div className=" py-5">
      <p className="text-sm font-light text-zinc-500">Novo | 100 vendidos</p>
      <h2 className="mt-1 text-lg">{product.name}</h2>
      <p className="text-sm font-light text-primary ">Disponível em estoque </p>

      <div className="mt-3">
        <div className=" flex items-center gap-2">
          <span className="text-xl font-semibold">{formatedTotalPrice}</span>
          {product.discountPercentage > 0 && (
            <DiscountBadge>
              <p>{product.discountPercentage}%</p>
            </DiscountBadge>
          )}
        </div>
        <p className=" text-sm text-zinc-500">
          de <span className="line-through ">{formatedBasePrice}</span>
        </p>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <Button
          onClick={handleDecreaseQuantityClick}
          className="h-10 w-10 p-0"
          variant="outline"
        >
          <ArrowLeftIcon size={18} />
        </Button>

        <span className="w-10 text-center">{quantity}</span>

        <Button
          onClick={handleIncreaseQuantityClick}
          className="h-10 w-10 p-0"
          variant="outline"
        >
          <ArrowRightIcon size={18} />
        </Button>
      </div>

      <div className="my-8">
        <h3 className="mb-2 font-semibold">Descrição</h3>

        <p className="text-sm text-zinc-500">{product.description}</p>
      </div>

      <Button
        onClick={handleAddToCard}
        className=" w-full rounded font-bold uppercase "
      >
        ADICIONAR AO CARRINHO
      </Button>

      <div className="mt-5 w-full rounded bg-accent p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <TruckIcon size={32} />
            </div>
            <div className="text-xs">
              <p>
                Entrega via <span className="font-semibold">FSPacket®</span>
              </p>
              <p className="text-primary brightness-110">
                Envio para <span className="font-semibold">todo Brasil</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Frete Grátis</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
