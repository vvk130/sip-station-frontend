import './App.css'
import OfferBar from './components/OfferBar' 
import Footer from './components/Footer' 
import CardGrid from './components/CardGrid' 
import LinkBar from './components/LinkBar' 
import Hero from './components/Hero' 
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Hero />}>
      <Route index element={<Hero />} />
    </Route>
  )
)

function App() {
  return (
    <div style={{width: "100%", textAlign: "center"}} >
    <OfferBar/>
    <LinkBar />
    <Hero />
    <p className="font-style-2" style={{fontSize:"4em", color: "#e77822", textShadow: "0.1em 0.1em black"}}>Shop our products</p>
    <CardGrid />
    <RouterProvider router={router}/>
    <OfferBar/>
    <Footer />
    </div>
  )
}

export default App
