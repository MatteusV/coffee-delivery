import { Box } from './icons/box'
import { Cart } from './icons/cart'
import { Cup } from './icons/cup'
import { Timer } from './icons/timer'

interface AdvamtageProps {
  text: string
  icon: string
}

export function Advantage({ icon, text }: AdvamtageProps) {
  switch (icon) {
    case 'cart':
      return (
        <div className="flex gap-3 items-center">
          <div className="p-2 bg-yellow-dark rounded-full w-min">
            <Cart color="white" />
          </div>
          <p className="text-base leading-[130%] font-roboto text-base-text">
            {text}
          </p>
        </div>
      )

    case 'box':
      return (
        <div className="flex gap-3 items-center">
          <div className="p-2 bg-base-text rounded-full w-min">
            <Box />
          </div>
          <p className="text-base leading-[130%] font-roboto text-base-text">
            {text}
          </p>
        </div>
      )

    case 'timer':
      return (
        <div className="flex gap-3 items-center">
          <div className="p-2 bg-yellow rounded-full w-min">
            <Timer />
          </div>
          <p className="text-base leading-[130%] font-roboto text-base-text">
            {text}
          </p>
        </div>
      )

    case 'cup':
      return (
        <div className="flex gap-3 items-center">
          <div className="p-2 bg-purple rounded-full w-min">
            <Cup />
          </div>
          <p className="text-base leading-[130%] font-roboto text-base-text">
            {text}
          </p>
        </div>
      )
  }
}
