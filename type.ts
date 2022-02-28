export interface IProduct {
    _id: string
    title: string
    description: string
    image: string
    prices: [number]
    extraOption: Object
    createdAt: Date
    updatedAt: Date
}
