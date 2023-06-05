import React, { useState, useEffect } from "react";
import "./StyleTechnComponent.scss";
import { technologyData } from "../../utils/data";

export const TechnologyComponent = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const titles = technologyData.map((item) => item.title);

  const toggleImage = (index) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 375);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="technology">
      <div className="technology__content">
        <div className="technology__slider">
          <h1>
            <span>0 3 </span>S P A C E &nbsp;&nbsp;&nbsp;L A U N C H
            &nbsp;&nbsp;&nbsp;1 0 1
          </h1>
          <div>
            {technologyData.map((item, index) => (
              <button
                className="technology__button"
                key={item.id}
                onClick={() => toggleImage(index)}
                style={{
                  backgroundColor: currentImage === index ? "#fff" : "transparent",
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

        <div className="technology__image">
          <img
            src={
              isMobile
                ? technologyData[currentImage].imageMobile
                : window.innerWidth <= 768
                ? technologyData[currentImage].imageResponsive
                : technologyData[currentImage].image
            }
            alt={`Technology ${currentImage + 1}`}
          />
        </div>
      </div>
    </div>
  );
};



// import React, { useState } from "react";
// import "./StyleTechnComponent.scss";
// import { technologyData } from "../../utils/data";

// export const TechnologyComponent = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const images = technologyData.map((item) => item.image);
//   const titles = technologyData.map((item) => item.title);

//   const toggleImage = (index) => {
//     setCurrentImage(index);
//   };

//   return (
//     <div className="technology">
//       <div className="technology__content">
//         <div className="technology__slider">
//           <h1>
//             <span>0 3 </span>S P A C E &nbsp;&nbsp;&nbsp;L A U N C H
//             &nbsp;&nbsp;&nbsp;1 0 1
//           </h1>
//           <div>
//             {/* Botones para cambiar la imagen */}
//             {images.map((image, index) => (
//               <button
//                 className="technology__button"
//                 key={index}
//                 onClick={() => toggleImage(index)}
//                 style={{
//                   backgroundColor:
//                     currentImage === index ? "#fff" : "transparent",
//                   color: currentImage === index ? "#000" : "#fff",
//                 }}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="technology__information">
//           <span>THE TERMINOLOGY…</span>

//           <h3>{titles[currentImage]}</h3>
//           <p>{technologyData[currentImage].info}</p>
//         </div>
//         <div className="technology__image">
//           {/* Mostrar solo la imagen actual */}
//           <img
//             src={images[currentImage]}
//             alt={`Technology ${currentImage + 1}`}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };


