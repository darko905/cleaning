import React from "react";
import AboutMain from "../images/About/AboutImg.webp";

import { FiCheckSquare } from "react-icons/fi";
import { AiFillPhone } from "react-icons/ai";

const About = () => {
  return (
    <section className="about-page">
      <div className="container">
        <div className="about-main">
          <img className="about-main__img" src={AboutMain} alt="car-renting" />
          <div className="about-main__text">
            <span>
              <h3>O nama</h3>
            </span>

            <h2>Dobrodošli u najbolju kompaniju za čišćenje</h2>
            <p>
              Mi smo tim profesionalnih ljudi sa dugogodišnjim iskustvom. Nudimo
              pouzdanu i potpunu uslugu čišćenja različitim profilima klijenata,
              od svakodnevnih čišćenja Vaših domova, ugostiteljskih objekata,
              industrijskih objekata, maloprodaja i poslovnih , kancelarijskih
              prostora, do vrtića i laboratorija koji zahtevaju posebnu pažnju.
            </p>
            <div className="about-main__text__icons">
              <div className="about-main__text__icons__box">
                {/* <img src={Box1} alt="car-icon" /> */}
                <FiCheckSquare className="about-main__text__icons__box-img" />

                <p>Visoko posvećeni</p>
              </div>
              <div className="about-main__text__icons__box">
                <FiCheckSquare className="about-main__text__icons__box-img" />

                <p>Visoko ocenjeno čišćenje</p>
              </div>
              <div className="about-main__text__icons__box">
                <FiCheckSquare className="about-main__text__icons__box-img" />

                <p>Efikasno obavljanje usluge</p>
              </div>
              <div className="about-main__text__icons__box">
                <FiCheckSquare className="about-main__text__icons__box-img" />

                <p>Garancija na kvalitet</p>
              </div>
            </div>
           <div className="about-main__call-button">
           <button className="button button--flex">Pozovite nas <AiFillPhone/></button>
           </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
