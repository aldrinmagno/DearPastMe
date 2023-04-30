import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '../components/_App/Header';
import Layout from '../components/_App/Layout';
import MainBanner from '../components/Common/MainBanner';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>DearPastMe: Write to Your Past, Heal Your Future</title>
        <meta name="description" content="DearPast.me is a platform that allows users to write letters to their past selves and share them with a community of people who are also looking to heal and reflect on their past. It is a safe and private space for self-discovery, reflection, gratitude, inspiration, and healing. It aims to provide users with a tool to process and understand their past experiences, find closure and move forward. It also allows users to read and gain inspiration from other's letters, which can help them with their journey of self-discovery and healing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        
        <MainBanner />


      </Layout>
    </>
  )
}
