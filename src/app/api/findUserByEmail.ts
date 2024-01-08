'use server'

import { hash } from 'bcryptjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'

const schemaFormData = z.object({
  email: z.string().email(),
  password: z.string(),
})

export async function findUserByEmail(formData: FormData) {
  const { email, password } = schemaFormData.parse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  const passwordHash = await hash(password, 6)

  const user = await prisma.user.findUnique({
    where: {
      email,
      password_hash: passwordHash,
    },
  })

  if (!user) {
    throw new Error('Usuário não encontrado.')
  }

  cookies().set('@coffee-delivery:userId', user.id, {
    path: '/',
    secure: true,
    httpOnly: true,
    expires: 60 * 60, // 1 hour
  })

  redirect('/')
}
