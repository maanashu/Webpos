import Head from 'next/head'
import { Inter } from '@next/font/google'
import HomePage from './web/home-page'

const inter = Inter({ subsets: ['latin'] })

export default function Home({pageData, meta , isLoggedIn}) {

  return (
    <>
      <Head>
        {/* <title>{meta.title}</title>
        <meta name="description" content={meta.description} /> 
         <meta name="keywords" content={meta.keywords} /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomePage/>
    </>
  )
}
