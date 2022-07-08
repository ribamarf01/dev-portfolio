import Head from 'next/head'

import Hero from '@components/Hero'
import About from '@components/About'
import Skills from '@components/Skills'

const Home = () => {
  return (<>
    <Head>
      <title>Ribamar Filho - Portfolio</title>
    </Head>

    <Hero />
    <About />
    <Skills />
  </>)
}

export default Home