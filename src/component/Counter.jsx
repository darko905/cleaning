import React, { useState } from 'react'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import Image1 from '../images/icons/t-shirt.png'
import Image2 from '../images/icons/spray.png'
import Image3 from '../images/icons/man.png'
const Counter = () => {
    const [counterStart, setCounterStart] = useState(false);
  return (
    <section className="section counter">
      <div className="counter__container container grid">
        <ScrollTrigger onEnter={()=> setCounterStart(false)} onExit={()=> setCounterStart(true)}>
        <div className="counter__content">
          
            <span className="ico__circle">
              
              <img src={Image1} alt="T-shirt" className="counter__icons"/>
            </span>

            <h3 className="counter__title">
                {counterStart && 
                <CountUp start={2200} end={2500} duration={8} delay={0}/>
                }
                +
            </h3>
          
          <p className="counter__descritpion">Satisfied Clients</p>
        </div>
        </ScrollTrigger>


        <ScrollTrigger onEnter={()=> setCounterStart(true)} onExit={()=> setCounterStart(false)}>
        <div className="counter__content">
          <div>
            <span className="ico__circle">
              
              <img src={Image2} alt="Spray" className="counter__icons"/>
            </span>
           
            <h3 className="counter__title">
            {counterStart && 
            <CountUp start={450} end={520} duration={6} delay={0}/>}
            +
            </h3>
          </div>
          <p className="counter__descritpion">Active Project</p>
        </div>
        </ScrollTrigger>
        <ScrollTrigger onEnter={()=> setCounterStart(true)} onExit={()=> setCounterStart(false)}>
        <div className="counter__content">
          <div>
            <span className="ico__circle">
             
              <img src={Image3} alt="Man" className="counter__icons"/>
            </span>

            <h3 className="counter__title">
                {counterStart && 
                 <CountUp start={480} end={550} duration={6} delay={0}/>
                }
               +
            </h3>
          </div>
          <p className="counter__descritpion">Expert Teams</p>
        </div>
        
        </ScrollTrigger>
      </div>
    </section>
  );
};

export default Counter;