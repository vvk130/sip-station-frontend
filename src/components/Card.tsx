import { Drink } from '../types';

interface CardProps {
    drink: Drink;
  }

  const Card: React.FC<CardProps> = ({drink}) => {
    return (
<div className="card" style={{borderRadius:"0.5em", height: "100%", width: "100%", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
        <img style={{maxWidth: "100%", borderTopLeftRadius: "0.5em", borderTopRightRadius: "0.5em", }} src={`images/${drink.imgUrl}`} alt="" />
        <span style={{padding:"1em"}}> {drink.name}</span>
        <div style={{fontFamily: "serif", fontStyle: "oblique", display: "flex", flexDirection: "column"}}>
        <span>${drink.price}</span>
        </div>
        <div style={{padding:"1em"}}>
        <button style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", fontVariant: "small-caps", borderRadius: "0em", color: "white", background: "black", padding: "1em", marginTop: "1rem", alignContent: "center"}}>ADD TO CART</button>
        </div>
    </div>
</div>
    );
  };
  
export default Card;

