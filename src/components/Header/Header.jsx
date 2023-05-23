import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
    const [navPage, setNavPage] = useState("home");
    function changePage(page) {
        setNavPage(page);
    }
    return (
        <div className="header">
            <div className="navbar">
                <div className="line"></div>
                <ul className="nav-items">
                    <li
                        onClick={() => changePage("home")}
                        className={`my-element ${
                            navPage === "home" ? "active" : ""
                        }`}
                    >
                        <Link className="link" to="home">
                            <span className="nav-numbers">00</span>HOME
                        </Link>
                    </li>
                    <li
                        onClick={() => changePage("destination")}
                        className={`my-element ${
                            navPage === "destination" ? "active" : ""
                        }`}
                    >
                        <Link className="link" to="destination">
                            <span className="nav-numbers">01</span> DESTINATION
                        </Link>
                    </li>
                    <li
                        onClick={() => changePage("crew")}
                        className={`my-element ${
                            navPage === "crew" ? "active" : ""
                        }`}
                    >
                        <Link className="link" to="crew">
                            <span className="nav-numbers">02</span> CREW
                        </Link>
                    </li>
                    <li
                        onClick={() => changePage("active")}
                        className={`my-element ${
                            navPage === "active" ? "active" : ""
                        }`}
                    >
                        <Link className="link" to="technology">
                            <span className="nav-numbers">03</span> TECHNOLOGY
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
