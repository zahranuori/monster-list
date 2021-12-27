import React from "react";
// import {link, Outlet} from "react-router-dom";
import './header.style.css'
import monster from "./../../img/monster.png";
const Header  = () => {
    return(
    <header className="header">
        <ul className="nav-bar">
            <img src={monster} alt="monster" className="logo"/>
            <li className="nav-bar__item">
                <a href="#" className="nav-bar__link">صفحه اصلی</a>
            </li>
            <li className="nav-bar__item">
                <a href="#/img/monster.png" className="nav-bar__link">هیولاها</a>
            </li>

            <li className="nav-bar__item">
                <a href="#" className="nav-bar__link">هیولاهای محبوب</a>
            </li>

            <li className="nav-bar__item">
                <a href="#" className="nav-bar__link">بلاگ</a>
            </li>

        </ul>
    </header>
    )
};
export default Header;