import imgUrl from '../images/0clus51606772388.jpg';

const Card = () => {
    return (
<div className="card" style={{maxWidth: "20vw", height: "fit-content(200px)", padding:"1em"}}>
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
        <img style={{maxWidth: "100%"}} src={`${imgUrl}`} alt="" /> 
        <h2 style={{fontVariant: "small-caps" }}> Drink Name </h2>
        <div style={{fontFamily: "serif", fontStyle: "oblique", display: "flex", flexDirection: "column"}}>
        <span>Tequila shot</span>
        <span>Tequila shot</span>
        <span>Tequila shot</span>
        </div>
        <button style={{fontVariant: "small-caps", borderRadius: "0em", color: "white", background: "black", padding: "1em", marginTop: "1rem"}}>ADD TO CART</button>
    </div>
</div>
    );
  };
  
export default Card;

