import Head from 'next/head'

import Hero from '@components/Hero'
import About from '@components/About'
import Skills from '@components/Skills'
import Projects from '@components/Projects'
import Contact from '@components/Contact'

const Home = () => {
  return (<>
    <Head>
      <title>Ribamar Filho - Portfolio</title>
    </Head>

    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </>)
}

export default Home