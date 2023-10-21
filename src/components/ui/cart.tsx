import { Badge } from "@/components/ui/badge";
import { computeProductTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";
import CartItem from "./cartItem";

const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <div>
      <Badge
        variant="outline"
        className="  flex h-8 w-36 items-center justify-center gap-2 rounded-2xl border-2 border-primary uppercase"
      >
        Carrinho
        <ShoppingCartIcon size={18} />
      </Badge>
      <div className="scrollbar mt-8 max-h-[50vh] space-y-4 overflow-y-auto  p-1">
        {products.map((product) => (
          <CartItem product={computeProductTotalPrice(product as any) as any} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
