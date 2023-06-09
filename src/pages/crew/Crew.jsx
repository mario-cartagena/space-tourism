import React, { useState } from 'react';
import './styleCrew.scss';
import { crewData } from '../../utils/data';

export const Crew = () => {
    const [crewActive, setCrewActive] = useState(0);

    return (
        <section className="container crew">
          <div className="crew__wrap">
            <div className="crew__title">
                <h5>
                    <span>02</span> Meet your crew
                </h5>
            </div>

            {crewData.map((item, index) => (
                <div
                    className={
                        crewActive === index
                            ? "crew__item active"
                            : "crew__item"
                    }
                    key={index}
                >
                    <div className="crew__left">
                        <div className="crew__content">
                            <h4>{item.role}</h4>
                            <h3>{item.name}</h3>
                            <p>{item.bio}</p>
                        </div>
                        <div className="crew__bullets">
                            {crewData.map((item, bulletIndex) => (
                                <div
                                    className={
                                        crewActive === bulletIndex
                                            ? "crew__bullet active"
                                            : "crew__bullet"
                                    }
                                    key={item.id}
                                    onClick={() => setCrewActive(bulletIndex)}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className="crew__right">
                        <div className="crew__img">
                            <img src={item.image} alt="crew" />
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </section>
    )
}
