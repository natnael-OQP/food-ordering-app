import Image from 'next/image'
import { ReactElement } from 'react'
import Layout from '../components/layout'

const Cart = () => {
    return (
        <div className="grid h-[calc(100vh_-_120px)] grid-cols-1 xl:grid-cols-5 xl:pt-10 ">
            <div className="md:px-4 xl:col-span-3">
                <table className="w-full   text-left">
                    <tr>
                        <th className="">Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    {/* table data */}
                    <tr>
                        <td>
                            <div className="relative my-2   h-10  w-10  rounded-full  md:h-20 md:w-20">
                                <Image
                                    layout="fill"
                                    objectFit="cover"
                                    src="/img/pizza.png"
                                    alt="logo"
                                />
                            </div>
                        </td>
                        <td>
                            <span className="text-xs font-light text-red-400 md:text-sm md:font-medium">
                                Pizza name
                            </span>
                        </td>
                        <td>
                            <span className="text-sm font-medium text-gray-500">
                                2X Ingredient,Extra Cheese
                            </span>
                        </td>
                        <td>
                            <span className="text-sm font-medium text-gray-800">
                                19
                            </span>{' '}
                            <span className="text-xs font-normal text-gray-400 ">
                                birr
                            </span>
                        </td>
                        <td>
                            <span className="text-sm font-medium text-gray-600">
                                3
                            </span>
                        </td>
                        <td>
                            <span className="text-sm font-medium text-gray-600">
                                90
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="relative my-2   h-10  w-10  rounded-full  md:h-20 md:w-20">
                                <Image
                                    layout="fill"
                                    objectFit="cover"
                                    src="/img/pizza.png"
                                    alt="logo"
                                />
                            </div>
                        </td>
                        <td>
                            <span className="text-xs font-light text-red-400 md:text-sm md:font-medium">
                                Pizza name
                            </span>
                        </td>
                        <td>
                            <span className="text-sm font-medium text-gray-500">
                                2X Ingredient,Extra Cheese
                            </span>
                        </td>
                        <td>
                            <span className="text-sm font-medium text-gray-800">
                                19
                            </span>{' '}
                            <span className="text-xs font-normal text-gray-400 ">
                                birr
                            </span>
                        </td>
                        <td>
                            <span className="text-sm font-medium text-gray-600">
                                3
                            </span>
                        </td>
                        <td>
                            <span className="text-sm font-medium text-gray-600">
                                90
                            </span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="mx-auto h-[300px] rounded-lg bg-slate-700 p-6 px-10 shadow-lg md:w-[500px] xl:w-[300px] ">
                <h2 className="py-4 text-3xl font-semibold text-white">
                    CART TOTAL
                </h2>
                <div className="flex items-end">
                    <b className="text-2xl font-semibold text-gray-100 ">
                        Subtotal:{' '}
                    </b>
                    <span className="ml-[6px] flex items-center text-lg font-medium text-gray-100">
                        79{' '}
                        <span className="ml-1 text-xs font-normal text-gray-400 ">
                            birr
                        </span>
                    </span>
                </div>
                <div className="flex items-end">
                    <b className="text-2xl font-semibold text-gray-100 ">
                        Discount:{' '}
                    </b>
                    <span className="ml-[6px] flex items-center text-lg font-medium text-gray-100">
                        79{' '}
                        <span className="ml-1 text-xs font-normal text-gray-400 ">
                            birr
                        </span>
                    </span>
                </div>
                <div className="flex items-end">
                    <b className="text-2xl font-semibold text-gray-100 ">
                        Total:{' '}
                    </b>
                    <span className="ml-[6px] flex items-center text-lg font-medium text-gray-100">
                        79{' '}
                        <span className="ml-1 text-xs font-normal text-gray-400 ">
                            birr
                        </span>
                    </span>
                </div>
                <button className="mt-10 w-full rounded-sm bg-gray-100 py-[5px] text-xl font-semibold text-red-400 shadow-md">
                    Checkout Now!
                </button>
            </div>
        </div>
    )
}

export default Cart

Cart.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}
