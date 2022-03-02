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
    const { method, query } = req
    const { id } = query

    dbConnect()

    if (method === 'GET') {
        try {
            const product = await Product.findOne({ _id: id })
            res.status(200).json(product)
        } catch (error) {
            res.status(5000).json(error)
        }
    }

    if (method === 'PUT') {
        try {
            const product = await Product.find()
            res.status(200).json(product)
        } catch (error) {
            res.status(5000).json(error)
        }
    }

    if (method === 'DELETE') {
        try {
            const product = await Product.deleteOne({ _id: id })
            res.status(200).json(product)
        } catch (error) {
            res.status(5000).json(error)
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
