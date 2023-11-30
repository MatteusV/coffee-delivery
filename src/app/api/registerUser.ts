'use server'

import { FormRegisterData } from "@/@types/registerUser";
import { prisma } from "@/lib/prisma";
import { removeAccentsFromWord } from "@/utils/removesAccentsFromWords";
import { hash } from "bcryptjs";

export async function registerUser(data: FormData) {
  const cityWithOutAccents = removeAccentsFromWord(data.city)
  data.city = cityWithOutAccents

  const passwordHash = await hash(data.password, 6)

  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email: data.email
    }
  })

  if(userWithSameEmail) {
    throw new Error('E-mail já esta sendo usado.')
  }

  const user = await prisma.user.create({
    data: {
      city: data.city,
      email: data.email,
      name: data.name,
      password_hash: passwordHash,
      state: data.state,
    }
  })

  if(!user) {
    throw new Error('Não foi possivel cadastrar o usuário.')
  }

  return user
}