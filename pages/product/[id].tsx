import axios from 'axios'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import React, { ChangeEvent, ReactElement, useState } from 'react'
import { useDispatch } from 'react-redux'
import Layout from '../../components/layout'
import { addProduct } from '../../redux/cartSlice'
import { IProduct } from '../../type'

interface Props {
    pizza: IProduct
}

export default function Product({ pizza }: Props) {
    const [size, setSize] = useState<number>(0)
    const [price, setPrice] = useState<number>(pizza.prices[size])
    const [extra, setExtra] = useState<any>([])
    const [quantity, setQuantity] = useState<number>(1)

    const dispatch = useDispatch()

    const handelSize = (index: number) => {
        const deference = pizza.prices[index] - pizza.prices[size]
        setSize(index)
        setPrice(price + deference)
    }

    const handelChange = (e: ChangeEvent<HTMLInputElement>, option: any) => {
        const checked = e.target.checked
        if (checked) {
            setPrice(price + option.price)
            setExtra((prev: any) => [...prev, option])
        } else {
            setPrice(price - option.price)
            setExtra(extra.filter((item: any) => item._id !== option._id))
        }
    }

    return (
        <div className=" grid h-full grid-cols-1 pt-5 md:h-[95vh] md:grid-cols-2 md:py-10  xl:h-[calc(100vh_-_70px)]">
            <div className="relative h-[200px]  w-full md:h-[350px] xl:h-[500px] ">
                <Image
                    layout="fill"
                    objectFit="contain"
                    src={pizza.image}
                    alt="logo"
                />
            </div>
            <div className=" flex flex-col space-y-3 px-2 pt-3 md:mt-0 md:space-y-8 md:px-0 ">
                <h1 className="text-3xl font-bold capitalize text-gray-800 md:text-5xl">
                    {pizza.title}
                </h1>
                <span className="text-2xl font-semibold text-gray-600">
                    {price}
                    <span className="text-xs font-medium text-gray-400 ">
                        birr
                    </span>
                </span>
                <p className=" text-base font-semibold text-gray-500 md:pr-6  xl:pr-10">
                    {pizza.description}
                </p>
                <h3 className=" text-3xl font-bold text-gray-900 ">
                    Choose the size
                </h3>
                <div className="flex items-center space-x-8 pl-5 sm:pl-0">
                    <div
                        onClick={() => handelSize(0)}
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
                        onClick={() => handelSize(1)}
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
                        onClick={() => handelSize(2)}
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
                    {pizza.extraOption.map((option, i: number) => (
                        <div className="flex items-center" key={i}>
                            <input
                                onChange={(e) => handelChange(e, option)}
                                className="h-5 w-5"
                                type="checkbox"
                                id={option.text}
                                name={option.text}
                            />
                            <label
                                className="ml-2 cursor-pointer select-none text-base font-semibold capitalize text-gray-700"
                                htmlFor={option.text}
                            >
                                {option.text}
                            </label>
                        </div>
                    ))}
                </div>
                {/* add to cart button */}
                <div className="mt-4 flex space-x-4">
                    <input
                        type="number"
                        className="h-9 w-16 rounded-sm border border-gray-500 pl-[2px] text-xl "
                        value={quantity}
                        min={1}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                    <button
                        onClick={() =>
                            dispatch(
                                addProduct({ ...pizza, extra, quantity, price })
                            )
                        }
                        className="transform-gpu cursor-pointer bg-red-500 px-3 text-base font-semibold text-gray-50 shadow-lg outline-none transition duration-200 ease-in-out  hover:scale-105 active:scale-95"
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({
    params: { id },
}: any) => {
    const { data: pizza } = await axios.get(
        `http://localhost:3000/api/product/${id}`
    )

    return {
        props: {
            pizza,
        },
    }
}
