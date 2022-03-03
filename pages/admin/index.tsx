import axios from 'axios'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import { IProduct, IOrder } from '../../type'

interface Props {
    products: IProduct[]
}

const Admin: FC<Props> = ({ products }) => {
    const [pizza, setPizza] = useState<IProduct[]>(products)

    // optimistic ui
    const handelDelete = async (id: string) => {
        setPizza(pizza.filter((pizza) => pizza._id !== id))
        axios.delete('http://localhost:3000/api/product/' + id)
    }

    return (
        <div className="width full grid grid-cols-1 gap-y-10 pt-5 pb-40 md:min-h-[400px] xl:min-h-[calc(100vh_-_110px)] xl:grid-cols-2 xl:pb-20">
            {/* product */}
            <div className="pl-2 xl:pl-6">
                <h1 className="py-6 text-3xl font-bold text-gray-700 md:text-4xl">
                    Products
                </h1>
                <table className="w-full  text-left">
                    <tbody>
                        <tr>
                            <th className="pl-3">Image</th>
                            <th className="pl-3">ID</th>
                            <th className="pl-3">Title</th>
                            <th className="pl-3">Price</th>
                            <th className="pl-3">Action</th>
                        </tr>
                    </tbody>
                    {/* table data */}
                    {pizza.map((product) => (
                        <tbody key={product._id}>
                            <tr>
                                <td className="pr-1">
                                    <div className="relative my-2   h-10  w-10  rounded-full  md:h-20 md:w-20">
                                        <Image
                                            layout="fill"
                                            objectFit="cover"
                                            src={product.image}
                                            alt="pizza"
                                        />
                                    </div>
                                </td>
                                <td className="pr-1">
                                    <span className="text-sm font-medium text-gray-500">
                                        {product._id.slice(0, 8) + '...'}
                                    </span>
                                </td>
                                <td className="pr-1">
                                    <span className="text-sm font-medium text-gray-500">
                                        {product.title}
                                    </span>
                                </td>
                                <td className="pr-1">
                                    <span className="text-sm font-medium text-gray-800">
                                        {product.prices[0]}
                                    </span>{' '}
                                    <span className="text-xs font-normal text-gray-400 ">
                                        birr
                                    </span>
                                </td>
                                <td className="pr-1">
                                    <div className="flex space-x-2">
                                        <button className="rounded-sm border-none bg-green-600 px-3 py-[1px] text-base font-semibold text-white shadow-sm">
                                            Edit
                                        </button>
                                        <button
                                            onClick={() =>
                                                handelDelete(product._id)
                                            }
                                            className="rounded-sm border-none bg-red-600 px-3 py-[1px] text-base font-semibold text-white shadow-sm"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { data: products } = await axios.get(
        'http://localhost:3000/api/product'
    )

    return {
        props: {
            products,
        },
    }
}

export default Admin
