import { getProductFromCart } from '../api/getProductFromCart'
import { CartCardCoffee } from '../components/cartCardCoffee'
import { Bank } from '../components/icons/bank'
import { CreditCard } from '../components/icons/creditCard'
import { DollarSign } from '../components/icons/dollarSign'
import { EmojiSad } from '../components/icons/emojiSad'
import { Location } from '../components/icons/location'
import { ButtonReturnHomePage } from './components/buttonReturnHomePage'

export default async function Checkout() {
  const products = await getProductFromCart()

  async function handleOrderConfirmed(data: FormData) {
    'use server'
    console.log(data)
  }
  return (
    <div className="flex justify-between px-40 mt-10">
      <div>
        <h1 className="text-base-subtitle font-baloo2 text-lg leading-[130% font-bold]">
          Complete seu pedido
        </h1>

        <div className="p-10 bg-base-card rounded-md mt-[0.94rem]">
          <div className="flex gap-2">
            <Location color="yellow" />

            <div>
              <h2 className="text-base-subtitle font-roboto leading-[130%]">
                Endereço de Entrega
              </h2>
              <p className="text-base-text font-roboto leading-[130%]">
                Informe o endereço onde deseja receber seu pedidoInforme o
                endereço onde deseja receber seu pedido
              </p>
            </div>
          </div>

          <form
            action={handleOrderConfirmed}
            name="payment"
            id="payment"
            className="mt-8 flex flex-col gap-4"
          >
            <input
              type="text"
              name="cep"
              id="cep"
              required
              placeholder="CEP"
              className="rounded-[0.25rem] border border-base-button bg-base-input placeholder:font-roboto placeholder:text-sm placeholder:leading-[130%] p-3 w-[12.5rem]"
            />

            <input
              type="text"
              name="rua"
              id="rua"
              required
              placeholder="Rua"
              className="rounded-[0.25rem] border border-base-button bg-base-input placeholder:font-roboto placeholder:text-sm placeholder:leading-[130%] p-3 flex-1"
            />

            <div className="flex gap-3">
              <input
                type="number"
                name="numero"
                id="numero"
                required
                placeholder="Numero"
                className="rounded-[0.25rem] border border-base-button bg-base-input placeholder:font-roboto placeholder:text-sm placeholder:leading-[130%] p-3 w-[12.5rem]"
              />

              <input
                type="text"
                name="complemento"
                id="complemento"
                placeholder="Complemento"
                className="rounded-[0.25rem] border border-base-button bg-base-input placeholder:font-roboto placeholder:text-sm placeholder:leading-[130%] p-3 flex-1"
              />
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                required
                name="bairro"
                id="bairro"
                placeholder="Bairro"
                className="rounded-[0.25rem] border border-base-button bg-base-input placeholder:font-roboto placeholder:text-sm placeholder:leading-[130%] p-3 w-[12.5rem]"
              />

              <input
                type="text"
                name="cidade"
                required
                id="cidade"
                placeholder="Cidade"
                className="rounded-[0.25rem] border border-base-button bg-base-input placeholder:font-roboto placeholder:text-sm placeholder:leading-[130%] p-3 flex-1"
              />

              <input
                type="text"
                name="uf"
                required
                id="uf"
                placeholder="UF"
                className="rounded-[0.25rem] border border-base-button bg-base-input placeholder:font-roboto placeholder:text-sm placeholder:leading-[130%] p-3 w-[3.75rem]"
              />
            </div>
          </form>
        </div>

        <div className="p-10 bg-base-card rounded-md mt-[0.94rem]">
          <div className="flex gap-2">
            <DollarSign />

            <div>
              <h2 className="text-base-subtitle font-roboto leading-[130%]">
                Pagamento
              </h2>
              <p className="text-base-text font-roboto leading-[130%]">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <input
              form="payment"
              type="radio"
              id="creditCard"
              name="paymentMethod"
              value="creditCard"
              className="hidden peer/creditCard"
              required
            />

            <label
              htmlFor="creditCard"
              className="uppercase flex items-center justify-center w-full gap-3 p-4 text-gray-500 bg-base-button border rounded-lg cursor-pointer peer-checked/creditCard:border-purple peer-checked/creditCard:bg-purple-light"
            >
              <CreditCard />
              cartão de crédito
            </label>

            <input
              form="payment"
              type="radio"
              id="debitCard"
              name="paymentMethod"
              value="debitCard"
              className="hidden peer/debitCard"
              required
            />
            <label
              htmlFor="debitCard"
              className="uppercase flex items-center justify-center w-full gap-3 p-4 text-gray-500 bg-base-button border rounded-lg cursor-pointer peer-checked/debitCard:border-purple peer-checked/debitCard:bg-purple-light"
            >
              <Bank />
              cartão de débito
            </label>

            <input
              form="payment"
              type="radio"
              id="money"
              name="paymentMethod"
              value="money"
              className="hidden peer/money"
              required
            />
            <label
              htmlFor="money"
              className="uppercase flex items-center justify-center w-full gap-3 p-4 text-gray-500 bg-base-button border rounded-lg cursor-pointer peer-checked/money:border-purple peer-checked/money:bg-purple-light"
            >
              <Bank />
              dinheiro
            </label>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-base-subtitle font-baloo2 text-lg leading-[130% font-bold]">
          Cafés selecionados
        </h1>

        <div className="p-10 bg-base-card rounded-tr-md rounded-bl-md mt-[0.94rem]">
          <div className="space-y-6">
            {products.length === 0 ? (
              <div className="w-full p-10 bg-yellow-light flex flex-col items-center gap-4">
                <h1 className="font-bold font-baloo2 text-yellow-dark underline underline-offset-2">
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

          {products ? (
            <>
              <ButtonReturnHomePage />
            </>
          ) : (
            <>
              <div className="mt-6">
                <div className="flex justify-between">
                  <p>Total de itens</p>
                  <p>R$ 29,70</p>
                </div>

                <div className="flex justify-between">
                  <p>Entrega</p>
                  <p>R$ 3,50</p>
                </div>

                <div className="flex justify-between text-xl font-roboto font-bold leading-[130%] text-base-subtitle">
                  <p>Total</p>
                  <p>R$ 33,20</p>
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
          )}
        </div>
      </div>
    </div>
  )
}
