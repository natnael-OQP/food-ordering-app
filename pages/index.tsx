import Head from 'next/head'
import { ReactElement } from 'react'
import Featured from '../components/Featured'
import Layout from '../components/layout'
import ProductList from '../components/ProductList'

export default function Home() {
    return (
        <div className="">
            <Head>
                <title>Pizza Restaurant </title>
                <meta name="description" content="best Pizza Shop in Addise" />
            </Head>
            <Featured />
            <ProductList />
        </div>
    )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}
