import React, { useState } from 'react'

import logo from 'assets/images/logo.svg'
import Button from 'components/Button'

export default function Nav(props) {
    const [checked, isChecked] = useState(false)

    function showAbout() {
      window.scrollTo({
        top: props.refAbout.current.offsetTop,
        behavior: "smooth",
      });
    }

    function showServices() {
      window.scrollTo({
        top: props.refServices.current.offsetTop - 40,
        behavior: "smooth",
      });
    }

    function showProjects() {
      window.scrollTo({
        top: props.refProjects.current.offsetTop - 80,
        behavior: "smooth",
      });
    }

    const showMenu = () => {
      isChecked(!checked);
      console.log(checked)
    }

    return (
        <nav>
            <Button href="/" type="link"> <img src={logo} alt="sunnyside" className="nav__logo" /></Button>
            <div id="menuToggle">
              <input type="checkbox" onClick={showMenu}/>
              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <ul className={`nav__menu ${checked ? 'show' : ""}`}>
                <li><Button className="nav__menu__list" type="link" href="/" onClick={showAbout}>About</Button></li>
                <li><Button className="nav__menu__list" type="link" href="/" onClick={showServices}>Services</Button></li>
                <li><Button className="nav__menu__list" type="link" href="/" onClick={showProjects}>Projects</Button></li>
                {!checked && <li><Button isDesktop>Contact</Button></li>}
                {checked && <li><Button isMobile>Contact</Button></li>}
        </ul>
        </nav>
    )
}
