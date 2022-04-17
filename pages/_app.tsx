/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/organisms/Navbar'
import Sidebar from '../components/organisms/Sidebar'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <ThemeProvider attribute="class">
        <div className="grid grid-cols-12 gap-6 px-5 py-12 overflow-auto lg:h-screen bg-light-primary-light sm:px-20 md:px-24 lg:px-16 xl:px-28 dark:bg-dark-primary-dark dark:text-white">
          <div className="justify-center col-span-12 p-4 text-center bg-light-primary dark:bg-dark-primary lg:col-span-4 xl:col-span-3 rounded-xl">
            <Sidebar />
          </div>
          <div className="flex flex-col col-span-12 overflow-auto bg-light-primary dark:bg-dark-primary lg:col-span-8 xl:col-span-9 rounded-xl">
            <Navbar />
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default MyApp
