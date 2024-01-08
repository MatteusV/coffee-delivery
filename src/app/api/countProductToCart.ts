'use server'

import { revalidatePath } from 'next/cache'

import { prisma } from '@/lib/prisma'

export async function countProductToCart(userId: string) {
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
