import React from 'react'

import logo from 'assets/images/logo.svg'
import Button from 'components/Button'

export default function Nav(props) {
    function showAbout() {
      window.scrollTo({
        top: props.refAbout.current.offsetTop,
        behavior: "smooth",
      });
    }
    return (
        <nav>
            <Button href="/" type="link"> <img src={logo} alt="" className="nav__logo" /></Button>
            <ul className="nav__menu">
                <li><Button className="nav__menu__list" type="link" href="/" onClick={showAbout}>About</Button></li>
                <li><a href="#services" className="nav__menu__list">Services</a></li>
                <li><a href="#projects" className="nav__menu__list">Projects</a></li>
                <li><Button isDesktop>Contact</Button></li>
        </ul>
        </nav>
    )
}
