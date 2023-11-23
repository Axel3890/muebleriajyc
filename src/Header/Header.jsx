

import { Link } from 'react-router-dom';
import React from 'react';
const imglogo = require("../styles/images/logojyc.png")
const imgmenu =require("../styles/images/menu_btn.png")
const Header = () => {
   function closeNav() {
      document.getElementById("mySidepanel").style.width = "0";
    }

    function openNav() {
      document.getElementById("mySidepanel").style.width = "250px";
    }

    
    return (
        <>
            <div id="mySidepanel" className="sidepanel">
                <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>×</a>
                <Link to="/">Home</Link>
                <a href="#about">Sobre nosotros</a>
                <a href="#trabajos">Trabajos</a>
                <Link to="/contactus"><a href="contact.html">Contactanos</a></Link>
            </div>
            <header>
                
                <div className="head-top">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="logo">
                                    <Link to ="/"><img src={imglogo} alt="Logo" /></Link>
                                </div>
                            </div>
                            <div className="col-sm-9">
                                <ul className="email text_align_right">
                                    <li className="d_none"><i class="fa fa-instagram" aria-hidden="true"></i><a href='https://www.instagram.com/jonathanolveiraa' target='blank'>Instagram</a></li>
                                    <li className="d_none"><i className="fa fa-phone" aria-hidden="true"></i><a href='https://wa.link/a41doc' target='blank'>Whatsapp</a></li>
                                    <li><a href="https://www.facebook.com/jonathan.olveira" target="blank"><i class="fa fa-facebook-f"></i>Facebook</a></li>
                                    <li> <button className="openbtn" onClick={() => openNav()}><img src={imgmenu} alt="Menu Button" /></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
