// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// db connect
import dbConnect from '../../../lib/dbConnect'
// model
import Order from '../../../model/Order'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req
    dbConnect()

    if (method === 'GET') {
        try {
            const order = await Order.find()
            res.status(200).json(order)
        } catch (error) {
            res.status(5000).json(error)
        }
    }

    if (method === 'POST') {
        try {
            const order = await Order.create(req.body)
            res.status(200).json(order)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
