'use client'
import { Cart } from './icons/cart'
import { Location } from './icons/location'
import { Logo } from './icons/logo'
import React, { useEffect, useState } from 'react'
import { parseCookies } from 'nookies'
import { User } from './icons/user'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'

export function Header() {
  const [userId, setUserId] = useState('')

  useEffect(() => {
    const cookie = parseCookies()
    if (cookie['@coffee-delivery:userId']) {
      setUserId(cookie['@coffee-delivery:userId'])
    }
  }, [userId])

  return (
    <header className="w-full bg-background flex justify-between py-8 px-40">
      <Logo />

      <div className="flex gap-4">
        {userId ? (
          <>
            <button
              disabled
              className="flex gap-1 rounded-[0.375rem] items-center p-2 bg-purple-light"
            >
              <Location />
              <p className="font-roboto text-[1.125rem] leading-[160%]">
                Porto Alegre, RS
              </p>
            </button>
            <a
              href=""
              className="flex items-center p-2 bg-yellow-light rounded-[0.375rem]"
            >
              <Cart color="yellow" />
            </a>
          </>
        ) : (
          <>
            <Link href='/register'
            className="flex gap-1 rounded-[0.375rem] items-center py-2 px-4 bg-purple-light hover:bg-purple transition-all disabled:hover:bg-purple-light font-roboto text-[1.125rem] font-medium leading-[160%]">
              <User />
              Registrar
            </Link>
          </>
        )}
      </div>
    </header>
  )
}
