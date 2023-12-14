'use server'
import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'

export async function deleteProductFromCart(id: string) {
  const userId = cookies().get('@coffee-delivery:userId')

  if (!userId) {
    throw new Error('Não foi possivel indentificar o ID do usuário.')
  }

  const product = await prisma.cart.findFirstOrThrow({
    where: {
      id,
      user_id: userId.value,
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
}
