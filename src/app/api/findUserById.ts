'use server'

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
  })

  if (!user) {
    return null
  }

  return user
}
