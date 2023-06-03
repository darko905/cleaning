import React from 'react'
import ChooseBg from '../images/Gallery/WayBg.png';
import { FiCheckSquare } from "react-icons/fi";

const Choose = () => {
  return (
    <section className="section choose-page">
      <div className="container">
        <div className="choose-main">
          <img className="choose-main__img" src={ChooseBg} alt="Backround img" />
          <div className="choose-main__text">
            <span className='choose-main__text-span'>
              <h3>Čišćenje Zlatibor</h3>
            </span>

            <h2>Zašto <span>izabrati</span> nas?</h2>
            <div className="choose-main__text__icons">
              <div className="choose-main__text__icons__box">
                {/* <img src={Box1} alt="car-icon" /> */}
                <FiCheckSquare className="choose-main__text__icons__box-img" />

                <p>Kvalitetna usluga</p>
              </div>
              <div className="choose-main__text__icons__box">
                <FiCheckSquare className="choose-main__text__icons__box-img" />

                <p>Najbolje cene</p>
              </div>
              <div className="choose-main__text__icons__box">
                <FiCheckSquare className="choose-main__text__icons__box-img" />

                <p>Iskusni profesionalci</p>
              </div>
              <div className="choose-main__text__icons__box">
                <FiCheckSquare className="choose-main__text__icons__box-img" />

                <p>Najkvalitetnija hemija</p>
              </div>
              <div className="choose-main__text__icons__box">
                <FiCheckSquare className="choose-main__text__icons__box-img" />

                <p>Ekološki standardi</p>
              </div>
              <div className="choose-main__text__icons__box">
                <FiCheckSquare className="choose-main__text__icons__box-img" />

                <p>Najsavremenija tehnologija</p>
              </div>
            </div>
           
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Choose
