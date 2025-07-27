 import "./Hero.css"
 import HeroImage from "../../block/HeroBlock/Heroimage";
 import HeroText from "../../block/heroBlock/HeroText";
 
 
 const Hero =() =>{
    return(
        <div className="Hero-container">
            <HeroText/>
            <HeroImage/>
            
        </div>

    )
}

export default Hero;