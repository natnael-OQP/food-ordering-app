import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema(
    {
        orderId: {
            type: 'string',
            required: true,
        },
        customer: {
            type: 'string',
            required: true,
        },
        Address: {
            type: 'string',
            required: true,
        },
        total: {
            type: Number,
            required: true,
        },
        status: {
            type: Number,
            default: true,
        },
        method: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
)

export default mongoose.models.order || mongoose.model('order', OrderSchema)
