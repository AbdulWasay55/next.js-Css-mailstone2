"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";


const Header = () => {
  const [isOpenMenu, setIsOpenmenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenmenu(!isOpenMenu);
  };

  return (
    <div className="header">
      <Image className="animation-left" src="/logo.png" alt="web-logo" width={80} height={20} />


      <button className="menu-btn" onClick={toggleMenu}>
        {isOpenMenu ? <HiX className="icon" /> : <HiMenu className="icon" />}
      </button>

  
      <div className="desktop-menu">
        <ul className="list">
          <li className="list-item">Home</li>
          <li className="list-item">
            <a href="#about">About us</a>
          </li>
          <li className="list-item">
            <a href="mailto:wasayriirus@gmail.com">Contact</a>
          </li>
          <li className="list-item">
            <a href="#project">Projects</a>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      <div className={`menu-mobile ${isOpenMenu ? "menu-open" : ""}`}>
        <ul className="menu-mobile-list">
          <li className="menu-item">Home</li>
          <li className="menu-item">
            <a href="#about">About us</a>
          </li>
          <li className="menu-item">
            <a href="mailto:wasayriirus@gmail.com">Contact</a>
          </li>
          <li className="menu-item">
            <a href="#project">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
