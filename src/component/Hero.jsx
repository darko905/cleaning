import React from "react";
import bgBuble from '../images/Hero/hero-buble.png';
// import { Link } from "react-router-dom";

// import { AiFillInstagram, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__data">
            <h1 className="home__title">
              Čišćcenje komercijalnih i stambenih objekata na <span>Zlatiboru</span>
            </h1>
            <h3 className="home__subtitle">Profesionalne usluge čišćcenja</h3>
            {/* <div className="home__social">
              <Link className="home__social-icons">
                <AiFillPhone />
              </Link>
              <Link className="home__social-icons">
                <AiFillInstagram />
              </Link>
              <Link className="home__social-icons">
                <AiOutlineMail />
              </Link>
            </div> */}

            <button className="button button--flex">
              Pogledajte više <BsArrowRightShort />
            </button>
          </div>
        </div>
      </div>
      <div className="home__bottom-img">
        <img src={bgBuble} alt="buble" />
      </div>
    </section>
  );
};

export default Hero;
