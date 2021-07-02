import React, { useEffect } from 'react';
import './BWNavBar.css';

const BWNavBar = () => {

  useEffect(() => {
    
    const navToggle = document.querySelector(".toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navMenuBackground = document.querySelector(".nav-menu-backgroud");
    
    navToggle.addEventListener("click",()=>{
      navMenu.classList.toggle("nav-menu-active");
      navMenuBackground.classList.toggle("nav-menu-backgroud-active")
    });
    navMenuBackground.addEventListener("click",()=>{
      navMenu.classList.toggle("nav-menu-active");
      navMenuBackground.classList.toggle("nav-menu-backgroud-active")
    });


    
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
                        <li className="item"><a className="bw-link bw-link-active" href="#">HOME</a></li>
                        {/*  eslint-disable-next-line */}
                        <li className="item"><a className="bw-link" href="#">ABOUT</a></li>
                        {/* eslint-disable-next-line */}
                        <li className="item"><a className="bw-link" href="#">CONTACT</a></li>
                        {/* eslint-disable-next-line */}
                        <li className="item slash"><a className="bw-link" href="#"><img className="appsMenu" src="\assets\BW-Resources\appsMenu.svg" alt="Menu" /></a></li>
                        {/* eslint-disable-next-line */}
                        <li className="item "><a className="bw-link" href="#">LOGIN</a></li>
                        <li className=" slash ">/</li>
                        {/* eslint-disable-next-line */}
                        <li className="item"><a className="bw-link" href="#">REGISTER</a></li>
                      
                    </div>
                  </ul>
                </nav>
            </div>
          </div>
        </>
    )
}

export default BWNavBar
