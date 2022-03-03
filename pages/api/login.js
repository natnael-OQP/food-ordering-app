// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../lib/dbConnect'
import cookie from 'cookie'

export default async function handler(req, res) {
    const { method } = req
    dbConnect()

    if (method === 'POST') {
        const { username, password } = req.body
        if (
            username === process.env.ADMIN_USERNAME &&
            password === process.env.ADMIN_PASSWORD
        ) {
            res.setHeader(
                'Set-Cookie',
                cookie.serialize('token', process.env.TOKEN, {
                    MaxAge: 60 * 60,
                    sameSite: 'strict',
                    path: '/',
                })
            )
            res.status(200).json('Successful')
        }
    } else {
        res.status(400).json('error')
    }
}
