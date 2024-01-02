'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Less } from './icons/less'
import { Plus } from './icons/plus'
import { Trash } from './icons/trash'
import { deleteProductFromCart } from '../api/deleteProductFromCart'

interface CardCoffeeProps {
  amountCoffee: number
  name: string
  price: number
  imageUrl: string
  id: string
}
export function CartCardCoffee({
  amountCoffee,
  imageUrl,
  name,
  price,
  id,
}: CardCoffeeProps) {
  const [amount, setAmount] = useState(amountCoffee)

  return (
    <div className="flex gap-5 pb-6 border-b border-base-button">
      <Image
        src={imageUrl}
        width={64}
        height={64}
        alt=""
        className="w-16 h-16"
      />

      <div>
        <h1>{name}</h1>

        <div className="flex gap-1">
          <div className="p-2 flex justify-between items-center gap-3 bg-base-button rounded-[0.375rem]">
            <button
              className={`${amount === 1 ? 'disabled' : ''}`}
              disabled={amount === 1}
              onClick={() => {
                setAmount((state) => Math.min(10, Math.max(1, state - 1)))
              }}
            >
              <Less />
            </button>
            <span className="font-roboto leading-[130%] text-base-title">
              {amount}
            </span>
            <button
              className={`${amount === 10 ? 'disabled' : ''}`}
              disabled={amount === 10}
              onClick={() => {
                setAmount((state) => Math.min(10, Math.max(1, state + 1)))
              }}
            >
              <Plus />
            </button>
          </div>

          <button
            onClick={() => {
              deleteProductFromCart(id)
            }}
            className="uppercase p-2 flex justify-between items-center gap-1 bg-base-button rounded-[0.375rem] text-xs leading-[160%] font-roboto text-base-text"
          >
            <Trash />
            remover
          </button>
        </div>
      </div>

      <p className="font-roboto font-bold text-base-text leading-[130%]">
        R$ {price}
      </p>
    </div>
  )
}
