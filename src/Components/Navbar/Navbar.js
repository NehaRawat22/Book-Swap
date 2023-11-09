import React, {useState} from 'react'
import './Navbar.css';
import { SiBookstack } from 'react-icons/si';
import { AiFillCloseCircle } from 'react-icons/ai';
import { PiDotsNineBold } from 'react-icons/pi';

const Navbar = () => {
  const [active, setActive] = useState('navBar');

  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }

  const closeNav = ()=>{
    setActive('navBar')
  }

  return (
    <div>
      <section className='navbarSection'>
        <header className="header flex">

          <div className="logoDiv">
            <a href="#" className="logo flex">
              <h1 style={{fontSize:"33px"}}><SiBookstack className='icon'/> BookSwap</h1>
            </a>
          </div>

          <div className={active}>
            <ul className='navLists flex'>
              <li className="navItem">
                <a href="#" className="navLink">Home</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Explore</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Purchases</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">About</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Blog</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">News</a>
              </li>
              <button className='btn' style={{color:"white"}}>SELL NOW</button>
            </ul>
           
            <div onClick={closeNav} className="closeNavbar">
              <AiFillCloseCircle className='icon'/>
            </div>
          </div>

            <div onClick={showNav} className="toggleNavbar">
              <PiDotsNineBold className='icon'/>
            </div>
        </header>
      </section>
    </div>
  )
}

export default Navbar
