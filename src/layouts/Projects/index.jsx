import React from 'react'

import img1 from 'assets/images/desktop/image-gallery-milkbottles.jpg'
import img2 from 'assets/images/desktop/image-gallery-orange.jpg'
import img3 from 'assets/images/desktop/image-gallery-cone.jpg'
import img4 from 'assets/images/desktop/image-gallery-sugarcubes.jpg'

export default function Projects(props) {
    return (
        <section className="projects" ref={props.refProjects}>
            <img src={img1} alt="milk bottles" className="projects__image"/>
            <img src={img2} alt="orange in bowl" className="projects__image"/>
            <img src={img3} alt="ice cream cone" className="projects__image"/>
            <img src={img4} alt="sugar cubes" className="projects__image"/>
        </section>
    )
}
