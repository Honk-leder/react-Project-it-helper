import React from "react";
import Navbar from "../navbar";
import './Header.css';


function Header(){

    return(
        <section className="header">
            <section className="header-top">
                <section className="header-logo">
                    <img className="logo-image" src={require('./logo.png')} alt="Логотип"></img>
                    <a href="/" className="header-logo-text">IT-help</a>
                </section>
                <section className="header-navbar">
                    <Navbar />
                </section>
                <section className="burger-menu">
                    <></>
                </section>
            </section>


            {/*
            <section className="header-bottom">
                <section className="header-bottom-phrase">
                    Ходят слухи, что этот сайт врет
                </section>
                <section className="header-bottom-videolink">
                    <a href="https://www.youtube.com/watch?v=Jp2gDOONOd0&ab_channel=EPICENTEROFHUMOR">Это будет поинтереснее</a>
                </section>
            </section>
            */}
        </section>
    )
}

export default Header;