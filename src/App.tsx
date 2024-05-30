import './App.css'
import OfferBar from './components/OfferBar' 
import Footer from './components/Footer' 
import CardGrid from './components/CardGrid' 
import LinkBar from './components/LinkBar' 
import Hero from './components/Hero' 


function App() {
  return (
    <div style={{width: "100%", textAlign: "center"}} >
    <OfferBar/>
    <LinkBar />
    <Hero />
    <p className="font-style-2" style={{fontSize:"3em", color: "#e77822", textShadow: "0.1em 0.1em black"}}>Shop our products</p>
    <CardGrid />
    <OfferBar/>
    <Footer />
    </div>
  )
}

export default App
