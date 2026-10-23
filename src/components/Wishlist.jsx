import React from 'react'
import './Wishlist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


const Wishlist = () => {
    return (
        <>
            <div className="Wishlist">
                <h4>
                    <Link to="/">Home</Link> &gt; Wishlist
                </h4>
                <h1>Wishlist</h1>
            </div>

            <div className="Wishlist1">
                <div className="innerWishlist1">
                    <p>Your wishlist is currently empty</p>
                    <h5>Click the     icons to add products</h5>
                    <Link to="/Menu">
                        <button className='button'>Return To Shop</button>
                    </Link>
                    <FontAwesomeIcon icon={faHeart} />


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
                    <Link to="/AboutUs">
                        <li><a href="#">About Us</a></li>
                    </Link>
                    <Link to="/ContactUs">
                        <li><a href="#">Contact Us</a></li>
                    </Link>
                    <li><a href="#">Contact Us</a></li>
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

export default Wishlist
