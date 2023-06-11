import React from "react";
import Icon1 from "../images/icons/1.webp";
import Icon2 from "../images/icons/2.webp";
import Icon3 from "../images/icons/3.webp";

const Steps = () => {
  return (
    <section className="section steps" id="steps">
      <span className="section__subtitle">
        <p>3 jednostavna koraka</p>
      </span>
      <h2 className="section__title">
        Kako naš <span>servis</span> funkcioniše?
      </h2>
      <div className="steps__container container grid">
        <div className="steps__content">
          <div className="steps__circle">
            

            <img src={Icon1} alt="house icons" className="steps__icons" />
            <div className="steps__count">1</div>
          </div>

          <h3 className="steps__title">Kontakt</h3>

          <p className="steps__descritpion">
            Kontaktirajte nas kako bismo na pravi način sagledali Vaše potrebe i
            prilagodili usluge baš Vama!je pločica. Brisanje elemenata u
            kupatilu, kao i zidnih pločica.
          </p>
        </div>

        <div className="steps__content">
          <div className="steps__circle">
            
            <img src={Icon2} alt="ofice icon" className="steps__icons" />
            <div className="steps__count">2</div>
          </div>

          <h3 className="steps__title">Pravljenje plana i rokova</h3>

          <p className="steps__descritpion">
            U saradnji sa Vama pravimo plan izvršenja naših usluga kako bismo na
            najbolji mogući način odgovorili Vašim potrebama
          </p>
        </div>

        <div className="steps__content">
          <div className="steps__circle">
           
            <img src={Icon3} alt="building icon" className="steps__icons" />
            <div className="steps__count">3</div>
          </div>

          <h3 className="steps__title">Opustite se i uživajte</h3>

          <p className="steps__descritpion">
            Zgrabite šolju kafa ili čaja, prošetajte Zlatiborom, opusite se dok
            mi obavljamo usluge čišćenja za Vas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
