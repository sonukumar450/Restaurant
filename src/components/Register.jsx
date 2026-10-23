import './Register.css'
import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Register = () => {
  return (
    <>
      <div className="Register">
        <h4>
          <Link to="/">Home</Link> &gt; Register
        </h4>
        <h1>Register</h1>
      </div>
      <div className="Register1">
        <div className="innerRegister1">
          <label>Email Address*</label>
          <input type='text' />
          <p>A link to set a new password will be sent to your email address.</p>
          <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
          <button>Register</button>

          <div className="Register2">
            <span>You A Member?</span>
            <Link to="/MyAccount">Log In</Link>

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

export default Register
