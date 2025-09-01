import background from "../../assets/backgroung.png";
import img2 from "../../assets/img-16.png";
import img3 from "../../assets/img-17.png";
import img4 from "../../assets/img-18.png";
import img5 from "../../assets/img-19.png";
import img6 from "../../assets/img-20.png";
import img7 from "../../assets/img-21.png";
import image from "../../assets/img-23.png";
import info from "../../assets/info.png";
import rating from "../../assets/rating.png";
import "./Banner.css";


const Banner = () => {
  return (
    <div className="banner-cont">
      <div className="banner-left">
        
        <img src={background} alt="" className="banner-img"/>
        <img src={image} alt="" className="banner-img img" />
      </div>
      <div className="banner-right">
        <div className="banner">
        <h1 className="banner-title">Manuka Honey <br/> UMF™ 24+ <br/> MGO 1122+</h1>
        <div className="main-btn">
          <img src={info} alt="" className="info"/>
          <h1>What is UMF and MGO?</h1>
        </div>
        <div className="rating">
            <img src={rating} alt="" className="review-img"/>
            <p className="review">825 REVIEWS</p>
          </div>
          <div className="optimiser-cont">
            <h1>Optimiser</h1>
            <p className="para">
              For those times in life when quality comes first. This pure UMF 24+ Manuka <br/>
              Honey is powerfully active,sourced from wild and rugged locations around <br/>
              Aotearoa New Zealand and great for almost all uses. It has a full, delicious <br/>
              flavour and your body will love you for it.
            </p>
          </div>
          <div className="verifications-cont">
            <img src={img2} alt="" />
            <img src={img7} alt="" />
            <img src={img6} alt="" />
            <img src={img5} alt="" />
            <img src={img4} alt="" />
            <img src={img3} alt="" />
          </div>
        </div>
        
      </div>
    </div>
    
  )
}

export default Banner

