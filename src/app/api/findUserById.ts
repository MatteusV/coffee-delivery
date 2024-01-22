'use server'

import { revalidatePath } from 'next/cache'

import { prisma } from '@/lib/prisma'

export async function findUserById(userId: string) {
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    select: {
      state: true,
      city: true,
    },
    cacheStrategy: {
      swr: 60,
      ttl: 60,
    },
  })

  if (!user) {
    return null
  }

  revalidatePath('/')
  return user
}
