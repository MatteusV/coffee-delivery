'use server'

import { NextApiRequest, NextApiResponse } from 'next'

export default function handle(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body)
  res.status(200).json({ message: 'Oi' })
}
