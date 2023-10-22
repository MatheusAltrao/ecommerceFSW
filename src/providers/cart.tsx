"use client";

import { ProductWithTotalPrice } from "@/helpers/product";
import { ReactNode, createContext, useMemo, useState } from "react";

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  subTotal: number;
  total: number;
  totalDiscount: number;
  addProductToCart: (product: CartProduct) => void;
  decreaseproductQuantity: (productId: string) => void;
  increaseproductQuantity: (productId: string) => void;
  removeProducts: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  subTotal: 0,
  total: 0,
  totalDiscount: 0,
  addProductToCart: () => {},
  decreaseproductQuantity: () => {},
  increaseproductQuantity: () => {},
  removeProducts: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  /* 
      const formatedTotalPrice = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(product.totalPrice);
       */

  const subTotal = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.basePrice) * product.quantity;
    }, 0);
  }, [products]);

  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.totalPrice) * product.quantity;
    }, 0);
  }, [products]);

  const totalDiscount = total - subTotal;

  //se  produto ja estiver no carrinho, apenas aumente sua quatidade
  const addProductToCart = (product: CartProduct) => {
    // se o produto já estiver no carrinho, apenas aumente a sua quantidade
    const productIsAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (productIsAlreadyOnCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }

          return cartProduct;
        }),
      );

      return;
    }

    // se não, adicione o produto à lista
    setProducts((prev) => [...prev, product]);
  };

  const decreaseproductQuantity = (productId: string) => {
    //ao inves de deletar quando a quatidade for zero colocar um disable no button e excluir pela lixeira

    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          }

          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0),
    );
  };

  const increaseproductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }

        return cartProduct;
      }),
    );
  };

  const removeProducts = (productId: string) => {
    setProducts((prev) =>
      prev.filter((cartProduct) => cartProduct.id !== productId),
    );
  };

  return (
    <div>
      <CartContext.Provider
        value={{
          products,
          addProductToCart,
          decreaseproductQuantity,
          increaseproductQuantity,
          subTotal,
          total,
          totalDiscount,
          removeProducts,
          cartTotalPrice: 0,
          cartBasePrice: 0,
          cartTotalDiscount: 0,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartProvider;
