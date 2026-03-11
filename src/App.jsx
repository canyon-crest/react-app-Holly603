import './App.css'
import Card from './Card'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <>
      <Home />
      <Card name="Apples" description="They are apples." />
      <Card name="Grapes" description="They are green grapes." />
      <Card name="Oranges" description="They are oranges." />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App