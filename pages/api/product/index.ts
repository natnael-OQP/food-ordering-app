// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// db connect
import dbConnect from '../../../lib/dbConnect'
// model
import Product from '../../../model/Product'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req
    dbConnect()

    if (method === 'GET') {
        try {
            const product = await Product.find()
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    if (method === 'POST') {
        try {
            const product = await Product.create(req.body)
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
