import axios from 'axios'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import React, { FC, ReactElement, useState } from 'react'
import CheckBox from '../../components/CheckBox'
import Layout from '../../components/layout'
import { IProduct } from '../../type'

interface Props {
    product: IProduct
}

export default function Product({ product }: Props) {
    const [size, setSize] = useState<number>(0)

    return (
        <div className=" grid h-full grid-cols-1 pt-5 md:h-[95vh] md:grid-cols-2 md:py-10  xl:h-[calc(100vh_-_70px)]">
            <div className="relative h-[250px] w-full md:h-[350px] xl:h-[500px] ">
                <Image
                    layout="fill"
                    objectFit="contain"
                    src={product.image}
                    alt="logo"
                />
            </div>
            <div className=" flex flex-col space-y-3 px-2 md:mt-0 md:space-y-8 md:px-0 ">
                <h1 className="text-3xl font-bold text-gray-800 md:text-5xl">
                    {product.title}
                </h1>
                <span className="text-2xl font-semibold text-gray-600">
                    {/* {product.prices[0]} */}
                    <span className="text-xs font-medium text-gray-400 ">
                        birr
                    </span>
                </span>
                <p className=" text-base text-gray-600 md:pr-6  xl:pr-10">
                    {product.description}
                </p>
                <h3 className=" text-3xl font-bold text-gray-900 ">
                    Choose the size
                </h3>
                <div className="flex items-center space-x-8 pl-5 sm:pl-0">
                    <div
                        onClick={() => setSize(0)}
                        className="relative h-[50px] w-[50px] transform-gpu cursor-pointer transition duration-200 ease-in-out hover:scale-105  active:scale-95"
                    >
                        <Image
                            layout="fill"
                            objectFit="contain"
                            src="/img/size.png"
                            alt="logo"
                        />
                        <span className="absolute -top-2 -right-5 ml-2 rounded-lg bg-green-600 px-3  text-sm font-light text-white">
                            Small
                        </span>
                    </div>
                    <div
                        onClick={() => setSize(1)}
                        className="relative h-[65px] w-[65px] transform-gpu cursor-pointer transition duration-200 ease-in-out hover:scale-105  active:scale-95"
                    >
                        <Image
                            layout="fill"
                            objectFit="contain"
                            src="/img/size.png"
                            alt="logo"
                        />
                        <span className="absolute -top-2 -right-5 ml-2 rounded-lg bg-green-600 px-3  text-sm font-light text-white">
                            Medium
                        </span>
                    </div>
                    <div
                        onClick={() => setSize(2)}
                        className="relative h-[80px] w-[80px] transform-gpu cursor-pointer transition duration-200 ease-in-out hover:scale-105  active:scale-95"
                    >
                        <Image
                            layout="fill"
                            objectFit="contain"
                            src="/img/size.png"
                            alt="logo"
                        />
                        <span className="absolute -top-2 -right-5 ml-2 rounded-lg bg-green-600 px-3  text-sm font-light text-white">
                            Large
                        </span>
                    </div>
                </div>
                {/* ingredient  */}
                <h3 className=" text-3xl font-bold text-gray-900 ">
                    Choose the size
                </h3>
                <div className="grid grid-cols-2 gap-x-2 gap-y-2 xl:grid-cols-4">
                    <CheckBox name="2X Ingredient" />
                    <CheckBox name="Extra Cheese" />
                    <CheckBox name="Spicy Sauce" />
                    <CheckBox name="Garlic Sauce" />
                </div>
                {/* add to cart button */}
                <div className="mt-4 flex space-x-4">
                    <input
                        type="number"
                        className="h-9 w-16 rounded-sm border border-gray-500 pl-[2px] text-xl "
                        defaultValue={1}
                    />
                    <button className="transform-gpu cursor-pointer bg-red-500 px-3 text-base font-semibold text-gray-50 shadow-lg outline-none transition duration-200 ease-in-out  hover:scale-105 active:scale-95">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

Product.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { data: product } = await axios.get(
        'http://localhost:3000/api/product'
    )
    
    return {
        props: {
            product,
        },
    }
}
