import React from 'react'
import './MainCourse.css'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faReply } from '@fortawesome/free-solid-svg-icons';


const MainCourse = () => {
    const navigate = useNavigate();
    const Foods = [
        {
            id: 1,
            image: "https://mytastycurry.com/wp-content/uploads/2016/11/Aloo-gobhi-achari-683x1024.jpg",
            name: "Achari Aloo Gobi",
            type: "Veg Main Course",
            price: 180,
            points: "Earn up to 100 Loyalty points."
        },
        {
            id: 2,
            image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2024/05/achari-paneer-recipe-500x375.jpg",
            name: "Achari Paneer Masala",
            type: "Veg Main Course",
            price: 249,
            points: "Earn up to 150 Loyalty points."
        },
        {
            id: 3,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6ZvMutrJKeguqsT_pTTA42GH3_P08H3c5BbJY1dW5NkdKoHSz4ZwZ08D&s=10",
            name: "Afghani Chaap Gravy",
            type: "Non-Veg Main Course",
            price: 180,
            points: "Earn up to 125 Loyalty points."
        },
        {
            id: 4,
            image: "https://media.istockphoto.com/id/1096057548/photo/aloo-gobi-cauliflower-potato-curry.jpg?s=612x612&w=0&k=20&c=FHnOLRLfBn0zQDHsy_gutmT0iXa4D0g5vg1uxJnc_40=",
            name: "Aloo Gobhi",
            type: "Veg Main Course",
            price: 170,
            points: "Earn up to 105 Loyalty points."
        },
        {
            id: 5,
            image: "https://ministryofcurry.com/wp-content/uploads/2020/11/achari-chicken_-2-scaled.jpg",
            name: "Achari Chicken Gravy",
            type: "Non-Veg Main Course",
            price: 249,
            points: "Earn up to 125 Loyalty points."
        },
        {
            id: 6,
            image: "https://www.jcookingodyssey.com/wp-content/uploads/2022/06/Aloo-Matar-No-Onion-Garlic2Bjpg2B12Bof2B5.jpg.webp",
            name: "Aloo Matar",
            type: "Veg Main Course",
            price: 160,
            points: "Earn up to 200 Loyalty points."
        },
        {
            id: 7,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQARJhB0IoKLsBWx21oFMUR9NMob0QmpNZsb9xqRMZzvR2jmPj3yydJN68&s=10",
            name: "Aloo Methi",
            type: "Veg Main Course",
            price: 180,
            points: "Earn up to 100 Loyalty points."
        },
        {
            id: 8,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL_3sFO_IdKuG-RkxVHSpBXsCkYHI3qEt_sj5bHPWE_M-k_LnAbEQO2LCC&s=10",
            name: "Bhindi Masala",
            type: "Veg Main Course",
            price: 180,
            points: "Earn up to 205 Loyalty points."
        },
        {
            id: 9,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivMSwhT7-z17s-jFRWBN3c3jiW2gH07Z-bi9SqYsHmsUPbQ2f5QNfjUM&s=10",
            name: "Afghani Chaap Gravy ",
            type: "Veg Main Course",
            price: 165,
            points: "Earn up to 125 Loyalty points."
        },
        {
            id: 10,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAgjUkN43fp3ee30e0OQWVvajY7u_q_PxH0u40N6Jx7IR72IXUR4zY91Zm&s=10",
            name: "Boneless Afghani Chicken Gravy",
            type: "Non-Veg Main Course",
            price: 249,
            points: "Earn up to 225 Loyalty points."
        },
        {
            id: 11,
            image: "https://healthyfitnessmeals.com/wp-content/uploads/2020/01/Butter-chicken.jpg",
            name: "Boneless Butter Chicken",
            type: "Non-Veg Main Course",
            price: 299,
            points: "Earn up to 250 Loyalty points."
        },
        {
            id: 12,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROm6Li738L_EIhBqotVvE27Ko40NUP2F9XXWZcJlPbPc0kOMrZ0V53ucg&s=10",
            name: "Boneless Achari Chicken Gravy",
            type: "Non-Veg Main Course",
            price: 249,
            points: "Earn up to 225 Loyalty points."
        }
    ]


    return (
        <>
            <div className="mainCourse">
                <h4>
                    <Link to="/">Home</Link> &gt;<Link to="/Menu">Menu</Link>&gt; Main Course
                </h4>
                <h1>Main Course</h1>

                <div className="feedRow">
                    <Link to="/Menu" className="Icon1">
                        <FontAwesomeIcon icon={faReply} />

                    </Link>

                    <h3 className="MenuText">Menu</h3>
                </div>
                <a href='#' >
                    <Link to="/NonVeg">
                        <img src="https://www.awesomecuisine.com/wp-content/uploads/2012/04/Kobari-Kodi-Pulusu-Chicken-in-Dry-Coconut-Gravy.jpg" />
                        <h3>Non-Veg Main Course</h3>
                    </Link>
                </a>
                <a href='#' >
                    <Link to="/Veg">
                        <img src="https://www.cookingcarnival.com/wp-content/uploads/2025/09/Vegetable-Dum-Biryani-5.jpg" />
                        <h3>Veg Main Course</h3>
                    </Link>
                </a>
            </div>

            <div className="MainCourse1">
                <div className="MainCourse2">
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

export default MainCourse
