import Head from 'next/head'
import Card from "src/components/card"
import Footer from 'src/components/footer'
import {useEffect, useState} from "react"



export default function Home() {



  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid pb-6">
          <Card isbn={"01"} />

        </div>
      </main>

      <Footer />

  
    </div>
  )
}
