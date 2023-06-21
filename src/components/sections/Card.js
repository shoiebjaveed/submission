import React, { useState } from "react";
import "./card.css";
import Slanted from "../helpers/input/Slanted";

const Card = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setActiveImageIndex(index);
  };

  const title = "Make your products understand text"
  const description = "Using Cohere’s powerful embeddings models, you can make your applications understand the meaning of text data at massive scale, unlocking powerful semantic search, classification, and rerank capabilities."

  const images = [
    {id: 1, image: 'https://res.cloudinary.com/ddbik48s6/image/upload/v1687324256/image_3_ntaotg.webp'},
    {id: 2, image: 'https://res.cloudinary.com/ddbik48s6/image/upload/v1687324256/image_2_zldkds.webp'},
    {id: 3, image: 'https://res.cloudinary.com/ddbik48s6/image/upload/v1687324256/image_1_gcl0nk.webp'}
  ]

  return (
    <div className="card">
      <div className="card1-card-carousel">
      <img src={images[activeImageIndex].image} alt="img" />
        <div className="card1-carousel-buttons">
          {images.map((image, index) => (
            <button
              key={index}
              className={activeImageIndex === index ? "active" : ""}
              onClick={() => handleImageClick(index)}
            ></button>
          ))}
        </div>
      </div>
      <div className="card1-content-text">
        <h2>{title}</h2>
        <p>{description}</p>
        <Slanted title="CONTACT SALES"/>
      </div>
    </div>
  );
};

export default Card;
