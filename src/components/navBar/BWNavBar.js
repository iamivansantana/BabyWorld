import React, { useEffect } from 'react';
import './BWNavBar.css';

const BWNavBar = () => {

  useEffect(() => {
    
    const navToggle = document.querySelector(".toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navMenuBackground = document.querySelector(".nav-menu-backgroud");

    const items = document.querySelectorAll(".item");

    function toggleNave() {
       navMenu.classList.toggle("nav-menu-active");
       navMenuBackground.classList.toggle("nav-menu-backgroud-active");
   }
    items.forEach(item=>{
          item.addEventListener("click",toggleNave);
    });
    navToggle.addEventListener("click",toggleNave);
    navMenuBackground.addEventListener("click",toggleNave);


    
  });

    return (
        <>
          <div className="navBarContent">
            <div className="flex">

              <button className="toggle">
                  <img className="bars" src="\assets\BW-Resources\burgerMenu.svg" alt="Menu" />
              </button>
                <div className="logo">
                  <img src="\assets\BW-Resources\tittle.svg" alt="BabyWorldLogo"/>
                </div>
                <button className="toggleApps">
                  <img className="bars" src="\assets\BW-Resources\appsMenu.svg" alt="Menu" />
              </button>

                <nav className="">
                  <div className="nav-menu-backgroud"/>
                  <ul style={{margin:'0',padding:'0'}}>
                    <div className="nav-menu">
                        {/*  eslint-disable-next-line */}
                        <li className="item">
                          <a id="home" className="bw-link bw-link-active" href="#coverPage">
                            <span><img className="toggleIcon" src="\assets\BW-Resources\toggleHome.svg" alt="Home" /></span>HOME
                          </a>
                        </li>
                        {/*  eslint-disable-next-line */}
                        <li className="item">
                          <a id="about" className="bw-link" href="#infoPage">
                            <span><img className="toggleIcon" src="\assets\BW-Resources\toggleAbout.svg" alt="Info" /></span>ABOUT
                          </a>
                        </li>
                        <li className="item">
                        
                          <a id="contact" className="bw-link" href="#contactPage">
                            <span><img className="toggleIcon" src="\assets\BW-Resources\toggleContact.svg" alt="Contact" /></span>CONTACT
                          </a>
                        </li>
                        <li className="item slash">
                        {/* eslint-disable-next-line */}
                          <a className="bw-link bw-link-apps" href="#">
                            <img className="appsMenu" src="\assets\BW-Resources\appsMenu.svg" alt="Menu" />
                          </a>
                        </li>
                        <li className="item ">
                        {/* eslint-disable-next-line */}
                          <a id="login" className="bw-link" href="#">
                            <span><img className="toggleIcon" src="\assets\BW-Resources\toggleLogin.svg" alt="Login" /></span>LOGIN
                          </a>
                        </li>
                        <li className="slash" style={{pointerEvents:'none'}}>/</li>
                        <li className="item">
                        {/* eslint-disable-next-line */}
                            <a id="register" className="bw-link" href="#">
                          
                              <span><img className="toggleIcon" src="\assets\BW-Resources\toggleRegister.svg" alt="Register" /></span>REGISTER
                          
                            </a>
                        </li>
                      
                    </div>
                  </ul>
                </nav>
            </div>
          </div>
        </>
    )
}

export default BWNavBar
