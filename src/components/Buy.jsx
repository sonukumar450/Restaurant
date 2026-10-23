import React from 'react'
import './Buy.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faReply } from '@fortawesome/free-solid-svg-icons';


const Buy = () => {
    return (
        <>
            <div className="Buy">
                <h4>
                    <Link to="/">Home</Link> &gt;<Link to="/Menu">Menu</Link>&gt;
                    platters
                </h4>
            </div>
        </>
    )
}

export default Buy
