export interface IProduct {
    _id: string
    title: string
    description: string
    image: string
    prices: [number]
    extraOption: [{ text: string; price: number }]
    createdAt: Date
    updatedAt: Date
}

export interface IOrder {
    _id: string
    customer: string
    address: string
    total: string
    status: string
}
