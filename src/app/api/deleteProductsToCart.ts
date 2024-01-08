'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

import { prisma } from '@/lib/prisma'

export async function deleteProductsToCart() {
  const userId = cookies().get('@coffee-delivery:userId')

  await prisma.cart.deleteMany({
    where: {
      user_id: userId?.value,
    },
  })
  revalidatePath('/')
}
