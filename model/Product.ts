import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: 'string',
            required: true,
            maxlength: 50,
        },
        description: {
            type: 'string',
            required: true,
        },
        image: {
            type: 'string',
            required: true,
        },

        prices: {
            type: [Number],
            required: true,
        },
        extraOption: {
            type: [
                {
                    text: { type: String, required: true },
                    price: { type: Number, required: true },
                },
            ],
            required: true,
        },
    },
    { timestamps: true }
)

export default mongoose.models.product ||
    mongoose.model('product', ProductSchema)
