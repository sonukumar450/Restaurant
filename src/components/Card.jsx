import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <>
      <div className="Card4">
        <p> When you place an order with us you,re not only enjoying delicious food and impeccable service but also directly helping to improve the lives of people in the community.</p>
      </div>
      <div className="card" >
        <Link to="/MainCourse">
          <div className="Card1">
            <img src="https://img.magnific.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg?semt=ais_hybrid&w=740&q=80 " />
            <h2>Main Course</h2>
          </div>
        </Link>
        <Link to="/Chinese">
          <div className="Card1">
            <img src=" https://images.unsplash.com/photo-1585032226651-759b368d7246?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8fDA%3D" />
            <h2>Chinese</h2>
          </div>
        </Link>
        <Link to="/Platters">
          <div className="Card1">
            <img src="https://orders.popskitchen.in/storage/2025/08/image.png" />
            <h2>Platters</h2>
          </div>
        </Link>
        <Link to="/Combos">
          <div className="Card1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT643c6yut6pNypaHhNpekO-rM5LiP5pc0bP7JvNws5BQ-3Tw4t9UsuUz3l&s=10" />
            <h2>Combos and Thali</h2>
          </div>
        </Link>
        <div className="Card1">
          <img src="https://media.istockphoto.com/id/1269099250/photo/chicken-lollipop-on-a-white-platter-garnished-with-scallion.jpg?s=612x612&w=0&k=20&c=5n0zRUwjmDhUJcj3o-sGnKTrG5pAp0HC4otSfIa4SPE=" />
          <h2>Starters</h2>
        </div>
        <div className="Card1">
          <img src="https://media.istockphoto.com/id/1333127665/photo/chicken-biryani-spicy-indian-malabar-biryani-hyderabadi-biryani-dum-biriyani-pulao-golden.jpg?s=612x612&w=0&k=20&c=63UXYPOISm8nJ8SNK79dDm0w1gY6jXzYQP0heL6fnOg=" />
          <h2>Rice and Biryani</h2>
        </div>
        <div className="Card1">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_WkwssS7zxulizwD0XG6PgcjJTgwx1-AIJosEPu14u9hLnqKc-xuUiU4&s=10" />
          <h2>Breads</h2>
        </div>
        <div className="Card1">
          <img src="https://img.freepik.com/premium-photo/kolkatastyle-paneer-kathi-roll-classic-cottage-cheese-wrap_861171-11514.jpg?w=360" />
          <h2>Rolls</h2>
        </div>
        <div className="Card1">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYu0yPaTQhS7in0AdQYDnKbLCgVgpev3qgk2TGKbOPMhOMFNbHklqWwiHs&s=10" />
          <h2>Bowls</h2>
        </div>
        <div className="Card1">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9e8Yis1_2i7s7OyxsWEkTG7980SB0v4VdjhA27ND-9rm7flga_Lnqssrq&s=10" />
          <h2>Pasta</h2>
        </div>
        <div className="Card1">
          <img src="https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2015/12/Aloo-Pudina-Raita-02.jpg" />
          <h2>Addons</h2>
        </div>
        <div className="Card1">
          <img src="https://www.allrecipes.com/thmb/p4F_knUDCrUNusNOTyjY_dCp8d4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13338-quick-and-easy-vegetable-soup-DDMFS-4x3-402702f59e7a41519515cecccaba1b80.jpg" />
          <h2>Soups</h2>
        </div>
        <div className="Card1">
          <img src="https://ranveerbrar.com/wp-content/uploads/2021/02/Chicken-Spring-Rolls-1.jpg" />
          <h2>Snacks</h2>
        </div>
        <div className="Card1">
          <img src="https://bentotsss.co.uk/cdn/shop/articles/winter_warmer_drink_recipes_a20ed184-00dc-4e2c-b82b-0a6ae68daf66.jpg?v=1768575028&width=1100" />
          <h2>Drinks</h2>
        </div>
        <div className="Card1">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/057/798/594/small/a-slice-of-pepperoni-pizza-on-a-paper-plate-photo.jpg" />
          <h2>Pizzas</h2>
        </div>
      </div>
      <div className="Card2">
        <div className="inner-Card2">

          <h2>Review</h2>

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

export default Card
