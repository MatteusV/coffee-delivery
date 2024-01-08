'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { prisma } from '@/lib/prisma'
import { stripe } from '@/lib/stripe'

export async function orderCompleted() {
  const userId = cookies().get('@coffee-delivery:userId')

  await prisma.cart.updateMany({
    where: {
      user_id: userId?.value,
    },
    data: {
      status: 'success',
    },
  })

  const products = await prisma.cart.findMany({
    where: {
      user_id: userId?.value,
    },
  })

  const productsByStripe = await Promise.all(
    products.map(async (product) => {
      const response = await stripe.prices.list({
        product: product.product_id,
      })
      return response
    }),
  )

  const lineItems = []
  for (let i = 0; i < productsByStripe.length; i++) {
    lineItems.push({
      price: productsByStripe[i].data[i].id,
      quantity: products[i].amount,
    })
  }
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const session = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    line_items: lineItems,
    mode: 'payment',
  })

  if (session.url) {
    redirect(session.url)
  }
}
