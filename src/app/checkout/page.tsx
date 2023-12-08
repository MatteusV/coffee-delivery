import { Location } from '../components/icons/location'

export default function Checkout() {
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

          <form action="" className="mt-8 flex flex-col gap-4">
            <input
              type="text"
              name="cep"
              id="cep"
              placeholder="CEP"
              className="rounded-[0.25rem] border border-base-button bg-base-input placeholder:font-roboto placeholder:text-sm placeholder:leading-[130%] placeholder:p-3 w-[12.5rem]"
            />

            <input
              type="text"
              name="rua"
              id="rua"
              placeholder="Rua"
              className="rounded-[0.25rem] border border-base-button bg-base-input placeholder:font-roboto placeholder:text-sm placeholder:leading-[130%] placeholder:p-3 flex-1"
            />

            <div className="flex gap-3">
              <input
                type="number"
                name="numero"
                id="numero"
                placeholder="Numero"
                className="rounded-[0.25rem] border border-base-button bg-base-input placeholder:font-roboto placeholder:text-sm placeholder:leading-[130%] placeholder:p-3 w-[12.5rem]"
              />

              <input
                type="text"
                name="complemento"
                id="complemento"
                placeholder="Complemento"
                className="rounded-[0.25rem] border border-base-button bg-base-input placeholder:font-roboto placeholder:text-sm placeholder:leading-[130%] placeholder:p-3 flex-1"
              />
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                name="bairro"
                id="bairro"
                placeholder="Bairro"
                className="rounded-[0.25rem] border border-base-button bg-base-input placeholder:font-roboto placeholder:text-sm placeholder:leading-[130%] placeholder:p-3 w-[12.5rem]"
              />

              <input
                type="text"
                name="cidade"
                id="cidade"
                placeholder="Cidade"
                className="rounded-[0.25rem] border border-base-button bg-base-input placeholder:font-roboto placeholder:text-sm placeholder:leading-[130%] placeholder:p-3 flex-1"
              />

              <input
                type="text"
                name="uf"
                id="uf"
                placeholder="UF"
                className="rounded-[0.25rem] border border-base-button bg-base-input placeholder:font-roboto placeholder:text-sm placeholder:leading-[130%] placeholder:p-3 w-[3.75rem]"
              />
            </div>
          </form>
        </div>
      </div>

      <div>
        <h1 className="text-base-subtitle font-baloo2 text-lg leading-[130% font-bold]">
          Cafés selecionados
        </h1>
      </div>
    </div>
  )
}
