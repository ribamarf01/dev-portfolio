import Head from 'next/head'

import Hero from '@components/Hero'
import About from '@components/About'

const Home = () => {
  return (<>
    <Head>
      <title>Ribamar Filho - Portfolio</title>
    </Head>

    <Hero />
    <About />
  </>)
}

export default Home