import React, { useEffect, useState } from 'react'

const slides = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${slides[current]})` }}
    >
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>
          Meals that
          <br />
          make a
          <br />
          <span>difference</span>
        </h1>

        <button>Order Now</button>
      </div>

      <div className="arrow left" onClick={prevSlide}>
        ❮
      </div>

      <div className="arrow right" onClick={nextSlide}>
        ❯
      </div>

      <div className="circle-progress">
        <svg width="45" height="45">
          <circle
            className="bg"
            cx="22.5"
            cy="22.5"
            r="18"
          />

          <circle
            key={current}
            className="progress"
            cx="22.5"
            cy="22.5"
            r="18"
          />
        </svg>
      </div>
       
    </section>
     
  );
};

export default HeroSection;