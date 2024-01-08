'use server'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

import { prisma } from '@/lib/prisma'

export async function deleteProductFromCart(id: string) {
  const userId = cookies().get('@coffee-delivery:userId')

  const product = await prisma.cart.findFirstOrThrow({
    where: {
      id,
      user_id: userId?.value,
    },
  })

  if (!product) {
    throw new Error('Não foi possivel indentificar o produto no carrinho.')
  } else {
    await prisma.cart.delete({
      where: {
        id: product.id,
      },
    })
  }

  revalidatePath('/checkout')
}
