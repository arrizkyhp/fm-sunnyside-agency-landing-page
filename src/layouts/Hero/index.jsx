import Button from 'components/Button'
import React from 'react'

import arrow from 'assets/images/icon-arrow-down.svg'

export default function Hero(props) {
    function showAbout() {
        window.scrollTo({
            top: props.refAbout.current.offsetTop,
            behavior: "smooth"
        })
    }

    return (
        <main className="hero">
            <h1 className="hero__text">
                we are creatives
            </h1>
            <Button type="link" href="/" onClick={showAbout} className="hero__arrow">
                <img src={arrow} alt="arrow down" />
            </Button>
        </main>
    )
}
