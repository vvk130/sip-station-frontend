import './App.css'
import OfferBar from './components/OfferBar' 
import Footer from './components/Footer' 
import CardGrid from './components/CardGrid' 
import LinkBar from './components/LinkBar' 
import Hero from './components/Hero' 

function App() {

  return (
    <div style={{width: "100%"}} >
    <OfferBar/>
    <LinkBar />
    <Hero />
    <p style={{fontSize:"2em", textAlign: "center"}}>Shop our products</p>
    <CardGrid />
    <OfferBar/>
    <Footer />
    </div>
  )
}

export default App
