import { getProductFromCart } from '../api/getProductFromCart'
import { orderCompleted } from '../api/orderCompleted'
import { ButtonDeleteProducts } from './buttonDeleteProducts'
import { ButtonReturnHomePage } from './buttonReturnHomePage'
import { CartCardCoffee } from './cartCardCoffee'
import { Cart } from './icons/cart'
import { EmojiSad } from './icons/emojiSad'
import { TotalPrice } from './totalPrice'
import { Button } from './ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer'

interface CallCartProps {
  amountProductInCart: number
}

export async function CallCart({ amountProductInCart }: CallCartProps) {
  const products = await getProductFromCart()

  async function handleOrderCompleted() {
    'use server'
    const cheackoutUrl = await orderCompleted()
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    window.location.href = cheackoutUrl!
  }

  return (
    <Drawer>
      <DrawerTrigger>
        <div className="flex items-center p-2 bg-yellow-light rounded-[0.375rem]">
          <div className="bg-yellow-dark absolute rounded-full p-1 px-2 -mt-10 ml-4 flex justify-center items-center">
            <p className="font-roboto text-xs font-bold leading-[130%] text-white">
              {amountProductInCart || 0}
            </p>
          </div>
          <Cart color="yellow" />
        </div>
      </DrawerTrigger>
      <DrawerContent className="ml-auto w-[30%] h-screen px-10">
        <DrawerHeader>
          <DrawerTitle className="text-center">Carrinho</DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col justify-between p-10 bg-base-card rounded-tr-md rounded-bl-md mt-[0.94rem] h-full">
          <div className="space-y-6">
            {products.length === 0 ? (
              <div className="w-full p-10 bg-yellow-light flex flex-col items-center gap-4">
                <h1 className="font-bold font-baloo2 text-yellow-dark">
                  Não possui nenhum produto no carrinho.
                </h1>
                <EmojiSad />
              </div>
            ) : null}
            {products.map((product) => (
              <CartCardCoffee
                id={product.id}
                imageUrl={product.imageUrl}
                amountCoffee={product.amount}
                key={product.id}
                name={product.name}
                price={product.original_price}
              />
            ))}
          </div>

          {products.length === 0 ? (
            <></>
          ) : (
            <>
              <TotalPrice />
            </>
          )}
        </div>
        <DrawerFooter>
          {products.length === 0 ? (
            <>
              <ButtonReturnHomePage />
              <ButtonDeleteProducts hidden />
            </>
          ) : (
            <>
              <Button
                onClick={handleOrderCompleted}
                variant="destructive"
                className="w-full rounded-md text-white font-roboto font-bold text-sm leading-[160%] uppercase bg-yellow py-3 px-2 mt-6 hover:bg-yellow-dark hover:transition-all"
              >
                Confirmar pedido
              </Button>
              <ButtonDeleteProducts hidden={false} />
            </>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
