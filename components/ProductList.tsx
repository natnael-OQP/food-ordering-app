import { FC } from 'react'
import { IProduct } from '../type'
import PizzaCard from './PizzaCard'
interface Props {
    productList: IProduct[]
}

const ProductList: FC<Props> = ({ productList }) => {
    return (
        <div className="pb-30  flex flex-col items-center bg-slate-50 pt-20">
            <h1 className="text-3xl font-bold  text-gray-700 xl:text-5xl">
                The Pizza in Addise
            </h1>
            <p className="mx-auto mt-4 max-w-[85vw] text-center text-lg  font-normal text-gray-600 md:max-w-[75vw] xl:max-w-[60vw] ">
                Lorem, ipsum dolor sit amet adipisicing elit. Facilis qui
                nesciunt atque consequatur illum aspernatur officiis quas
                pariatur error earum voluptatem similique
            </p>
            {/* PizzaCard container */}
            <div className="mt-16 grid grid-cols-1 gap-8  sm:grid-cols-2 md:max-w-[90vw] xl:max-w-[87vw] xl:grid-cols-4">
                {productList.map((product) => (
                    <PizzaCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
