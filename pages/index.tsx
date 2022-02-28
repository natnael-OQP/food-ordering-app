import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ReactElement } from 'react'
import Featured from '../components/Featured'
import Layout from '../components/layout'
import ProductList from '../components/ProductList'
import axios from 'axios'
import { IProduct } from '../type'
interface Props {
    products: IProduct[],
}
export default function Home({ products }: Props) {
    return (
        <div>
            <Head>
                <title>Pizza Restaurant </title>
                <meta name="description" content="best Pizza Shop in Addise" />
            </Head>
            <Featured />
            <ProductList productList={products} />
        </div>
    )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { data: products } = await axios.get('http://localhost:3000/api/product')
    return {
        props: {
            products,
        },
    }
}
