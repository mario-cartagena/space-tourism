import React, { useEffect, useState } from "react";
import "./Destination.scss";
import moon from "../../assets/img/destination/moon.png";
import mars from "../../assets/img/destination/mars.png";
import europa from "../../assets/img/destination/europa.png";
import titan from "../../assets/img/destination/titan.png";

export const Destination = () => {
    let moons = [
        {
            name: "MOON",
            image: moon,
            desc: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            dist: "384,400 KM",
            time: "3 DAYS",
        },
        {
            name: "MARS",
            image: mars,
            desc: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
            dist: "225 MIL. KM",
            time: "9 MONTHS",
        },
        {
            name: "EUROPA",
            image: europa,
            desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            dist: "628 MIL. KM",
            time: "3 YEARS",
        },
        {
            name: "TITAN",
            image: titan,
            desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            dist: "1.6 BIL. KM",
            time: "7 YEARS",
        },
    ];
    const [changeMoon, setChangeMoon] = useState(moons[0]);
    function selectMoon(name) {
        setChangeMoon(moons.find((moon) => moon.name === name));
        console.log("This is - name = ", name);
        console.log(
            "change",
            moons.find((moon) => moon.name === name)
        );
    }

    useEffect(() => {
        changeMoon && console.log(changeMoon);
        // Realiza cualquier acción adicional cuando el elemento encontrado cambie
    }, [changeMoon]);
    return (
        <div className="destination">
            <div className="moons--container">
                <h3 className="title">
                    <span className="title-number">01</span> PICK YOUR
                    DESTINATION
                </h3>
                <div className="data">
                    <div className="moons">
                        <ul className="moon-names">
                            <li
                                onClick={() => selectMoon("MOON")}
                                className={`my-element ${
                                    changeMoon.name === "MOON" ? "active" : ""
                                }`}
                            >
                                MOON
                            </li>
                            <li
                                onClick={() => selectMoon("MARS")}
                                className={`my-element ${
                                    changeMoon.name === "MARS" ? "active" : ""
                                }`}
                            >
                                MARS
                            </li>
                            <li
                                onClick={() => selectMoon("EUROPA")}
                                className={`my-element ${
                                    changeMoon.name === "EUROPA" ? "active" : ""
                                }`}
                            >
                                EUROPA
                            </li>
                            <li
                                onClick={() => selectMoon("TITAN")}
                                className={`my-element ${
                                    changeMoon.name === "TITAN" ? "active" : ""
                                }`}
                            >
                                TITAN
                            </li>
                        </ul>
                    </div>
                    <div className="moons-desc">
                        {changeMoon && (
                            <>
                                <div className="moons-img">
                                    <img src={changeMoon.image} alt="" />
                                </div>
                                <div className="moons-data">
                                    <h5 className="name">{changeMoon.name}</h5>
                                    <div className="desc">
                                        {changeMoon.desc}
                                    </div>
                                    <div className="line"></div>
                                    <div className="dist-times">
                                        <div className="distance">
                                            <h5>AVG. DISTANCE</h5>
                                            <p>{changeMoon.dist}</p>
                                        </div>
                                        <div className="time">
                                            <h5>EST. TRAVEL TIME</h5>
                                            <p>{changeMoon.time}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

