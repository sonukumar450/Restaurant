import React from 'react'
import './Combos.css'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faReply } from '@fortawesome/free-solid-svg-icons';

const Combos = () => {
    const navigate = useNavigate();
    const Foods = [
        {
            id: 1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdYvPcyWQsNG3qJo5usoi7ZPqQAzp4pRwBwlcIR5Qv1cq9FV_R_FdkItrm&s=10",
            name: "Chinese Non Veg Platter",
            type: "Platter",
            price: 300,
            points: "Earn up to 255 Loyalty points."
        },
        {
            id: 2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdYvPcyWQsNG3qJo5usoi7ZPqQAzp4pRwBwlcIR5Qv1cq9FV_R_FdkItrm&s=10",
            name: "Chinese Platter",
            type: "Platter",
            price: 350,
            points: "Earn up to 265 Loyalty points."
        },
        {
            id: 3,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2gooOgSBzCyuph8e6KBYO9ODiLhu6zDqkc6CbXJpTRJGhvNqgDK6Jq1m&s=10",
            name: "Non-Veg Tandoori Platter",
            type: "Platter",
            price: 299,
            points: "Earn up to 255 Loyalty points."
        },
        {
            id: 4,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv013DWJfq1-nOn95JjSTIsJfzxGz2n2mLh7m2RoMDvHKVb6zJSaLA9TmQ&s=10",
            name: "Tandoori Veg Platerr",
            type: "Platter",
            price: 399,
            points: "Earn up to 205 Loyalty points."
        },
        {
            id: 5,
            image: "https://www.palatesdesire.com/wp-content/uploads/2020/03/Easy_mushroom_masala@palates_desire-1024x683.jpg",
            name: "Mushroom Masala",
            type: "Veg Main Course",
            price: 180,
            points: "Earn up to 255 Loyalty points."
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
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL_3sFO_IdKuG-RkxVHSpBXsCkYHI3qEt_sj5bHPWE_M-k_LnAbEQO2LCC&s=10https://www.cubesnjuliennes.com/wp-content/uploads/2019/01/chicken-kali-mirch-recipe-500x500.jpg",
            name: "Bhindi Masala",
            type: "Veg Main Course",
            price: 250,
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
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRxbip4kY1HT5s6268-uMYmStabz9J3dnDI0opBL2Hw_8Mx4LF3UwmndXa&s=10",
            name: "Matar Paneer",
            type: "Veg Main Course",
            price: 180,
            points: "Earn up to 225 Loyalty points."
        },
        {
            id: 11,
            image: "https://cdn.prod.website-files.com/65e2ec4e51f6693a3af9151d/660bbc2bf96bfa42f8c93333_f0ef7b68-009e-4c37-bdd5-f67ca31339eb.webp",
            name: "Panneer Butter Masala",
            type: "Veg Main Course",
            price: 200,
            points: "Earn up to 250 Loyalty points."
        },
        {
            id: 12,
            image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Authentic-Punjabi-Rajma-Recipe-500x500.jpg",
            name: "Rajma Masala",
            type: "Veg Main Course",
            price: 180,
            points: "Earn up to 225 Loyalty points."
        }
    ]
    return (
        <>
            <div className="Combos">
                <h4>
                    <Link to="/">Home</Link> &gt;<Link to="/Menu">Menu</Link>&gt; Combos
                </h4>
                <h1>Combos And Thalis</h1>

                <div className="feedRow">
                    <Link to="/Menu" className="Icon1">
                        <FontAwesomeIcon icon={faReply} />

                    </Link>

                    <h3 className="MenuText">Menu</h3>
                </div>
                <a href='#' >
                    <Link to="/NonVeg">
                        <img src="https://i0.wp.com/lovelaughmirch.com/wp-content/uploads/2022/04/Matar-Paneer-Pulao-4.jpg?resize=645%2C839&ssl=1" />
                        <h3>Combos</h3>
                    </Link>
                </a>
                <a href='#' >
                    <Link to="/Veg">
                        <img src="https://content3.jdmagicbox.com/comp/solapur/g1/9999px217.x217.220130202125.a3g1/catalogue/thalis-and-combos-antrolikar-nagar-solapur-gxc1i8hieo.jpg" />
                        <h3>Family Combos</h3>
                    </Link>
                </a>
                <a href='#' >
                    <Link to="/Veg">
                        <img src="https://t4.ftcdn.net/jpg/02/75/39/13/360_F_275391367_Hro3Ql1iFsCNtd86zWYuqa0Qe5cc7goE.jpg" />
                        <h3>Thalis</h3>
                    </Link>
                </a>
            </div>

            <div className="Combos1">
                <div className="Combos2">
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

export default Combos
