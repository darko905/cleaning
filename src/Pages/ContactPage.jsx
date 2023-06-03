import React, { useEffect, useState } from "react";
import HeroPages from "../component/HeroPages";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Logo from "../images/Logo/Logo-text.png";

const ContactPage = () => {
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
            <HeroPages name="Kontakt" />
            <Contact />
            <Footer />
          </section>
        </>
      )}
      ;
    </>
  );
};

export default ContactPage;
