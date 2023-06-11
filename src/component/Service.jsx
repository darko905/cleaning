import React from "react";
import Icon1 from "../images/icons/icon1.png";
import Icon2 from "../images/icons/icon2.png";
import Icon3 from "../images/icons/icon3.png";
import Icon4 from "../images/icons/icon4.png";
import Icon5 from "../images/icons/icon5.png";
import Icon6 from "../images/icons/icon6.png";
import Icon7 from "../images/icons/icon7.png";
import Icon8 from "../images/icons/icon8.png";
import Icon9 from "../images/icons/icon9.png";
import Icon10 from "../images/icons/icon10.png";

const Service = () => {
  return (
    <section className="section service container" id="service">
      <span className="section__subtitle">
        <p>Odabrane usluge</p>
      </span>
      <h2 className="section__title">
        Mi pružamo usluge čišćenja na <span>Zlatiboru,</span> i šire!
      </h2>

      <div className="service__container container grid">
        <div className="service__content">
          <div className="ico__circle">
            {/* <FaCar className="service__icons" /> */}
            <img src={Icon1} alt="house icons" className="service__icons" />
          </div>

          <h3 className="service__title">Čišćenje apartmana, stanova i kuća</h3>

          <p className="service__descritpion">
            Generalno čišćenje stanova obuhvata: skidanje paučine, brisanje
            prekidača,pajanje lustera i plafonjera, obostrano brisanje prozora
            (venecijanera i roletni). Ciscenje parocistacem i denzifekcija svih
            povrsina. Brisanje vrata, polica, ormara. Brisanje poda i
            radijatora. Brisanje spoljnih i unutrašnjih elemenata u kuhinji, kao
            i brisanje pločica. Brisanje elemenata u kupatilu, kao i zidnih
            pločica.
          </p>
        </div>

        <div className="service__content">
          <div className="ico__circle">
            <img src={Icon2} alt="ofice icon" className="service__icons" />
          </div>

          <h3 className="service__title">Čišćenje poslovnih objekata</h3>

          <p className="service__descritpion">
            Čišćenje poslovnih objekata po najpovoljnijim cenama. Poslovno
            čišćenje može biti generalno, periodično, svakodnevno. Nudimo usluge
            profesionalnog ciscenja masinski tvrdih podloga. Pranje tvrdih
            podnih obloga, kao i čišćenje i pranje stepeništa. Brisanje prašine
            sa nameštaja, polica, radnih površina, grejnih tela …
          </p>
        </div>

        <div className="service__content">
          <div className="ico__circle">
            <img src={Icon3} alt="building icon" className="service__icons" />
          </div>

          <h3 className="service__title">Čišćenje/Održavanje zgrada</h3>

          <p className="service__descritpion">
            Čišćenje zgrade jednom nedeljno obuhvata: masinski ciscenje tvrdih
            posloga, brisanje i pranje stepeništa ravnim mopom, metenje
            stepeništa, metenje hodnika, brisanje i pranje hodnika ravnim mopom,
            odstranjivanje reklamnog materijala, skidanje paučine, brisanje
            staklenih površina na ulaznim vratima, metenje ispred ulaza zgrade,
            brisanje gelendera, kontrola i zamena sijalica.
          </p>
        </div>
        <div className="service__content">
          <div className="ico__circle">
            <img src={Icon4} alt="window icon" className="service__icons" />
          </div>

          <h3 className="service__title">Pranje prozora i roletni</h3>

          <p className="service__descritpion">
            Obostrano pranje prozora, venecijanera i roletni
          </p>
        </div>
        <div className="service__content">
          <div className="service__content-ico__circle">
            <img src={Icon5} alt="furniture icon" className="service__icons" />
          </div>

          <h3 className="service__title">Čišćenje nameštaja</h3>

          <p className="service__descritpion">
            Efikasno čišćenje nameštaja i mobilijara
          </p>
        </div>
        <div className="service__content">
          <div className="ico__circle">
            <img src={Icon6} alt="bedclothes icon" className="service__icons" />
          </div>

          <h3 className="service__title">Pranje posteljina</h3>

          <p className="service__descritpion">
            Čišćenje i pranje posteljina nakon boravka gostiju
          </p>
        </div>
        <div className="service__content">
          <div className="ico__circle">
            <img src={Icon7} alt="bedclothes icon" className="service__icons" />
          </div>

          <h3 className="service__title">Čišćenje snega</h3>

          <p className="service__descritpion">
            Čišćenje snega ili dvorišta oko zgrada
          </p>
        </div>
        <div className="service__content">
          <div className="ico__circle">
            <img src={Icon8} alt="bedclothes icon" className="service__icons" />
          </div>

          <h3 className="service__title">Profesionalni Upravnik</h3>

          <p className="service__descritpion">
            Mozemo da Vam pruzimo uslugu licenciranog upravnika za vodjenje
            zgrade
          </p>
        </div>
        <div className="service__content">
          <div className="ico__circle">
            <img src={Icon9} alt="bedclothes icon" className="service__icons" />
          </div>

          <h3 className="service__title">Održavanje parkinga</h3>

          <p className="service__descritpion">
            Održavanje i čišćcenje parking mesta
          </p>
        </div>
        <div className="service__content">
          <div className="ico__circle">
            <img src={Icon10} alt="deeal icon" className="service__icons" />
          </div>

          <h3 className="service__title">Rentiranje Vašeg apartmana</h3>

          <p className="service__descritpion">
            Usluge rentiranja Vaseg apartmana po dogovoru
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
