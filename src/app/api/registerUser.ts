'use server'

import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const registerFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(3),
  state: z
    .string()
    .min(2)
    .max(2)
    .transform((val) => val.toUpperCase()),
  city: z.string(),
})

export async function registerUser(formData: FormData) {
  const data = registerFormSchema.parse({
    email: formData.get('email'),
    name: formData.get('name'),
    password: formData.get('password'),
    state: formData.get('state'),
    city: formData.get('city'),
  })

  const passwordHash = await hash(data.password, 6)

  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  })

  if (userWithSameEmail) {
    throw new Error('E-mail já esta sendo usado.')
  }

  const user = await prisma.user.create({
    data: {
      city: data.city,
      email: data.email,
      name: data.name,
      password_hash: passwordHash,
      state: data.state,
    },
  })

  if (!user) {
    throw new Error('Não foi possivel cadastrar o usuário.')
  }

  cookies().set('@coffee-delivery:userId', user.id, {
    path: '/',
    secure: true,
    httpOnly: true,
  })

  redirect('/')
}
