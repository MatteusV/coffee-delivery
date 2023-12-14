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
    throw new Error('Usuário não encontrado.')
  }

  return user
}
