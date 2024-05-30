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
]);

function App() {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
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
        Shop our products
      </p>
      <RouterProvider router={router} />
      <OfferBar />
      <Footer />
    </div>
  );
}

export default App;
