import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartFlatbedSuitcase,faUserAstronaut,faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="nav">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/ContactUs">Contact Us</Link>
        <Link to="/MyAccount">My Account</Link>
      </ul>

      <input type="text" placeholder="Search..." />
      <button>Search</button>


      <Link to="/Cart" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
      </Link>

      <Link to="/Wishlist" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faHeart} />
      </Link>

      <div className="profile-menu">
        <Link to="/MyAccount" onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={faUserAstronaut} />
        </Link>
      </div>




    </div>
  )
}

export default Navbar