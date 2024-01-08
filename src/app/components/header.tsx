import Link from 'next/link'
import { parseCookies } from 'nookies'

import { countProductToCart } from '../api/countProductToCart'
import { findUserById } from '../api/findUserById'
import { CallCart } from './cart'
import { Location } from './icons/location'
import { Logo } from './icons/logo'
import { User } from './icons/user'

export async function Header() {
  const cookie = parseCookies()
  const userId = cookie['@coffee-delivery:userId']
  const user = await findUserById(userId)

  const amountProductInCart = (await countProductToCart(userId)) as number

  return (
    <>
      <header className="w-full bg-background flex justify-between py-8 px-40">
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex gap-4">
          {user ? (
            <>
              <div className="flex gap-1 rounded-[0.375rem] items-center p-2 bg-purple-light">
                <Location color="purple" />
                <p className="font-roboto text-[1.125rem] leading-[160%] text-purple-dark">
                  {user.city}, {user.state}
                </p>
              </div>
              <CallCart amountProductInCart={amountProductInCart} />
            </>
          ) : (
            <>
              <Link
                href="/register"
                className="flex gap-1 rounded-[0.375rem] items-center py-2 px-4 bg-purple-light hover:bg-purple transition-all disabled:hover:bg-purple-light font-roboto text-[1.125rem] font-medium leading-[160%]"
              >
                <User />
                Registrar
              </Link>

              <Link
                href="/login"
                className="flex gap-1 rounded-[0.375rem] items-center py-2 px-4 bg-purple-light hover:bg-purple transition-all disabled:hover:bg-purple-light font-roboto text-[1.125rem] font-medium leading-[160%]"
              >
                <User />
                Login
              </Link>
            </>
          )}
        </div>
      </header>
    </>
  )
}
