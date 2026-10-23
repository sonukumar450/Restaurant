import React from 'react'
import './AboutUs.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const AboutUs = () => {
  return (
    <>
      <div className="AboutUs">
        <h4>
          <Link to="/">Home</Link> &gt; About Us
        </h4>
        <h1>About Us</h1>
      </div>

      <div className="AboutUs1">
        <div className="innerAboutUs1">
          <div className="midinnerAbout">
            <div className="text">
              <p>ZestyBites is a modern restaurant dedicated to serving fresh, flavorful, and high-quality meals in a warm and welcoming atmosphere. We combine great taste with excellent service to create a memorable dining experience for every guest.</p>
              <h1>“Every meal you order helps feed someone who needs it.”</h1>
              <p>Every meal you enjoy at ZestyBites helps us support people in need through our food donation initiative.
                With every order, you become a part of spreading kindness and hope.
                Together, we believe that good food can make a meaningful difference in someone's life.
              </p>
              <h1>What we do?</h1>
              <h2>🍛 Meal-for-Meal Program</h2>
              <p>One Meal. One Smile. One Better Tomorrow. ❤️
                Every meal you enjoy at ZestyBites helps provide a meal to someone in need.
                Together, we're sharing kindness, hope, and happiness—one plate at a time. 🍽️✨
              </p>
              <h2>🎓 Student Training</h2>
              <p>Learning Today, Leading Tomorrow. 📚
                We empower aspiring students with real-world restaurant experience and practical skills.
                Our training builds confidence, teamwork, and a strong foundation for a successful career.
              </p>
              <h2>👨‍🍳 Expert Chefs</h2>
              <p>Crafting Every Dish with Passion. ✨
                Our talented chefs blend fresh ingredients with creativity to deliver unforgettable flavors.
                Every meal is prepared with care, quality, and a touch of culinary excellence.
              </p>
            </div>
            <img src="https://monsoonlr.com/wp-content/uploads/2025/10/paneer-tikka-2.webp" />
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

export default AboutUs
