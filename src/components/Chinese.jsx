import React from 'react'
import './Chinese.css'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faReply } from '@fortawesome/free-solid-svg-icons';

const Chinese = () => {
    const navigate = useNavigate();
    const Foods = [
        {
            id: 1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUsyzfe_1fiJTcVrtHUJ1Cz8ip0uW6t_NTnQtv-EkjapGfAos7SL20NlA&s=10",
            name: "Chicken 65",
            type: "Nob-Veg Chinese",
            price: 200,
            points: "Earn up to 255 Loyalty points."
        },
        {
            id: 2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU3d-4FT8nUTwvsJfJ4Xm475zJmZVnbDFQjGaINcGwGN3JA4N4hpGI9dg&s=10",
            name: "Chicken Chopsuey",
            type: "Noodle",
            price: 250,
            points: "Earn up to 265 Loyalty points."
        },
        {
            id: 3,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvb4hN2GGLLL932pTATuoITw8NrF8xfZjAw9pmtxb1SFh5fXZwkeS3DB2J&s=10",
            name: "Chicken Chilli Garlic Fried Rice",
            type: "Fried Rice",
            price: 210,
            points: "Earn up to 255 Loyalty points."
        },
        {
            id: 4,
            image: "https://theyummydelights.com/wp-content/uploads/2019/01/chili-chicken-recipe-9.jpg",
            name: "Chilli Chicken Gravy",
            type: "Non-Veg Chinese",
            price: 220,
            points: "Earn up to 205 Loyalty points."
        },
        {
            id: 5,
            image: "https://static.toiimg.com/thumb/84753069.cms?imgsize=263439&width=800&height=800",
            name: "Chilli Mushroom Dry",
            type: "Veg Chinese",
            price: 220,
            points: "Earn up to 255 Loyalty points."
        },
        {
            id: 6,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyMIKQ0lcP-XU48CD_IeLY_9arL1pE3uwUzL7SBdOkqhq8g-9xz3nJDFW&s=10",
            name: "Chilli Fish",
            type: "Non-Veg Chinese",
            price: 350,
            points: "Earn up to 200 Loyalty points."
        },
        {
            id: 7,
            image: "https://d1w7312wesee68.cloudfront.net/yTbYUOgScf9uTwS3hNU9hPSD_YaYBcJG5CdUbmRSuZ8/resize:fit:720:720/plain/s3://toasttab/restaurants/restaurant-268542000000000000/menu/items/3/item-1400000000079309213_1753317763.jpg",
            name: "Fried Egg Thukpa",
            type: "Thukpa",
            price: 180,
            points: "Earn up to 100 Loyalty points."
        },
        {
            id: 8,
            image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Lemon-Chicken.jpg",
            name: "Lemon Chicken Dry",
            type: "Non-Veg Chinese",
            price: 250,
            points: "Earn up to 205 Loyalty points."
        },
        {
            id: 9,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObOxdqUIQYWTrSWgbVmDalx2PgPGiXRO2hWKqUetaeta_9Eoxol4yeh1q&s=10",
            name: "Crispy Veg- Salt And Pepper",
            type: "Veg Chinese",
            price: 199,
            points: "Earn up to 125 Loyalty points."
        },
        {
            id: 10,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxdAjaAYp8K0YAsWdyIses3i4GQHPy-SV9VM_P6XPQ6iRxZj649lcV3Zsd&s=10",
            name: "Chicken Fried Rice",
            type: "Fried Rice",
            price: 180,
            points: "Earn up to 225 Loyalty points."
        },
        {
            id: 11,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUP39pbfoNyOHkj81QRAIsxrIVSMoNfEZjbWvPVGjUT8dRgq4d96y1g5tG&s=10",
            name: " Tofu Chilli Dry",
            type: "Veg Chinese",
            price: 200,
            points: "Earn up to 250 Loyalty points."
        },
        {
            id: 12,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq2SkrlGGhb27cVLHa5gQ8adgD24uzkd4lBw23ZchZ1p0wxY_Ik8_ihw&s=10",
            name: "Corn And Mixed Fried Rice",
            type: "Fried Rice",
            price: 180,
            points: "Earn up to 225 Loyalty points."
        }
    ]

    return (
        <>
            <div className="Chinese">
                <h4>
                    <Link to="/">Home</Link> &gt;<Link to="/Menu">Menu</Link>&gt;Chinese
                </h4>
                <h1>Chinese</h1>
                <div className="feedRow">
                    <Link to="/MainCourse" className="Icon1">
                        <FontAwesomeIcon icon={faReply} />

                    </Link>

                    <h3 className="MenuText">Menu</h3>
                </div>
                <a href='#' >
                    <Link to="/NonVeg">
                        <img src="https://hajialirestaurant.com/wp-content/uploads/2023/04/veg-fried-rice-scaled.jpg" />
                        <h3>Fried Rice</h3>
                    </Link>
                </a>
                <a href='#' >
                    <Link to="/Veg">
                        <img src="https://static.toiimg.com/photo/53221970/.jpg" />
                        <h3>Mokthuk</h3>
                    </Link>
                </a>
                <a href='#' >
                    <Link to="/Veg">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_HwR8Lu1xvBzQE_T6mZ3Paxsgy0F4q3pYMojz4a1NZX246QXqxb_h345C&s=10" />
                        <h3>Veg Chinese</h3>
                    </Link>
                </a>
                <a href='#' >
                    <Link to="/Veg">
                        <img src="https://t4.ftcdn.net/jpg/09/83/57/01/360_F_983570166_1SQBbVXE7MKiglTMq1XTM0WYtj47ykCC.jpg" />
                        <h3>Noodle</h3>
                    </Link>
                </a>
                <a href='#' >
                    <Link to="/Veg">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UgrNwB92bMjQjj1YTev7eeEgC917moJW3Y93oVSEmj-J970hZuLjQew&s=10" />
                        <h3>Non-Veg Chinese</h3>
                    </Link>
                </a>
                <a href='#' >
                    <Link to="/Veg">
                        <img src="https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/4x3/4x3-veg-thukpa-soup.jpg" />
                        <h3>Thukpa</h3>
                    </Link>
                </a>
            </div>
            <div className="Chinese1">
                <div className="Chinese2">
                    {Foods.map((data) => (
                        <div className="cards" key={data.id}>
                            <img src={data.image} alt={data.name} />

                            <div className="card-content">
                                <h2>{data.name}</h2>
                                <h5>{data.type}</h5>
                                <p className="price">Price ₹{data.price}</p>
                                <h6>{data.points}</h6>
                               <button onClick={() => navigate("/Buy")}>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
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

export default Chinese
