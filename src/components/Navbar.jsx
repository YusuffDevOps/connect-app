import React from "react";
import {Link} from "react-router-dom"
import Logo from "../assets/Logo.jpg"
import '../index.css'
export const Navbar = ()=> {
 
return  (<div>
 <nav>
 <img src={Logo}  className="size-20 logo-img mr-20" alt="Connect Logo"/>
 <h2 className="nav-link mr-10">Features</h2>
 <h2 className="nav-link mr-10">Pricing</h2>
 <h2 className="nav-link mr-10">Products</h2>
 <h2 className="nav-link mr-10">About Us</h2>
 </nav>
 </div>)
   
}

// export default Navbar;