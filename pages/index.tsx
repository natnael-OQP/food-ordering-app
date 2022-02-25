import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ReactElement } from 'react'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Layout from '../components/layout'
import NavBar from '../components/NavBar'
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
