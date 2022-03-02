import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
            state.quantity += 1
            state.total += action.payload.price * action.payload.quantity
        },
        removeProduct: (state, action) => {
            const filtered = state.products.filter(
                (product) => product._id !== action.payload._id
            )
            state.products.push(filtered)
        },
        reset: (state) => {
            state = initialState
        },
    },
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, reset } = cartSlice.actions

export default cartSlice.reducer
