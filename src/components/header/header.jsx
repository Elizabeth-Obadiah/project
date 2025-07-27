import "./Header.css";
import HeaderNav1 from "../../block/HeaderBlock/HeaderNav1";
import HeaderNav2 from "../../block/HeaderBlock/HeaderNav2";



const Header =() =>{
    return(
        <div className="container">  
        <HeaderNav1/>
        <HeaderNav2/>
        </div>
    )
}

export default Header;