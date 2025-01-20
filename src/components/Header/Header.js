import React from "react";
import './header.css';
import meals from './meals.jpg';
import HeaderCartButton from "./HeaderCartButton";
const Header =(props)=>{
    return(
    <>
        <header className="header">
            <h1>ReactMeals</h1>
            <HeaderCartButton showcart = {props.showCart}/>
        </header>
        <div className="main-image">
            <img src={meals} alt="this is a meal " />
        </div>
    </>
    );
}

export default Header;