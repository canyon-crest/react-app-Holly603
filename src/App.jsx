import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import Card from './Card'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Explore from './Explore'
import Footer from './Footer'

function App() {
  const [page, setPage] = useState('home');
  return (
    <>
      <Nav setPage={setPage} />
      {page === 'home' && (
        <>
          <Home />
          <Card name="Apples" description="Fresh apples for the day!" />
          <Card name="Grapes" description="Fresh green grapes for the day!" />
          <Card name="Oranges" description="Fresh oranges for the day!" />
        </>
      )}
      {page === 'about' && <About />}
      {page === 'contact' && <Contact />}
      {page === 'explore' && <Explore />}
      <Footer />
    </>
  )
}

export default App