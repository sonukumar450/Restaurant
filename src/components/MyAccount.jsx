import React from 'react'
import './MyAccount.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
const MyAccount = () => {
  return (
    <>
      <div className="MyAccount">
        <h4>
          <Link to="/">Home</Link> &gt; My Account
        </h4>
        <h1>My Account</h1>
      </div>

      <div className="MyAccount1">
        <div className="innerMyAccount1">

          <h2>LogIn</h2>

          <label>Username or Email Address *</label>
          <input type="text" />

          <label>Password *</label>
          <input type="password" />

          <div className="remember">
            <div className="rememberLeft">
              <input type="checkbox" />
              <span>Remember Me</span>
            </div>

            <a href="#">Lost Your Password?</a>
          </div>

          <button>Log In</button>

          <div className="register">
            <span>Not A Member?</span>
             <Link to="/Register">Register</Link>
          </div>

        </div>
      </div>

      <div className="Card3">
        <h3>𝒁𝒆𝒔𝒕𝒚𝑩𝒊𝒕𝒆𝒔 𝑲𝒊𝒕𝒄𝒉𝒆𝒏 🍽️</h3>
        <h4>A community driven kitchen.</h4>
        <div className="Icon">
          <a href='#' >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href='#' >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='#' >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>

        <ul>
          <li><a href="#">About Us</a></li>
          <Link to="/ContactUs">
            <li><a href="#">Contact Us</a></li>
          </Link>
          <li><a href="#">Shipping Policy</a></li>
          <li><a href="#">Refund Policy</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms and Conditions</a></li>
        </ul>
 

        <h1>𝒁𝒆𝒔𝒕𝒚𝑩𝒊𝒕𝒆𝒔</h1>
        <p>Admin sometimes gets high on delicious food and might post some unbelievable offers here in addition to the regular offers. </p>
        <h2>Get flat 30% off on Spending Rs.500 and more.</h2>


      </div>



    </>
  )
}

export default MyAccount