import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ReactElement } from 'react'
import Footer from '../components/Footer'
import Layout from '../components/layout'
import NavBar from '../components/NavBar'

export default function Home() {
    return (
        <div className="">
            <Head>
                <title>Pizza Restaurant </title>
                <meta name="description" content="best Pizza Shop in Addise" />
            </Head>
            <main>
                <h1>home</h1>
            </main>
        </div>
    )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}
