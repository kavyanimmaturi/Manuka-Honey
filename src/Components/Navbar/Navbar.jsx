
import logo from "../../assets/Logo.png"
import cart from "../../assets/cart-icon.png"
import contact from "../../assets/contact.png"
import search from "../../assets/search-icon.png"
import './Navbar.css'

const Navbar = () => {
  return (
     <div className="navbar">
       <ul className="nav-menu">
        <button className="nav-btn">WHICH MANUKA IS FOR ME?</button>
        <li>Shop</li>
        <li>Explore</li>
        <img src={logo} alt="" className="logo"/>
        <li>About</li>
        <li>Rewards</li>
        <li>Contact</li>

      <img src={contact} alt="" className="nav-img"/>
       <img src={search} alt="" className="nav-img"/>
       <img src={cart} alt="" className="nav-img"/>
       </ul>
       
       
     </div>

  )  
}
 


export default Navbar
