import React from 'react'

import emilyPict from 'assets/images/image-emily.jpg';
import jennyPict from 'assets/images/image-jennie.jpg';
import thomasPict from 'assets/images/image-thomas.jpg';

export default function Testimonials() {
    return (
      <div className="testimonials">
        <h1 className="testimonials__title">Client Testimonials</h1>
        <div className="testimonials__cards">
          <div className="card-testimonial">
            <img src={emilyPict} alt="client profile" className="card-testimonial__image" />
            <p className="card-testimonial__description">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <div className="card-testimonial__profile">
              <p className="card-testimonial__profile__name">Emily R.</p>
              <p className="card-testimonial__profile__occupation">Marketing Director</p>
            </div>
          </div>
          <div className="card-testimonial">
            <img src={thomasPict} alt="client profile" className="card-testimonial__image" />
            <p className="card-testimonial__description"> Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
            <div className="card-testimonial__profile">
              <p className="card-testimonial__profile__name">Thomas S.</p>
              <p className="card-testimonial__profile__occupation">Chief Operating Officer</p>
            </div>
          </div>
          <div className="card-testimonial">
            <img src={jennyPict} alt="client profile" className="card-testimonial__image" />
            <p className="card-testimonial__description"> Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
            <div className="card-testimonial__profile">
              <p className="card-testimonial__profile__name">Jennie F.</p>
              <p className="card-testimonial__profile__occupation">Business Owner</p>
            </div>
          </div>
        </div>
      </div>
    );
}
