'use client'
import Image from 'next/image'
import { useState } from 'react'

import { insertProductToCart } from '../api/insertProcutToCart'
import { Cart } from './icons/cart'
import { Less } from './icons/less'
import { Plus } from './icons/plus'

interface CardCoffeeProps {
  image: string
  title: string
  subtitle: string
  price: number
  id: string
}

export function CardCoffee({
  image,
  price,
  subtitle,
  title,
  id,
}: CardCoffeeProps) {
  const [amount, setAmount] = useState(1)

  const priceFormatted = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(price * amount)

  return (
    <div className="flex flex-col items-center px-5 bg-base-card w-64 h-[19.375rem] rounded-tl-[0.375rem] rounded-tr-[2.25rem] rounded-br-[0.375rem] rounded-bl-[2.25rem]">
      <Image
        src={image}
        width={120}
        height={120}
        alt=""
        className="w-[7.5rem] h-[7.5rem] -mt-5"
      />
      <div className="flex flex-col items-center flex-1">
        <h1 className="text-base-subtitle font-baloo2 text-xl font-bold leading-[130%] mt-5">
          {title}
        </h1>
        <p className="text-base-label text-justify mt-2 font-roboto text-[0.875rem] leading-[130%]">
          {subtitle}
        </p>
      </div>
      <div className="flex w-full justify-around items-center mb-8">
        <p className="font-baloo2 text-xl leading-[130%] font-extrabold text-base-text">
          {priceFormatted}
        </p>

        <div className="h-[2.375rem] p-2 flex justify-between items-center gap-3 bg-base-button rounded-[0.375rem]">
          <button
            className={`${amount === 1 ? 'disabled' : ''} hover:cursor-pointer`}
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
            className={`${
              amount === 10 ? 'disabled' : ''
            } hover:cursor-pointer`}
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
            insertProductToCart({
              amount,
              id,
              name: title,
              originalPrice: price,
              imageUrl: image,
            })
          }}
          className="p-3 rounded-[0.375rem] bg-purple-dark hover:cursor-pointer"
        >
          <Cart color="white" />
        </button>
      </div>
    </div>
  )
}
