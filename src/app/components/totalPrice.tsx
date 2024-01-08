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
    </>
  )
}
