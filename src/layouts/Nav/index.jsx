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

    return (
        <nav>
            <Button href="/" type="link"> <img src={logo} alt="" className="nav__logo" /></Button>
            <ul className="nav__menu">
                <li><Button className="nav__menu__list" type="link" href="/" onClick={showAbout}>About</Button></li>
                <li><Button className="nav__menu__list" type="link" href="/" onClick={showServices}>Services</Button></li>
                <li><Button className="nav__menu__list" type="link" href="/" onClick={showProjects}>Projects</Button></li>
                <li><Button isDesktop>Contact</Button></li>
        </ul>
        </nav>
    )
}
