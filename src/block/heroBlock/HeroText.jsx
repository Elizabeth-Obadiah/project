import "./HeroBlock.css"

const HeroText =() =>{
    return(
        <div className="hero-img-container">
            <h1> Make remote work</h1>
            <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar. </p>
        <button className="btn-2">Learn More</button>
       <br/>
       <br/>
       <br/>
        <img src="src/assets/client-audiophile.svg" className="img-con" alt=""/>
        <img src="src/assets/client-databiz.svg" className="img-con" alt=""/>
        <img src="src/assets/client-maker.svg" className="img-con" alt=""/>
        <img src="src/assets/client-meet.svg"  className="img-con" alt=""/>
        </div>
    )
}
export default HeroText 