'use server'

import { stripe } from '@/lib/stripe'
import { revalidatePath } from 'next/cache'
import Stripe from 'stripe'

export async function getProducts() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      description: product.description,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      price: price.unit_amount! / 100,
    }
  })

  revalidatePath('/')
  return products
}
