import React, {Component, useEffect, useState} from "react";
import './ContactForm.css';
import Confetti from "react-confetti";

import {useForm} from "react-hook-form";


function ContactForm({active,setActive}){
    const [nameValue,setName]=useState('');
    const [emailValue,setEmail]=useState('');
    const [messageValue,setMessage]=useState('');
    const [confettiActive,setConfetti]=useState(false);

    useEffect(() => {
            setName('');
            setEmail('');
            setMessage('');
            setConfetti(false)
    }, [active]);

    function submitOnclicked(event){
        setConfetti(true);
        event.preventDefault();


    }
    return(
        <div className={active ? "modal active" : "modal"} onClick={()=>setActive(false)}>
            <Confetti className={confettiActive? " confetti active-confetti" : "confetti"}/>
            <div className={active ? "modal-content active" : "modal-content"} onClick={e=>e.stopPropagation()}>
                <h1 className={"form-text"}>Написать нам</h1>
                <form action="/" method={""} >
                    <input className={"form-component"} required name={"name"} type={"text"} placeholder={"Ваше имя"} value={nameValue} onChange={e=>setName(e.target.value)}/>
                    <input className={"form-component"} required name={"email"} type={"email"} placeholder={"Email адресс"} value={emailValue} onChange={e=>setEmail(e.target.value)}/>
                    <textarea className={"form-component form-message"} required name={"message"} placeholder={"Сообщение.."} value={messageValue} onChange={e=>setMessage(e.target.value)}/>
                    <input className={"form-btn"} onClick={(e)=>submitOnclicked(e)} type="submit" value="Отправить"/>
                </form>

            </div>
        </div>
    )
}

export default ContactForm;
