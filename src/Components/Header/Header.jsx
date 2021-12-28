import React from "react";
// import {BrowserRouter as Router, Link, link,Outlet, Route, Routes} from "react-router-dom";
import { Link, Outlet} from "react-router-dom";
import './header.style.css'
import monster from "./../../img/monster.png";
import welcoming from './../../img/wellcoming.png'
import {MonsterList, MonsterPage,MonsterPopular} from "../index";
const Header  = () => {
    return(
        <div>
    <header className="header">
        <ul className="nav-bar">
            <img src={monster} alt="monster" className="logo"/>
            <li className="nav-bar__item">
                <Link to="/" className="nav-bar__link">صفحه اصلی</Link>
            </li>
            <li className="nav-bar__item">
                <Link to="/monsters" className="nav-bar__link">هیولاها</Link>
            </li>

            <li className="nav-bar__item">
                <Link to="/monsters" className="nav-bar__link">هیولاهای محبوب من</Link>
            </li>

            <li className="nav-bar__item">
                <Link to="/monsters" className="nav-bar__link">بلاگ</Link>
            </li>

        </ul>
        {/*<Router>*/}
        {/*    <Routes>*/}
        {/*        <Route path='/' element={<Header/>}/>*/}
        {/*        <Route path='/poupluar' element={<MonsterPopular />}/>*/}
        {/*    </Routes>*/}
        {/*</Router>*/}
<Outlet/>
    </header>
            <div>
            <img src={welcoming}/>
            </div>
        </div>

    )

};
export default Header;