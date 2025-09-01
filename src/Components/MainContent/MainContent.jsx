import down_arrow from "../../assets/down_arrow.png";
import img1 from "../../assets/img-1.png";
import img11 from "../../assets/img-11.png";
import img9 from "../../assets/img-12.png";
import img17 from "../../assets/img-14.png";
import img16 from "../../assets/img-15.png";
import img2 from "../../assets/img-2.png";
import color_club from "../../assets/img-22.png";
import img8 from "../../assets/img-24.png";
import img12 from "../../assets/img-25.png";
import img15 from "../../assets/img-26.png";
import img3 from "../../assets/img-3.jpg";
import img4 from "../../assets/img-4.png";
import img5 from "../../assets/img-5.png";
import img6 from "../../assets/img-6.png";
import img7 from "../../assets/img-7.png";
import { default as img10, default as img14 } from "../../assets/img-8.png";
import img13 from "../../assets/img-9.png";
import info from "../../assets/info.png";
import input_img from "../../assets/Input.png";
import right_arrow from "../../assets/right-side-arrow.png";
import retry from "../../assets/try-again.png";
import vector from "../../assets/Vector.png";
import "./MainContent.css";

const MainContent = () => {
    return (
        <div className="main-content-container">
            <div className="container-left">
                <img src={img1} alt="" className="left-img" />
                <img src={img2} alt="" className="left-img" />  <br />
                <img src={img3} alt="" className="left-middle-img" /> <br />
                <img src={img4} alt="" className="left-img" />
                <img src={img5} alt="" className="left-img" />  <br />
                <img src={img6} alt="" className="left-img" />
                <img src={img7} alt="" className="left-img" />  <br />
            </div>

            <div className="container-right">
                <h1 className="select">SIZE (SELECT ONE)</h1>
                <h2>Variant: 125g | 4.4oz</h2>

                <div className="variants-cont">
                    <img src={img8} alt="" className="border-img" />
                    <img src={img9} alt="" />
                    <img src={img10} alt="" />
                    <img src={img11} alt="" /> <br />
                    <img src={img12} alt="" />
                    <img src={img13} alt="" />
                    <img src={img14} alt="" />
                </div>

                <div className="payment-cont">
                    <h1 className="payment-text">PAYMENT OPTIONS (SELECT ONE)</h1>
                    <div className="payment-boxes">
                        <div className="purchase-box">
                            <h1 className="purchase">One-time <br /> purchase </h1>
                            <p className="money">$55.88 <br /> USD</p>
                        </div>
                        <div className="subscribe-box">
                            <h1 className="purchase">Subscribe & Save <br /> 20% </h1>
                            <p className="money">$44.70 <br /> USD</p>
                        </div>
                    </div>
                    <div className="retry">
                        <img src={retry} alt="" className="retry-img" />
                        <h1>What is a subscription?</h1>
                    </div>
                </div>
                <div className="payment-cont">
                    <h1 className="payment-text">SELECT QUANTITY</h1>
                    <div className="payment-boxes">
                        <div className="purchase-box">
                            <h1 className="purchase quantity"> -       1      + </h1>
                        </div>
                        <div className="cart-box">
                            <h1 className="purchase cart-text">ADD TO CART</h1>
                        </div>
                    </div>
                    <div className="beauty-cont">
                        <div className="beauty-bundle">
                            <img src={vector} alt="" className="left-arrow" />
                            <h1 className="bundle-text">Beauty Bundle</h1>
                            <img src={right_arrow} alt="" className="right-arrow" />
                        </div>
                        <div className="bundle-cards">
                            <div className="card">
                                <img src={img15} alt="" className="card-img" />
                            </div>
                            <p className="plus">+</p>
                            <div className="card">
                                <img src={img16} alt="" className="card-img" />
                            </div>
                            <p className="plus">+</p>
                            <div className="card">
                                <img src={img17} alt="" className="card-img" />
                            </div>
                            <div className="beauty">
                                <h1 className="beauty-amount"><span class="amount">$478.75 USD </span><span className="span"> $430.88 USD</span> <span className="save">save 10%</span></h1>
                                <button className="add-to-cart">ADD BUNDLE TO CART</button>
                            </div>
                        </div>
                        <div className="name-cards">
                            <div className="card">
                                <h1 className="card-text">UMF 20+</h1>
                                <div className="small-card">
                                    <h1>250g</h1>
                                    <img src={down_arrow} alt="" className="down-arrow" />
                                </div>
                            </div>

                            <div className="card">
                                <h1 className="card-text">UMF 24+</h1>
                                <div className="small-card">
                                    <h1>250g</h1>
                                    <img src={down_arrow} alt="" className="down-arrow" />
                                </div>
                            </div>

                            <div className="card">
                                <h1 className="card-text">Wooden <br /> Spoon</h1>
                            </div>
                        </div>
                    </div>
                    <div className="reward-cont">
                        <img src={color_club} alt="" className="color-club-img" />
                        <p className="color-text">Colorclub members earn up to</p>
                        <p className="color-para"><span className="number">56</span>     reward points when buy this item.  Sign up or log in.</p>
                    </div>
                </div>
                <div className="delivery-details">
                    <h1 className="delivery">DELIVERY <br /> FREE DELIVERY ON ORDERS OVER $30</h1>
                    <h1 className="delivery-date">ESTIMATED DELIVERY DATE <br /> Jun 9 - Jun 13 to</h1>
                </div>
                <hr className="line" />
                <div className="payment-details-cont">
                    <h1 className="payment">AFTER PAY</h1>
                    <p className="free-payment">or 4 interest-free payments of $13.97 with <span className="pay">Afterpay</span> <img src={info} className="info-img" /></p>
                    <hr className="line" />
                    <div className="umf-scale-cont">
                        <h1 className="umf-text">UMF™ SCALE</h1>
                        <div className="umf-scale">
                            <h1>UMF™ 10+</h1>
                            <h1>UMF™ 15+</h1>
                            <h1>UMF™ 20+</h1>
                            <h1>UMF™ 24+</h1>
                            <h1>UMF™ 26+</h1>
                            <h1>UMF™ 28+</h1>
                            <h1>UMF™ 30+</h1>
                        </div>
                        <div className="separator-cont">
                            <hr className="separator orange" />
                            <hr className="separator red" />
                            <hr className="separator pink" />
                            <hr className="separator violet" />
                            <hr className="separator blue" />
                            <hr className="separator green" />
                            <hr className="separator navy-blue" />
                        </div>
                    </div>
                     <div className="profile-cont">
                        <h1 className="taste-text">TASTE PROFILE</h1>
                        <img src={input_img} alt="" className="input-img"/>
                        </div>
                </div>
               <div className="footer-section">
                <h1 className="footer-text">Clean & Intense</h1>
                <h1 className="footer-text">Bold & Intense</h1>
               </div>
            </div>
        </div>
    )
}

export default MainContent
