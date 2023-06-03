import React from "react";

import { Link } from "react-router-dom";
import Image1 from '../images/icons/envelope.png'
import Image2 from '../images/icons/phone.png'
import Image3 from '../images/icons/location.png'

const Contact = () => {
    
  return (
    <section className="section contact" id="contact">
      <h2 className="section__title"><span>Kontakt</span></h2>
      <span className="section__subtitle">
        Osećajte se slobodno da nam u svakom momentu pošaljete poruku sa
        pitanjem, sugestijom, upitom za cenu, ponudu …
      </span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__info">
            <Link to="mailto:cicenjezlatibor@gmail.com">
              <div className="contact__card">
                {/* <AiOutlineMail className="contact__card-icon" /> */}
                <img src={Image1} alt="Email icons"  className="contact__card-icon"/>

                <span className="contact__card-data">
                  cicenjezlatibor@gmail.com
                </span>
              </div>
            </Link>

            <Link to="tel:+381601234567">
              <div className="contact__card">
                {/* <AiFillPhone className="contact__card-icon" /> */}
                <img src={Image2} alt="Phone icons"  className="contact__card-icon"/>

                <span className="contact__card-data">+381601234567</span>
              </div>
            </Link>

            <Link to="https://www.google.com/maps">
              <div className="contact__card">
                {/* <HiOutlineLocationMarker className="contact__card-icon" /> */}
                <img src={Image3} alt="Location icons"  className="contact__card-icon"/>
                <span className="contact__card-data">Zlatibor</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="contact__content">
          <form className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Ime</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Vaše ime"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Vaš email"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Telefon</label>
              <input
                type="number"
                name="number"
                className="contact__form-input"
                placeholder="Broj telefona"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Poruka</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Vaša poruka..."
              ></textarea>
            </div>
            <button className="button button-flex">
              Posaljite 
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
