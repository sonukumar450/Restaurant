import React from 'react'
import './NonVeg.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faReply } from '@fortawesome/free-solid-svg-icons';

const NonVeg = () => {
  const Foods = [
    {
      id: 1,
      image: "https://www.cubesnjuliennes.com/wp-content/uploads/2019/01/chicken-kali-mirch-recipe-500x500.jpg",
      name: "Boneless  Kali Mirch With White Gravy",
      type: "Non-Veg Main Course",
      price: 250,
      points: "Earn up to 255 Loyalty points."
    },
    {
      id: 2,
      image: "https://i0.wp.com/recipeonplate.com/wp-content/uploads/2022/01/chicken-lababdar.jpg?resize=748%2C1125&ssl=1",
      name: "Boneless Chicken Lababdar",
      type: "Non-Veg Main Course",
      price: 249,
      points: "Earn up to 265 Loyalty points."
    },
    {
      id: 3,
      image: "https://www.greenchickchop.in/cdn/shop/files/KadhaiChickenBoneless_result.webp?v=1682593085",
      name: "Boneless Kadhai Chicken ",
      type: "Non-Veg Main Course",
      price: 299,
      points: "Earn up to 355 Loyalty points."
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbkC-T3kqM7OlEzKxfOTRb4wmaizYOpsDCCwm_3FueCik_6DLcwS9eYdW0&s=10",
      name: "Chicken Changezi ",
      type: "Non-Veg Main Course",
      price: 249,
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
      image: "https://flavorquotient.com/wp-content/uploads/2015/03/Chicken-Do-Pyaza-1-6062.jpg",
      name: "Chicken Do Pyaza",
      type: "Non-Veg Main Course",
      price: 299,
      points: "Earn up to 230 Loyalty points."
    },
    {
      id: 7,
      image: "https://static.vecteezy.com/system/resources/thumbnails/038/948/695/small/ai-generated-chicken-korma-isolated-on-white-indian-cuisine-meat-curry-dish-with-coconut-milk-masala-asian-food-photo.jpg",
      name: "Chicken Korma",
      type: "Non-Veg Main Course",
      price: 209,
      points: "Earn up to 180 Loyalty points."
    },
    {
      id: 8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuwGWwj1QUzw0BYVszhN10lCVPeop0LkKu7ObbYYqhRQ&s=10",
      name: "Egg Curry",
      type: "Non-Veg Main Course",
      price: 185,
      points: "Earn up to 205 Loyalty points."
    },
    {
      id: 9,
      image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Perfectly-balanced-fish-curry.jpg",
      name: "Fish Curry",
      type: "Non-Veg Main Course",
      price: 165,
      points: "Earn up to 325 Loyalty points."
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
      <div className="NonVeg">
        <h4>
          <Link to="/">Home</Link> &gt;<Link to="/Menu">Menu</Link>&gt; <Link to="/MainCourse">Main Course</Link>&gt; Non-Veg Main Course
        </h4>
        <h1>Non-Veg Main Course</h1>
        <div className="feedRow">
          <Link to="/MainCourse" className="Icon1">
            <FontAwesomeIcon icon={faReply} />
          </Link>
          <h3 className="MenuText">Main Course</h3>

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




      <div className="NonVeg1">
        <div className="NonVeg2">
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


      








    </>
  )
}

export default NonVeg
