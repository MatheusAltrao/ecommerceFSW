import { Badge } from "@/components/ui/badge";
import { computeProductTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";
import { Button } from "./button";
import CartItem from "./cartItem";

const Cart = () => {
  const { products, total, subTotal, totalDiscount } = useContext(CartContext);

  const formatedSubtotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(subTotal);

  const formatedTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);

  const formatedTotalDiscount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalDiscount);

  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <Badge
          variant="outline"
          className="  flex h-8 w-36 items-center justify-center gap-2 rounded-2xl border-2 border-primary uppercase"
        >
          Carrinho
          <ShoppingCartIcon size={18} />
        </Badge>
        <div
          className="scrollbar mt-8  h-[60vh] space-y-4 overflow-hidden 
        overflow-y-auto   p-1"
        >
          {products.length > 0 ? (
            products.map((product) => (
              <CartItem
                product={computeProductTotalPrice(product as any) as any}
              />
            ))
          ) : (
            <p className="text-zinc-500">
              Você ainda não tem nenhum item no carrinho, boas compras!
            </p>
          )}
        </div>
      </div>
      {products.length > 0 && (
        <div className="mt-4 flex flex-col items-center gap-2">
          <div className="separator" />

          <div className="flex w-full items-center justify-between">
            <p className="text-sm font-light ">Subtotal</p>
            <p className="text-sm font-light ">{formatedSubtotal}</p>
          </div>

          <div className="separator" />

          <div className="flex w-full items-center justify-between">
            <p className="text-sm font-light ">Entrega</p>
            <p className="text-sm font-light ">GRÁTIS</p>
          </div>

          <div className="separator" />

          <div className="flex w-full items-center justify-between">
            <p className="text-sm font-light ">Descontos</p>
            <p className="text-sm font-light ">{formatedTotalDiscount}</p>
          </div>

          <div className="separator" />

          <div className="flex w-full items-center justify-between">
            <p className=" font-semibold ">Total</p>
            <p className=" font-semibold ">{formatedTotal}</p>
          </div>

          <Button className="mt-8 w-full">FINALIZAR COMPRA</Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
