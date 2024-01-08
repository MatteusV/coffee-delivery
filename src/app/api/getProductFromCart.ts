'use server'
import { cookies } from 'next/headers'

import { prisma } from '@/lib/prisma'

export async function getProductFromCart() {
  const userId = cookies().get('@coffee-delivery:userId')

  if (!userId) {
    throw new Error('Não foi possivel indentificar o ID do usuário.')
  }

  const products = await prisma.cart.findMany({
    where: {
      user_id: userId.value,
    },
  })

  if (!products) {
    throw new Error('Não foi possivel achar nenhum produto desse usuário.')
  }

  return products
}
