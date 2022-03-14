import React, {useState} from "react";
import './Navbar.css';
import {ContactForm} from "../index";

function Navbar(){
    const [contactFormActive,setFormActive]=useState(false)
    return(
        <section className="navbar-section">
            <div className="navbar-elem">
                Страница два
            </div>
            <div className="navbar-elem">
                Страница три
            </div>
            <div className="navbar-elem">
                <button className="btn-contactUs navbar-btn" onClick={()=>setFormActive(true)}>Обратная связь</button>
            </div>
            <ContactForm active={contactFormActive} setActive={setFormActive}/>
        </section>

    )
}
export default Navbar;