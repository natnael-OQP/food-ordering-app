import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { IProduct } from '../type'

interface Props {
    product: IProduct
}

const PizzaCard: FC<Props> = ({ product }) => {
    return (
        <Link href={`/product/${product._id}`} passHref>
            <div className="flex min-w-[200px] cursor-pointer flex-col items-center space-y-2 rounded-lg bg-white py-5 px-3 shadow-md">
                <div className="relative h-[200px] w-full">
                    <Image
                        layout="fill"
                        objectFit="contain"
                        src={product.image}
                        alt={product.title}
                    />
                </div>
                <h1 className="text-xl font-bold text-red-500 md:text-lg ">
                    {product.title}
                </h1>
                <span className="text-lg font-semibold text-gray-700">
                    {product?.prices[0]}
                </span>
                <p className="mx-auto max-w-[65vw] text-center text-sm font-normal text-gray-500">
                    {product.description}
                </p>
            </div>
        </Link>
    )
}

export default PizzaCard
