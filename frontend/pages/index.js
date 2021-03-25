import Head from 'next/head'
import Card from "src/components/card"
import Footer from 'src/components/footer'



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
          <Card link={"https://nextjs.org/learn"} title={"Ejemplo"} description={"ESTO ES UN EJEMPLO"} dato={4} />
          <Card link={"https://nextjs.org/learn"} title={"Urus"} description={"ESTO ES UN EJEMPLO2"} dato={3}/>
          <Card link={"https://nextjs.org/learn"} title={"Ejemplo2"} description={"ESTO ES UN EJEMPLO2"} dato={5} />
          <Card link={"https://nextjs.org/learn"} title={"Ejemplo2"} description={"ESTO ES UN EJEMPLO2"} dato={7}/>
        </div>
      </main>

      <Footer />

  
    </div>
  )
}
