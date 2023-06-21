import React, { useState } from "react";
import "./card2.css";
import Slanted from "../helpers/input/Slanted";

const Card2 = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setActiveImageIndex(index);
  };

  const title = "Make your products generate or summarize text"
  const description = "Our Command model quickly and accurately generates text such as product descriptions, blog posts, and articles. Use it also to create concise, relevant, customizable summaries of text and documents."

  const images = [
    {id: 1, image: 'https://res.cloudinary.com/ddbik48s6/image/upload/v1687326926/image_4_e4r64l.webp'},
    {id: 2, image: 'https://res.cloudinary.com/ddbik48s6/image/upload/v1687326925/image_5_m3ylmu.webp'}
  ]

  
  return (
    <div className="card">
      <div className="card2-content-text">
        <h2>{title}</h2>
        <p>{description}</p>
        <Slanted title="CONTACT SALES"/>
      </div>
      <div className="card2-card-carousel">
      <img src={images[activeImageIndex].image} alt="Carousel" />
        <div className="card2-carousel-buttons">
          {images.map((image, index) => (
            <button
              key={index}
              className={activeImageIndex === index ? "active" : ""}
              onClick={() => handleImageClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card2;
