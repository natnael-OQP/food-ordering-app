import Image from 'next/image'

const PizzaCard = () => {
    return (
        <div className="flex min-w-[200px] cursor-pointer flex-col items-center space-y-2 rounded-lg bg-white py-5 px-3 shadow-md">
            <div className="relative h-[200px] w-full">
                <Image
                    layout="fill"
                    objectFit="contain"
                    src="/img/pizza.png"
                    alt="logo"
                />
            </div>
            <h1 className="text-xl font-bold text-red-500 md:text-lg ">
                Super Pizza
            </h1>
            <span className="text-lg font-semibold text-gray-700">$350.5</span>
            <p className="mx-auto max-w-[65vw] text-center text-sm font-normal text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
        </div>
    )
}

export default PizzaCard
