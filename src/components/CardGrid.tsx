import Card from "./Card";
import { useState, useEffect } from "react";
import { Drink } from "../types";

const CardGrid = () => {
  const [drinks, setDrink] = useState<Drink[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);

    
    const fetchData = async (pageNumber : number) => {
      try {
        const response = await fetch(`api/drinks?page=${pageNumber}`);
        console.log(pageNumber);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData: Drink[] = await response.json();
        setDrink((prevDrinks) => [...prevDrinks, ...jsonData]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

  useEffect(() => {
      fetchData(pageNumber);
  }, [pageNumber]);

  const handleLoadMore = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  return (
    <>
      <style>
        {`
          .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            grid-gap: 1rem;
          }
        `}
      </style>
      <div className="grid-container">
        {drinks.map((drink) => (
          <div className="card" key={Math.random()} style={{display: "flex",       
            borderRadius: "0.5em",
            width: "100%",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"}}>
            <Card drink={drink} />
          </div>
        ))}
      </div>
      <div style={{ padding: "2em" }}>
        <button
        onClick={handleLoadMore}
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
