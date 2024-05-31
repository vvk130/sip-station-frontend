//format npx prettier . --write

import "./App.css";
import OfferBar from "./components/OfferBar";
import Footer from "./components/Footer";
import CardGrid from "./components/CardGrid";
import LinkBar from "./components/LinkBar";
import Hero from "./components/Hero";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CardGrid />,
  },
  {
    path: "cart",
    element: <div>Cart</div>,
  },
  {
    path: "*",
    element: <div>Not found</div>,
  },
  {
    path: "profile",
    element: <div>Profile</div>,
  },
  {
    path: "searh",
    element: <div>Search results</div>,
  },
]);

function App() {
  return (
    <div style={{textAlign: "center", display: "flex", flexDirection: "column", maxWidth: "100vw", height: "100vh", margin: "0 auto"}}>
      <OfferBar />
      <LinkBar />
      <Hero />
      <p
        className="font-style-2"
        style={{
          fontSize: "4em",
          color: "#e77822",
          textShadow: "0.1em 0.1em black",
        }}
      >
        Shop our products sdfkdfosfko
      </p>
      <div style={{paddingTop: "3em", paddingBottom: "3em"}}>
      <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
