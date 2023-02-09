import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios'

//  types
import {ArticlesTypes} from '../types'

//  components
import Hero from '@/components/Hero'
import OurArticles from '@/components/OurArticles/OurArticles'

export default function Home() {
  return (
    <>
      <Head>
        <title>El secreto de tu cocina</title>
        <meta name="description" content="la cocina tiene cosas unicas, aqui las descubriras" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Hero />
        <OurArticles />
      </main>
    </>
  )
}