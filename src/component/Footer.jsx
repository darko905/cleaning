import React from "react";

import Logo from "../images/Logo/LogoBlue.png";
import { Link } from "react-router-dom";
import Image1 from '../images/icons/envelope.png'
import Image2 from '../images/icons/phone.png'
import Image3 from '../images/icons/location.png'


const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="section footer">
      <div className="container">
        <div className="footer__content">
          <ul className="footer__content-1">
            <li>
              <img src={Logo} alt="Logo" />
            </li>
            <li>
              Mi smo tim profesionalnih ljudi sa dugogodišnjim iskustvom. Nudimo
              <br />
              pouzdanu i potpunu uslugu čišćenja različitim profilima klijenata,
              <br />
              od svakodnevnih čišćenja Vaših domova, ugostiteljskih objekata,
              <br />
              industrijskih objekata, maloprodaja i poslovnih , kancelarijskih
              <br />
              prostora, do vrtića i laboratorija koji zahtevaju posebnu pažnju.
              <br />
            </li>
          </ul>

          <ul className="footer__content-2">
            <li>Usluge</li>
            <li>
              
              Čišćenje kuća
            </li>
            <li>
              
              Čišćenje apartmana i stanova
            </li>
            <li>
           
              Čišćenje kancelarija i poslovnog prostora
            </li>
            <li>Pranje posteljina</li>
          </ul>

          <ul className="footer__content-2">
            <li>Kontakt</li>
            <li>
              <Link to="">
                <img src={Image2} alt="Phone icons" className="footer__content-2_icons"/>
                (060)
                1234567
              </Link>
            </li>
            <li>
              <Link to="">
                <img src={Image1} alt="Email icons" className="footer__content-2_icons"/>
                cicenjezlatibor@gmail.com
              </Link>
            </li>
            <li>
              <img src={Image3} alt="Loaction icons" className="footer__content-2_icons"/>
               Zlatibor
            </li>
          </ul>
        </div>
        <div className="copyright-text">
          <p>
            Copyright &copy; {year}, All Right Reserved Zlatibor ciscenje <br />
            <br />
            Designed with ❤ by
            <Link to="https://darkodjukic.netlify.app/" className="name">
              {" "}
              Darko Djukic
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
