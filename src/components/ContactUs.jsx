import React from 'react'
import './Contact.css'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';


const ContactUs = () => {
  return (
    <>
      <div className="Contact">
        <h4>
          <Link to="/">Home</Link> &gt; Contact Us
        </h4>
        <h1>Contact Us</h1>
      </div>
      <div className="Contact1">
        <div className="innerContact1">

          <div className="leftContact">
            <h2>Contact Form</h2>

            <label>Your Name</label>
            <input type="text" />

            <label>Your Email</label>
            <input type="email" />

            <label>Your Message</label>
            <textarea className="messageBox"></textarea>

            <button><a href="">Send Message</a></button>
          </div>

          <div className="rightContact">
            <h1>Address</h1>
            <p>
              <FontAwesomeIcon icon={faLocationDot} className='address-icon' />

              Khalsa Tower, 453/411 Dharampur, opposite Bata showroom
            </p>

            <h1>Phones</h1>
            <p>
              <FontAwesomeIcon icon={faPhone} className="phone-icon" />
              8651373105
              <br />
              <FontAwesomeIcon icon={faPhone} className="phone-icon" />
               9523815456
            </p>

            <h1>Emails</h1>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className='email-icon' />
              zestybites23@gmail.com
            </p>

            <h1>Escalations</h1>
            <p>
              <FontAwesomeIcon icon={faClock} className='escalation-icon' />
              "For urgent concerns or unresolved issues, our escalation team is here to help.
              We ensure every complaint is reviewed carefully and resolved as quickly as possible.
            </p>

            <h1>Follow Us</h1>
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
              <a href='#' >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>

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
        {/* <FontAwesomeIcon icon={faCcvisa} /> */}


      </div>


    </>
  )
}

export default ContactUs
