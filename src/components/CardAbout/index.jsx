import Button from 'components/Button'
import React from 'react'

export default function CardAbout(props) {
    return (
      <div className="card-about">
        <div className="card-about__content">
          <h1 className="card-about__content__title">{props.title}</h1>
          <p className="card-about__content__description">{props.description}</p>
          {props.color === "yellow" && (
            <Button type="link" href="/" className={props.className} isAboutYellow>
              Learn More
            </Button>
          )}
          {props.color === "red" && (
            <Button type="link" href="/" className={props.className} isAboutRed>
              Learn More
            </Button>
          )}
        </div>
      </div>
    );
}
