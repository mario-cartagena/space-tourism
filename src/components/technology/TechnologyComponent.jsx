import React, { useState } from "react";
import "./StyleTechnComponent.scss";
import Image_0 from "../../assets/img/technology/Bitmap (2).png";
import Image_1 from "../../assets/img/technology/Bitmap (3).png";
import Image_2 from "../../assets/img/technology/Bitmap (4).png";
import { technologyData } from "../../utils/data"


export const TechnologyComponent = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Image_0, Image_1, Image_2];
  const titles = ["LAUNCH VEHICLE", "SPACEPORT", "SPACE CAPSULE"];

  const toggleImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <header className="technology">
      <div className="technology__content">
        <div className="technology__slider">
          <h1>
            <span>0 3 </span>S P A C E &nbsp;&nbsp;&nbsp;L A U N C H
            &nbsp;&nbsp;&nbsp;1 0 1
          </h1>
          <div>
            {/* Botones para cambiar la imagen */}
            {images.map((image, index) => (
              <button
                className="technology__button"
                key={index}
                onClick={() => toggleImage(index)}
                style={{
                  backgroundColor:
                    currentImage === index ? "#fff" : "transparent",
                  color: currentImage === index ? "#000" : "#fff",
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        
        <div className="technology__information">
          <span>THE TERMINOLOGY…</span>

          <h3>{titles[currentImage]}</h3>
          <p>{technologyData[currentImage].info}</p>
        </div>
        <div className="technology__images">
          {/* Mostrar solo la imagen actual */}
          <img
            src={images[currentImage]}
            alt={`Technology ${currentImage + 1}`}
          />
        </div>
      </div>
    </header>
  );
};
