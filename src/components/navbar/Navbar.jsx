import React from 'react';
import './styleNavbar.scss';
import Logo from '../../assets/img/desktop/icon/Path.png'

export const Navbar = () => {
    const itemsNavbar = [
        {
            id: 1,
            number: "00",
            name: "HOME"
        },
        {
            id: 2,
            number: "01",
            name: "DESTINATION"
        },
        {
            id: 3,
            number: "02",
            name: "CREW"
        },
        {
            id: 4,
            number: "03",
            name: "TECHNOLOGY"
        }
    ];
  return (
    <nav className='nav'>
        <figure className='nav__logo'>
            <img src={Logo} alt="Logo"/>
        </figure>
        <ul className='nav__list'>
            <div className='nav__items'>
                {itemsNavbar.map((item) =>(
                    <li key={item.id}>{item.number} {item.name}</li>
                ))}
            </div>
        </ul>
    </nav>
  )
}
