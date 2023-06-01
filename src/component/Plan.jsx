import React from "react";

import Icon1 from "../images/icons/icon-1.png";
import Icon2 from "../images/icons/icon-2.png";
import Icon3 from "../images/icons/icon-3.png";

const Plan = () => {
  return (
    <section className="section plan" id="plan">
      <div className="plan__container container grid">
        <div className="plan__content">
          <div className="plan__circle-two">
            <img src={Icon1} alt="Icon1" className="plan__icons" />
          </div>
          <div className="plan__circle-content">
            <h3 className="plan__title">Čišćenje kuća i stanova</h3>

            <p className="plan__descritpion">
              Čišćenje paročistačem i dezinfekcija svih površina u kući ili
              stanu
            </p>
          </div>
        </div>

        <div className="plan__content">
          <div className="plan__circle-two">
            <img src={Icon2} alt="Icon2" className="plan__icons" />
          </div>

          <h3 className="plan__title">Čišćenje kancelarija</h3>

          <p className="plan__descritpion">
            Poslovno čišćenje može biti generalno, periodično ili svakodnevno
          </p>
        </div>
        <div className="plan__content">
          <div className="plan__circle-two">
            <img src={Icon3} alt="Icon2" className="plan__icons" />
          </div>

          <h3 className="plan__title">Pranje posteljina</h3>

          <p className="plan__descritpion">
            Čišćenje i pranje posteljina nakon boravka gostiju
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plan;
