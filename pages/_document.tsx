/* eslint object-curly-newline: ["error", "never"] */
/* eslint-env es6 */

import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* import font */}
        <link rel="canonical" href="https://fonts.googleapis.com" />
        <link rel="canonical" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Purwa Aditya Wisnu Wardhana | Portfolio Web Developer"
        />
      </Head>
      <body className="bg-light-grey">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
