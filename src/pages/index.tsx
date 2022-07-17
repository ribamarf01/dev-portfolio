import Head from 'next/head'

import Hero from '@components/Hero'
import About from '@components/About'
import Skills from '@components/Skills'
import Projects from '@components/Projects'
import Contact from '@components/Contact'
import Footer from '@components/Footer'

const Home = () => {
  return (<>
    <Head>
      <title>Ribamar Filho - Portfolio</title>
      <meta charSet='UTF-8' />
      <meta name='description' content='My web developer portfolio' />
      <meta name='author' content='Ribamar Filho' />
      <meta name='keywords' content='HTML, CSS, JavaScript, TypeScript, Front End, Portfolio' />
    </Head>

    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </>)
}

export default Home