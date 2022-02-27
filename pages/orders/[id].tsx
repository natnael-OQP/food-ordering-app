import Image from 'next/image'
import React, { ReactElement, useState } from 'react'
import CheckBox from '../../components/CheckBox'
import Layout from '../../components/layout'

const Orders = () => {
    const [status, setStatus] = useState<number>(0)

    return (
        <div className="grid h-[calc(100vh_-_120px)] grid-cols-1 xl:grid-cols-5 xl:pt-10 ">
            <div className="md:px-4 xl:col-span-3">
                <table className="w-full   text-left">
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                    {/* table data */}
                    <tr>
                        <td>
                            <span className="text-sm font-medium text-gray-500">
                                09121928
                            </span>
                        </td>
                        <td>
                            <span className="text-sm font-medium text-gray-500">
                                Natnael
                            </span>
                        </td>
                        <td>
                            <span className="text-sm font-medium text-gray-500">
                                Addise Abeba 22
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
                    </tr>
                </table>
                {/*  */}
                <div className="mt-10 flex">
                    {/* items-1 */}
                    <div>
                        <div className="relative h-20 w-20 rounded-full ">
                            <Image
                                layout="fill"
                                objectFit="cover"
                                src="/img/paid.png"
                                alt="logo"
                            />
                        </div>
                    </div>
                    {/* items-2 */}
                    <div>
                        <div className="relative h-20 w-20 rounded-full ">
                            <Image
                                layout="fill"
                                objectFit="cover"
                                src="/img/bake.png"
                                alt="logo"
                            />
                        </div>
                    </div>
                    {/* items-3 */}
                    <div>
                        <div className="relative h-20 w-20 rounded-full ">
                            <Image
                                layout="fill"
                                objectFit="cover"
                                src="/img/bike.png"
                                alt="logo"
                            />
                        </div>
                    </div>
                    {/* items-4 */}
                    <div>
                        <div className="relative h-20 w-20 rounded-full ">
                            <Image
                                layout="fill"
                                objectFit="cover"
                                src="/img/delivered.png"
                                alt="logo"
                            />
                        </div>
                    </div>
                </div>
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
                <button className="mt-10 w-full rounded-sm bg-gray-100 py-[5px] text-xl font-semibold text-green-600 shadow-md">
                    PAID
                </button>
            </div>
        </div>
    )
}

export default Orders

Orders.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}
