import React, { useEffect, useState } from "react";
import HeroPages from "../component/HeroPages";
import Service from "../component/Service";
import Choose from "../component/Choose";
import Banner from "../component/Banner";
import Gallery from "../component/Gallery";
import Footer from "../component/Footer";
import Logo from "../images/Logo/Logo-text.png";

const ServicePage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader-clean">
          <img src={Logo} alt="Logo" />
        </div>
      ) : (
        <>
          <section className="section">
            <HeroPages name="Usluge" />
            <Service />
            <Banner />
            <Choose />
            <Gallery />
            <Footer />
          </section>
        </>
      )}
      ;
    </>
  );
};

export default ServicePage;
