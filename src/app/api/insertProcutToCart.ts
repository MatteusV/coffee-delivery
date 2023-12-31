'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

import { prisma } from '@/lib/prisma'

interface productProps {
  id: string
  amount: number
  originalPrice: number
  name: string
  imageUrl: string
}
export async function insertProductToCart(data: productProps) {
  const userId = cookies().get('@coffee-delivery:userId')

  const sameProductInCart = await prisma.cart.findFirst({
    where: {
      user_id: userId?.value,
      product_id: data.id,
    },
  })

  if (sameProductInCart) {
    await prisma.cart.update({
      data: {
        amount: sameProductInCart.amount + data.amount,
      },
      where: {
        id: sameProductInCart.id,
      },
    })
  } else {
    await prisma.cart.create({
      data: {
        user_id: userId!.value,
        product_id: data.id,
        amount: data.amount,
        original_price: data.originalPrice,
        name: data.name,
        imageUrl: data.imageUrl,
      },
    })
  }
  revalidatePath('/')
}
