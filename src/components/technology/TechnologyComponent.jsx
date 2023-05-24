import React, { useState } from "react";
import "./StyleTechnComponent.scss";
import Image_0 from "../../assets/img/desktop/technology/Bitmap (2).png";
import Image_1 from "../../assets/img/desktop/technology/Bitmap (3).png";
import Image_2 from "../../assets/img/desktop/technology/Bitmap (4).png";

export const TechnologyComponent = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Image_0, Image_1, Image_2];
  const titles = ["LAUNCH VEHICLE", "SPACEPORT", "SPACE CAPSULE"];

  const toggleImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__slider">
          <h1>
            <span>0 3 </span>S P A C E &nbsp;&nbsp;&nbsp;L A U N C H
            &nbsp;&nbsp;&nbsp;1 0 1
          </h1>
          <div>
            {/* Botones para cambiar la imagen */}
            {images.map((image, index) => (
              <button
                className="header__button"
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
        
        <div className="header__information">
          <span>THE TERMINOLOGY…</span>

          <h3>{titles[currentImage]}</h3>
          <p>
            A space capsule is an often-crewed spacecraft that uses a
            blunt-body reentry capsule to reenter the Earth's atmosphere without
            wings. Our capsule is where you'll spend your time during the
            flight. It includes a space gym, cinema, and plenty of other
            activities to keep you entertained.
          </p>
        </div>
        <div className="header__images">
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
