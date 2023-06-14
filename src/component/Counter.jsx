import React, { useState } from 'react'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import Image1 from '../images/icons/t-shirt.webp'
import Image2 from '../images/icons/calendar.webp'
import Image3 from '../images/icons/man.webp'
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
                <CountUp start={90} end={125} duration={6} delay={0}/>
                }
                +
            </h3>
          
          <p className="counter__descritpion">Zadovoljnih klijenata</p>
        </div>
        </ScrollTrigger>


        <ScrollTrigger onEnter={()=> setCounterStart(true)} onExit={()=> setCounterStart(false)}>
        <div className="counter__content">
          <div>
            <span className="ico__circle">
              
              <img src={Image2} alt="Calendar" className="counter__icons"/>
            </span>
           
            <h3 className="counter__title">
            {counterStart && 
            <CountUp start={300} end={365} duration={6} delay={0}/>}
            +
            </h3>
          </div>
          <p className="counter__descritpion">dana u goodini možete računati na nas</p>
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
                 <CountUp start={0} end={10} duration={2} delay={0}/>
                }
               +
            </h3>
          </div>
          <p className="counter__descritpion">Naš tim</p>
        </div>
        
        </ScrollTrigger>
      </div>
    </section>
  );
};

export default Counter;