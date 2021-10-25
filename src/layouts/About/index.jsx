import CardAbout from 'components/CardAbout'
import React from 'react'

import eggImage from 'assets/images/desktop/image-transform.jpg'
import glassImage from 'assets/images/desktop/image-stand-out.jpg'

export default function About(props) {
    return (
      <div className="about" ref={props.refAbout} role="complementary">
        <CardAbout
          className="link-about"
          title="Transform your brand"
          description="We are a full-service creative agency specializing in helping brands grow fast.
Engage your clients through compelling visuals that do most of the marketing for you."
          color="yellow"
        />
        <img src={eggImage} alt="egg with yellow background" className="egg-image"/>
        <img src={glassImage} alt="egg with yellow background" />
        <CardAbout
          className="link-about"
          title="Stand out to the right audience"
          description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
          color="red"
        />
      </div>
    );
}
