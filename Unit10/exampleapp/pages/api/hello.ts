// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type Data = {
  name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io'
    }
  })

  const allUsers = await prisma.user.findMany()

  res.status(200).json(allUsers as any)
}
