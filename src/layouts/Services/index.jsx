import React from 'react'

export default function Services(props) {
    return (
      <section className="services" ref={props.refServices}>
        <div className="services__text services__graphic-design">
          <div className="services__graphic-design__content">
            <h1 className="title">Graphic design</h1>
            <p className="description">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
          </div>
        </div>
        <div className="services__text services__photography">
          <div className="services__photography__content">
            <h1 className="title">Photography</h1>
            <p className="description">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
          </div>
        </div>
      </section>
    );
}
