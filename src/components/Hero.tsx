import header from '../images/header.jpg';
import 'animate.css';

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url('${header}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#e77822",
        textAlign: "center",
        fontWeight: "bold",
        paddingTop: "0.3rem",
        paddingBottom: "0.3rem",
        padding: "10rem",
        objectFit: "cover",
        maxWidth: "100vw",
      }}
    >
    <div style={{width: "100%"}}>
    <div style={{padding: "1em", paddingLeft: "1em", paddingRight: "1em", textAlign: "left", textShadow: "0.1em 0.1em white"}}>
      <span className='font-style-2' style={{fontSize: "4em"}}>Drink for every occasion</span>
      <p style={{fontSize: "1.5em"}}>When life gives you lemons... make a limoncello!</p>
    </div>
    </div>
    </div>
  );
};

export default Hero;
