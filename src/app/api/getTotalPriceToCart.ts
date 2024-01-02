'use server'

import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'

export async function getTotalPriceToCart() {
  const userId = cookies().get('@coffee-delivery:userId')

  if (!userId) {
    throw new Error('Não foi possivel indentificar o ID do usuário.')
  }

  let totalPrice = 0

  const totalItems = await prisma.cart.findMany({
    where: {
      user_id: userId.value,
    },
    select: {
      amount: true,
      original_price: true,
    },
  })

  // eslint-disable-next-line array-callback-return
  totalItems.map((item) => {
    totalPrice += item.original_price * item.amount
  })

  return totalPrice
}
