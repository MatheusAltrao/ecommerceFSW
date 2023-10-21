import { Badge } from "@/components/ui/badge";
import { CartContext } from "@/providers/cart";
import { ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";

const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <div className="p-4">
      <Badge
        variant="outline"
        className="  flex h-8 w-36 items-center justify-center gap-2 rounded-2xl border-2 border-primary uppercase"
      >
        Carrinho
        <ShoppingCartIcon size={18} />
      </Badge>
      <div>
        {products.map((product) => (
          <h1>{product.name}</h1>
        ))}
      </div>
    </div>
  );
};

export default Cart;
