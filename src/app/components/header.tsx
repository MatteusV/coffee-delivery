import { Cart } from './icons/cart'
import { Location } from './icons/location'
import { Logo } from './icons/logo'
import { parseCookies } from 'nookies'
import { User } from './icons/user'
import Link from 'next/link'
import { countProductToCart } from '../api/countProductToCart'
import { findUserById } from '../api/findUserById'

export async function Header() {
  const cookie = parseCookies()
  const userId = cookie['@coffee-delivery:userId']
  const amountProductInCart = await countProductToCart(userId)
  const user = await findUserById(userId)

  return (
    <header className="w-full bg-background flex justify-between py-8 px-40">
      <Link href="/">
        <Logo />
      </Link>

      <div className="flex gap-4">
        {user ? (
          <>
            <button
              disabled
              className="flex gap-1 rounded-[0.375rem] items-center p-2 bg-purple-light"
            >
              <Location color="purple" />
              <p className="font-roboto text-[1.125rem] leading-[160%]">
                {user.city}, {user.state}
              </p>
            </button>
            <Link
              href="/checkout"
              className="flex items-center p-2 bg-yellow-light rounded-[0.375rem]"
            >
              <div className="bg-yellow-dark absolute rounded-full p-1 px-2 -mt-10 ml-4 flex justify-center items-center">
                <p className="font-roboto text-xs font-bold leading-[130%] text-white">
                  {amountProductInCart || 0}
                </p>
              </div>
              <Cart color="yellow" />
            </Link>
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
          </>
        )}
      </div>
    </header>
  )
}
