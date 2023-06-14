import React from "react";
import AboutLiderBg from "../images/Gallery/BgAbout.webp";

const AboutLider = () => {
  return (
    <section className="about-page">
      <div className="container">
        <div className="about-main">
          <img
            className="about-main__img"
            src={AboutLiderBg}
            alt="car-renting"
          />
          <div className="about-main__text">
            <span>
              <h3>O nama</h3>
            </span>

            <h2>Mi smo lideri u industriji</h2>
            <p>
              Aurora Limpio je tim profesionalnih ljudi sa dugogodišnjim
              iskustvom. Nudimo pouzdanu i potpunu uslugu čišćenja različitim
              profilima klijenata, od svakodnevnih čišćenja Vaših domova,
              ugostiteljskih objekata, industrijskih objekata, maloprodaja i
              poslovnih , kancelarijskih prostora, do vrtića i laboratorija koji
              zahtevaju posebnu pažnju. Koristimo najkvalitetnije mašine i
              hemiju koja podleže ISO standardima, i koja je antialergijska i
              antibakterijska.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLider;
