import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./styleHeader.scss";
import iconHamburguerClose from "../../../src/assets/img/icons/icon-close.svg"

const navLink = [
    {
        id: "00",
        path: "/",
        name: "home",
    },
    {
        id: "01",
        path: "/destination",
        name: "destination",
    },
    {
        id: "02",
        path: "/crew",
        name: "crew",
    },
    {
        id: "03",
        path: "/technology",
        name: "technology",
    },
]

const NavMenu = ({ mobileMenu, onClick }) => {
    const [navActive, setNavActive] = useState("home")

    return (
        <div className={"nav__menu"}>
            <div className="nav__close">
                <img src={iconHamburguerClose} alt="iconHamburguerClose" onClick={onClick} />
            </div>
            {navLink.map((item) => (
                <div
                    className={
                        navActive === item.name
                            ? "nav__link active"
                            : "nav__link"
                    }
                    key={item.name}
                >
                    <Link
                        to={item.path}
                        onClick={() => {
                            setNavActive(item.name)
                        }}
                    >
                        <span>{item.id}</span>
                        {item.name}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default NavMenu
