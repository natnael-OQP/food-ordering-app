import Image from 'next/image'
import React, { ReactElement } from 'react'
import Layout from '../../components/layout'

const Orders = () => {
    const status = 0
    const statusClass = (index: number) => {
        if (index - status < 1)
            return 'mt-10 flex flex-col items-center justify-around space-y-3'
        if (index - status === 1)
            return 'mt-10 flex flex-col items-center justify-around animate-pulse space-y-3'
        if (index - status > 1)
            return 'mt-10 flex flex-col items-center justify-around opacity-20 space-y-3'
    }
    return (
        <div className="grid h-[calc(100vh_-_120px)] grid-cols-1 xl:grid-cols-6 xl:pt-10">
            <div className="md:px-4 xl:col-span-4">
                <table className="w-full  text-left">
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
                {/* order status  */}
                <div className="flex items-start justify-around">
                    {/* items-1 */}
                    <div className={statusClass(0)}>
                        <div className="relative h-10 w-10 rounded-full ">
                            <Image
                                layout="fill"
                                objectFit="contain"
                                src="/img/paid.png"
                                alt="logo"
                            />
                        </div>
                        <span className="text-base font-semibold text-gray-900 md:text-xl xl:text-2xl">
                            payment
                        </span>
                        <div className="relative h-6 w-6 rounded-full ">
                            <Image
                                layout="fill"
                                objectFit="cover"
                                src="/img/checked.png"
                                alt="logo"
                            />
                        </div>
                    </div>
                    {/* items-2 */}
                    <div className={statusClass(1)}>
                        <div className="relative h-10 w-10 rounded-full ">
                            <Image
                                layout="fill"
                                objectFit="contain"
                                src="/img/bake.png"
                                alt="logo"
                            />
                        </div>
                        <span className="text-base font-semibold text-gray-900 md:text-xl xl:text-2xl">
                            Preparing
                        </span>
                        {/* <div className="relative h-6 w-6 rounded-full ">
                            <Image
                                layout="fill"
                                objectFit="cover"
                                src="/img/checked.png"
                                alt="logo"
                            />
                        </div> */}
                    </div>
                    {/* items-3 */}
                    <div className={statusClass(2)}>
                        <div className="relative h-10 w-10 rounded-full ">
                            <Image
                                layout="fill"
                                objectFit="contain"
                                src="/img/bike.png"
                                alt="logo"
                            />
                        </div>
                        <span className="text-base font-semibold text-gray-900 md:text-xl xl:text-2xl">
                            On the Way
                        </span>
                        {/* <div className="relative h-6 w-6 rounded-full ">
                            <Image
                                layout="fill"
                                objectFit="cover"
                                src="/img/checked.png"
                                alt="logo"
                            />
                        </div> */}
                    </div>
                    {/* items-4 */}
                    <div className={statusClass(3)}>
                        <div className="relative h-10 w-10 rounded-full ">
                            <Image
                                layout="fill"
                                objectFit="contain"
                                src="/img/delivered.png"
                                alt="logo"
                            />
                        </div>
                        <span className="text-base font-semibold text-gray-900 md:text-xl xl:text-2xl">
                            Delivered
                        </span>
                        {/* <div className="relative h-6 w-6 rounded-full ">
                            <Image
                                layout="fill"
                                objectFit="cover"
                                src="/img/checked.png"
                                alt="logo"
                            />
                        </div> */}
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
