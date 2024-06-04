import { alignProperty } from "@mui/material/styles/cssUtils";
import { Drink } from "../types";
import { Flex } from "antd";
import { Directions } from "@mui/icons-material";

interface CardProps {
  drink: Drink;
}

const Card: React.FC<CardProps> = ({ drink }) => {
const imageUrl = drink.imgUrl ? `${drink.imgUrl}` : 'akcpsh1493070267.jpg';
const fallbackImageUrl = 'images/akcpsh1493070267.jpg';
// {/* display: "flex", justifyContent: "flex-start", flexDirection: "column", alignContent: "start", alignItems: "flex-start" */}

  return (
    <div>
        <div style={{maxWidth: "100%", maxHeight: "20vh", position: "relative", overflow: "hidden"}}> 
       <img
          style={{
            maxWidth: "100%",
            height: "auto",
            borderTopLeftRadius: "0.5em",
            borderTopRightRadius: "0.5em",
            marginTop: "0em",
            objectFit: "cover",
          }}
          src={`images/${imageUrl}`}
          onError={(e) => {
            e.currentTarget.src = fallbackImageUrl;
          }}
          alt=""
        />
        </div>
        <p style={{ padding: "1em" }}> {drink.name}</p>
        <p>{drink.price}€</p>
        {/* <div style={{ padding: "1em" }}> */}
          <button
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              fontVariant: "small-caps",
              borderRadius: "0em",
              color: "white",
              background: "black",
              padding: "1em",
              marginTop: "1rem",
              alignContent: "center",
              marginBottom: "1em",
            }}
          >
            ADD TO CART
          </button>
        {/* </div> */}
      </div>
  );
};

export default Card;
