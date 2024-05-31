import Card from "./Card";
import { useState, useEffect } from "react";
import { Drink } from "../types";

const CardGrid = () => {
  const [drinks, setDrink] = useState<Drink[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/drinks/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData: Drink[] = await response.json();
        setDrink(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <style>
        {`
          .grid-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 1fr;
            grid-gap: 1em;
            padding: 2em;
            justify-content: space-evenly;
            justify-items: center;
            align-content: space-evenly;
            align-items: center;
            align-items: top;
          }
          @media (max-width: 850px) {
            .grid-container {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 600px) {
            .grid-container {
              grid-template-columns: repeat(1, 1fr);
            }
        `}
      </style>
      <div className="grid-container">
        {drinks.slice(0, 8).map((drink) => (
          <span key={drink.id}>
            <Card drink={drink} />
          </span>
        ))}
      </div>
      <div style={{ padding: "2em" }}>
        <button
          style={{
            fontVariant: "small-caps",
            borderRadius: "0em",
            color: "white",
            background: "black",
            padding: "1em",
            marginTop: "1rem",
          }}
        >
          LOAD MORE
        </button>
      </div>
    </>
  );
};

export default CardGrid;
