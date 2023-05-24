import React, { useState } from 'react';
import './styleCrew.scss';
import { crewData } from '../../utils/data';


export const Crew = () => {
  const [crew, setCrew] = useState(crewData[0]);

  const handleClick = (item) => {
    setCrew({
      name: item.name,
      image: item.image,
      role: item.role,
      bio: item.bio,
      id: item.id,
    });
  };

  return (
    <section className='crew'>
        <div className="crew-page-title">
          <span>0{crew.id}</span>
          <p>Meet your crew</p>
        </div>    

        <div className="crew__information">
          <div className='crew__left'>
            <div className="crew__rol">
              <span>{crew.role}</span>
              <h1>{crew.name}</h1>
            </div>
            <div className="crew__bio">
              <span>{crew.bio}</span>
            </div>
          </div>
          <div className='crew__right'>
            <figure>
              <img src={crew.image} alt={crew.name} />
            </figure>
          </div>
        </div>

        <div className="dots-container">
          {crewData.map((item) => {
            return (
              <div
                key={item.id}
                className="dots"
                id={`crew-${item.id}`}
                onClick={() => handleClick(item)}
              ></div>
            );
          })}
        </div>
    </section>
  )
}
