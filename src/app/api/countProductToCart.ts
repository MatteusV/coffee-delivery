'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function countProductToCart(userId: string) {
  // const count =
  //   await prisma.$queryRaw`SELECT SUM(amount) FROM cart WHERE user_id = ${userId}`

  const count = await prisma.cart.count({
    where: {
      user_id: userId,
    },
  })

  if (!count) {
    return 0
  }

  revalidatePath('/checkout')
  return count
}
