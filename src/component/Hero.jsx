import React from "react";

import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__data">
            <h1 className="home__title">
              Čišćcenje komercijalnih i stambenih
              <br /> objekata na <span>Zlatiboru</span>
            </h1>
            <h3 className="home__subtitle">Profesionalne usluge čišćcenja</h3>
            <Link to="/service">
              <button className="button button--flex">
                Pogledajte više <BsArrowRightShort />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Hero;
