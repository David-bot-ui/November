import React, { useState } from 'react'
import './Header.scss'
const Header = () => {

const [isActive,setIsActive] = useState(false)

const toggleBurger = () => {
    setIsActive(!isActive)
}

 

 
  return (
    <>
    <header className="header">
        <div className="container">
            <div className="header__wrapper">

                <img  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/Starbucks_Corporation_Logo_2011.svg-e1657703028844.png?auto=format&q=60&fit=max&w=930" alt="" className="logo" />

                <div className={`header__menu ${isActive ? 'active' : ''}`}>
                    <a href="">Home</a>
                    <a href="">Catalog</a>
                    <a href="">Portfolio</a>
                    <a href="">Contacts</a>
                </div>
                <div onClick={toggleBurger}  className={`burger ${isActive ? 'active' : ''} `}>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </header>
    
    
    
    </>
  )
}

export default Header