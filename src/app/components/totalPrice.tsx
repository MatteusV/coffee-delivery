import { getTotalPriceToCart } from '../api/getTotalPriceToCart'

export async function TotalPrice() {
  const totalPrice = await getTotalPriceToCart()

  const priceFormatted = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalPrice + 3.5)

  const totalPriceFormatted = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalPrice)
  return (
    <>
      <div className="mt-6">
        <div className="flex justify-between">
          <p>Total de itens</p>
          <p>{totalPriceFormatted}</p>
        </div>

        <div className="flex justify-between">
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </div>

        <div className="flex justify-between text-xl font-roboto font-bold leading-[130%] text-base-subtitle">
          <p>Total</p>
          <p>{priceFormatted}</p>
        </div>
      </div>

      <button
        type="submit"
        form="payment"
        className="w-full rounded-md text-white font-roboto font-bold text-sm leading-[160%] uppercase bg-yellow py-3 px-2 mt-6 hover:bg-yellow-dark hover:transition-all"
      >
        confirmar pedido
      </button>
    </>
  )
}
