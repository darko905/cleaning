import React from "react";

import Icon1 from "../images/icons/icon-1.png";
import Icon2 from "../images/icons/icon-2.png";

const Plan = () => {
  return (
    <section className="section plan" id="plan">
      <div className="plan__container container grid">
        <div className="plan__content">
          <div className="plan__circle-two">
            {/* <FaCar className="plan__icons" /> */}
            <img src={Icon1} alt="Icon1" className="plan__icons" />
          </div>
          <div className="plan__circle-content">
            <h3 className="plan__title">Usluga na otvorenom</h3>

            <p className="plan__descritpion">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
              facere.
            </p>
          </div>
        </div>

        <div className="plan__content">
          <div className="plan__circle-two">
            {/* <FaHeadset className="plan__icons" /> */}
            <img src={Icon2} alt="Icon2" className="plan__icons" />
          </div>

          <h3 className="plan__title">Čišćenje stanova</h3>

          <p className="plan__descritpion">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
            aspernatur!
          </p>
        </div>

        {/* <div className="plan__content">
          <div className="ico__circle-three">
            <FaCarSide className="plan__icons" />
          </div>

          <h3 className="plan__title">Let's Drive</h3>

          <p className="plan__descritpion">
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Plan;
