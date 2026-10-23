import React, { useState } from 'react';
import './Menu.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {

    const [start, setStart] = useState(0);

    const Dishes = [
        {
            id: 1,
            image: "https://i.pinimg.com/736x/04/bf/47/04bf476811d92188fff13042975da699.jpg",
            name: "Cakes"
        },
        { 
            id: 2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_0RhPO6bvoYRHgQsap91Euc7PiCICkM6PICsQFClooPVoyKPj1b9DeiA&s=10",
            name: "Eggs"
        },
        {
            id: 3,
            image: "https://content.jdmagicbox.com/v2/comp/mumbai/r9/022pxx22.xx22.120329020649.d3r9/catalogue/chinese-food-world-andheri-west-mumbai-chinese-restaurants-4tlv26xnbr.jpg",
            name: "Chinese"
        },
        {
            id: 4,
            image: "https://i0.wp.com/tomatoblues.com/wp-content/uploads/2019/02/restaurant-style-vegetable-fried-rice-4-490x740.jpg?resize=490%2C740",
            name: "Fried Rice"
        },
        {
            id: 5,
            image: "https://img.magnific.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?semt=ais_hybrid&w=740&q=80",
            name: "Pasta"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
            name: "Pizza"
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
            name: "Burger"
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
            name: "Momos"
        },
        {
            id: 9,
            image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
            name: "Sandwich"
        },
        {
            id: 10,
            image: "https://t4.ftcdn.net/jpg/05/17/96/89/360_F_517968988_hFHjQT6Flfksjx8n0KxfvMtP2tqlmGKk.jpg",
            name: "Biryani"
        }
    ];

    const next = () => {
        setStart((prev) => (prev + 1) % Dishes.length);
    };

    const prev = () => {
        setStart((prev) => (prev - 1 + Dishes.length) % Dishes.length);
    };

    const visibleDishes = [];

    for (let i = 0; i < 5; i++) {
        visibleDishes.push(Dishes[(start + i) % Dishes.length]);
    }


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
            <div className="Menu1">
                <h4>
                    <Link to="/">Home</Link> &gt; Menu
                </h4>

                <h1>Menu</h1>

                <div className="FeedRow1" onClick={prev}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>

                <div className="MenuCards">
                    {visibleDishes.map((dish) => (
                        <div className="MenuItem" key={dish.id}>
                            <img src={dish.image} alt={dish.name} />
                            <h3>{dish.name}</h3>
                        </div>
                    ))}
                </div>

                <div className="FeedRow2" onClick={next}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>




            <div className="Menu2">
                <div className="Menu3">
                    {Foods.map((data) => (
                        <div className="cards" key={data.id}>
                            <img src={data.image} alt={data.name} />

                            <div className="card-content">
                                <h2>{data.name}</h2>
                                <h5>{data.type}</h5>
                                <p className="price">Price ₹{data.price}</p>
                                <h6>{data.points}</h6>
                                <button>Buy Now</button>
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
    );
};

export default Menu;