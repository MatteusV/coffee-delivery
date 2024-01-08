'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

import { prisma } from '@/lib/prisma'

export async function deleteProductsToCart() {
  const userId = cookies().get('@coffee-delivery:userId')

  if (!userId) {
    throw new Error('Não foi possivel indentificar o ID do usuário.')
  }

  await prisma.cart.deleteMany({
    where: {
      user_id: userId.value,
    },
  })
  revalidatePath('/')
}
