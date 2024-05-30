import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const LinkBar = () => {
  return (
    <div
      style={{
        backgroundColor: "#8cd0e3",
        color: "white",
        textAlign: "center",
        paddingTop: "1rem",
        paddingBottom: "0.1rem",
        display: "flex",
        alignItems: "center", justifyContent: "center", flexDirection: "column",
      }}
    >
    <span style={{fontSize: "4em"}}>SipStation</span>
    <div style={{padding: "1em", display: "flex", alignItems: "center", justifyContent: "center", gap: "1em"}}><a href="/">LINK</a> // <a href="/">LINK</a> // <a href="/">LINK</a> // <a href="/">LINK</a> <a href="/"><SearchIcon/></a><a href="/"> <PersonIcon/></a> <a href="/"><ShoppingCartIcon/></a></div>
    </div>
  );
};

export default LinkBar;
