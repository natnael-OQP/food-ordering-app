import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ReactElement, useState } from 'react'
import Featured from '../components/Featured'
import Layout from '../components/layout'
import ProductList from '../components/ProductList'
import axios from 'axios'
import { IProduct } from '../type'
import AddButton from '../components/AddButton'
import AddProduct from '../components/AddProduct'

interface Props {
    products: IProduct[]
    admin: boolean
}
export default function Home({ products, admin }: Props) {
    const [close, setClose] = useState<boolean>(false)

    return (
        <div>
            <Head>
                <title>Pizza Restaurant </title>
                <meta name="description" content="best Pizza Shop in Addise" />
            </Head>
            <Featured />
            {admin && <AddButton setClose={setClose} />}
            <ProductList productList={products} />
            {close && <AddProduct setClose={setClose} />}
        </div>
    )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const cookie = context.req?.cookies
    let admin = false
    if (cookie.token === process.env.TOKEN) {
        admin = true
    }
    const { data: products } = await axios.get(
        'http://localhost:3000/api/product'
    )
    return {
        props: {
            products,
            admin,
        },
    }
}
