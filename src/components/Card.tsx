import { Drink } from "../types";

interface CardProps {
  drink: Drink;
}

const Card: React.FC<CardProps> = ({ drink }) => {
const imageUrl = drink.imgUrl ? `${drink.imgUrl}` : 'akcpsh1493070267.jpg';
const fallbackImageUrl = 'images/akcpsh1493070267.jpg';
// const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
//     event.currentTarget.src = 'akcpsh1493070267.jpg'; 
//   };


  return (
    <div
      className="card"
      style={{
        borderRadius: "0.5em",
        height: "100%",
        width: "100%",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img
          style={{
            maxWidth: "100%",
            borderTopLeftRadius: "0.5em",
            borderTopRightRadius: "0.5em",
          }}
          src={`images/${imageUrl}`}
          onError={(e) => {
            e.currentTarget.src = fallbackImageUrl;
          }}
          alt=""
        />
        <span style={{ padding: "1em" }}> {drink.name} ${drink.price}</span>
        <div style={{ padding: "1em" }}>
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
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
