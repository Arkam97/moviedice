import React, { useState,useEffect } from 'react';
import logo from './assets/logo.png'
import './navbar.css'

function Navbar() {

    const [show, setshow] = useState(false);

    useEffect(() => {
        
        window.addEventListener('scroll',() => {
            if(window.scrollY > 100) {
                setshow(true)
            }
            else {
                setshow(false)
            }
        });
          
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
             <img className="logo" src={logo} alt="netflix LOGO" />
             <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar"/>  
        </div>
    )
}

export default Navbar
