import React, { useState } from "react";
import './css/main_css.css';

export default function Headermain() {

    const[show, setShow] = useState(true);

    function showMenu() {
        setShow((s) => !s);
    }

    return(
        <div>
            <div className="header-general-container">
                
                <div className="header-menu-logo">
                    <h2>MYSPACE</h2>
                </div>
                <div className="header-menu-container">
                    <button className="menu-header-button"><a href="">HOME</a></button>
                    <button className="menu-header-button"><a href="">PORTFÓLIO</a></button>
                    <button className="menu-header-button"><a href="">CHAT</a></button>
                    <button className="menu-header-button"><a id="login-button-pc-version" href="">LOGIN</a></button>
                </div>
            </div>
            
            <div className="header-menu-smartphone-display-container">
                <div id="square-menu-id" className="header-menu-square">
                    <img style={{ display: show ? "none" : "block" }} id="img-menu-smartphone-aux" src="https://cdn-icons.flaticon.com/png/512/3878/premium/3878993.png?token=exp=1637612924~hmac=f0409b4e22375ee077f722975dd4b05f" alt="" />
                    <button id="btn-menu" onClick={showMenu}>
                        <img id="img-menu-smartphone" src="https://cdn-icons.flaticon.com/png/512/3558/premium/3558860.png?token=exp=1637611734~hmac=84d1641a87e43d744d8ef40ab9dc2ab6" alt="" />
                    </button>
                    <div className="header-menu-menu-options-container" style={{ marginLeft: show ? "-100em" : "0em" }}>
                    
                            <div className="header-menu-options-button">
                                <div className="header-menu-options-centralize">
                                    <a href="">HOME</a>
                                </div>
                            </div>
                            <div className="header-menu-options-button">
                                <div className="header-menu-options-centralize">
                                    <a href="">PORTFÓLIO</a>
                                </div>
                            </div>
                            <div className="header-menu-options-button">
                                <div className="header-menu-options-centralize">
                                    <a href="">CHAT</a>
                                </div>
                            </div>
                            <div className="header-menu-options-button">
                                <div className="header-menu-options-centralize">
                                    <a id="login-button-phone-version" href="">LOGIN</a>
                                </div>
                            </div>
                            
                   </div>
                   
                </div>
                
                
            </div>
            
            
        </div>
    );
}