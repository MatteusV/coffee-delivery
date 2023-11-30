import Stripe from 'stripe'

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY as string

export const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
  appInfo: {
    name: 'Coffee Delivery',
  },
})
