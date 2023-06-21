import React, { useState } from "react";
import "./card3.css";
import Shapes from "../helpers/input/Shapes";
import Card4 from "./Card4";

const Card3 = () => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handleImageClick = (index) => {
      setActiveImageIndex(index);
    };

    const images = [
        {id: 1, image: 'https://res.cloudinary.com/ddbik48s6/image/upload/v1687329170/image2_obehky.webp'},
        {id: 2, image: 'https://res.cloudinary.com/ddbik48s6/image/upload/v1687329170/image_d1gpsg.webp'},
        {id: 3, image: 'https://res.cloudinary.com/ddbik48s6/image/upload/v1687329170/image1_hueqqu.webp'}
      ]

  return (
    <div className="card3">
      <div className="black-bg">
        <div className="image-bg">
          <div className="content-text">
            <h2>Accelerate the next wave of productivity</h2>
            <p>
              Today’s language models already show productivity gains in
              white-collar tasks of over 50%. The coming Intelligent Assistants
              will understand your enterprise data, giving your employees the
              tools to make decisions far more quickly than we can imagine
              today.
            </p>
            <p>
            Source: MIT Shakked Noy / Whitney Zhang.
            </p>
          </div>
          <div className="img-card-carousel">
      <img src={images[activeImageIndex].image} alt="imgs" />
        <div className="img-carousel-buttons">
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
        {/* <Shapes />
        <Card4 /> */}
      </div>
      
    </div>
  );
};

export default Card3;
