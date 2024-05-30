import { Drink } from '../types';

interface CardProps {
    drink: Drink;
  }

  const Card: React.FC<CardProps> = ({drink}) => {
    return (
<div className="card" style={{maxWidth: "20vw", height: "fit-content(200px)", padding:"1em"}}>
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
        <img style={{maxWidth: "100%"}} src={`images/${drink.imgUrl}`} alt="" /> 
        <h2 style={{fontVariant: "small-caps" }}> {drink.name}</h2>
        <div style={{fontFamily: "serif", fontStyle: "oblique", display: "flex", flexDirection: "column"}}>
        <span>${drink.price}</span>
        </div>
        <button style={{fontVariant: "small-caps", borderRadius: "0em", color: "white", background: "black", padding: "1em", marginTop: "1rem", alignContent: "center"}}>ADD TO CART</button>
    </div>
</div>
    );
  };
  
export default Card;

