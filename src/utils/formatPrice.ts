export function formatPrice(amount: string | number) {
  const formatedBasePrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(amount));

  return formatedBasePrice;
}
