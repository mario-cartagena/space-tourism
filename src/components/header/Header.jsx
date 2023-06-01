import React, { useState } from "react";
import "./styleHeader.scss";
import { Link } from "react-router-dom";
import logo from '../../../src/assets/img/icons/logo.svg'
import iconHamburguerOpen from "../../../src/assets/img/icons/icon-hamburger.svg"
import NavMenu from "./NavMenu"

export const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <nav className="nav">
            <div className="nav__left">
                <div className="nav__logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div
                className={
                    mobileMenu ? "nav__right nav__right-mobile" : "nav__right"
                }
            >
                <NavMenu
                    mobileMenu={mobileMenu}
                    onClick={() => setMobileMenu(false)}
                />
            </div>
            <div className="nav__btn">
                <img src={iconHamburguerOpen} alt="" onClick={() => setMobileMenu(true)} />
            </div>
        </nav>
    )
}