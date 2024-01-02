import { DollarSign } from '../components/icons/dollarSign'
import { Location } from '../components/icons/location'
import { ManOnMotorcycle } from '../components/icons/manOnMotorcycle'
import { Timer } from '../components/icons/timer'

export default function Success() {
  return (
    <div className="w-screen px-40 py-20">
      <h1 className="text-yellow-dark font-baloo2 font-extrabold leading-[130%0] text-[2rem]">
        Uhu! Pedido confirmado
      </h1>
      <p className="text-base-subtitle font-roboto text-xl leading-[130%]">
        Agora é só aguardar que logo o café chegará até você
      </p>

      <div className="flex justify-between">
        <div className="border border-yellow-dark rounded-tr-[2.25rem] rounded-bl-[2.25rem] p-10 pr-24 w-max space-y-8 mt-10">
          <div className="flex items-center gap-3">
            <div className="bg-purple w-max h-max p-2 rounded-full flex justify-center items-center">
              <Location color="white" />
            </div>

            <div>
              <p className="text-base-text font-roboto leading-[130%]">
                Entrega em{' '}
                <span className="font-bold">
                  Rua João Daniel Martinelli, 102
                </span>
              </p>
              <p className="text-base-text font-roboto leading-[130%]">
                Farrapos - Porto Alegre, RS
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-yellow w-max h-max p-2 rounded-full flex justify-center items-center">
              <Timer />
            </div>

            <div>
              <p className="text-base-text font-roboto leading-[130%]">
                Previsão de entrega
              </p>
              <p className="text-base-text font-roboto leading-[130%] font-bold">
                20 min - 30 min
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-yellow-dark w-max h-max p-2 rounded-full flex justify-center items-center">
              <DollarSign color="white" />
            </div>

            <div>
              <p className="text-base-text font-roboto leading-[130%]">
                Pagamento na entrega
              </p>
              <p className="text-base-text font-roboto leading-[130%] font-bold">
                Cartão de crédito
              </p>
            </div>
          </div>
        </div>

        <ManOnMotorcycle />
      </div>
    </div>
  )
}
