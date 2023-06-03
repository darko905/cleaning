import React, { useEffect, useState } from 'react'
import Slika1 from '../images/Gallery/project-1-1.jpg';
import Slika2 from '../images/Gallery/project-1-2.jpg';
import Slika3 from '../images/Gallery/project-1-3.jpg';
import Slika4 from '../images/Gallery/project-1-4.jpg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Gallery = () => {
  SwiperCore.use([Navigation, Pagination]);

  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section className="section container testominial">
    <span className="section__subtitle">Pogledajte galeriju naših usluga</span>
    <h2 className="section__title">Galerija</h2>
    <Swiper
      navigation
      pagination
      slidesPerView={slidesPerView} 
      spaceBetween={20} 
    

      className="my-swiper" 
    >
      <SwiperSlide className="swiper-slide"> 
        <img src={Slika1} alt="Slika 1" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img src={Slika2} alt="Slika 2" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img src={Slika3} alt="Slika 3" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide"> 
        <img src={Slika4} alt="Slika 4" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img src={Slika1} alt="Slika 2" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img src={Slika2} alt="Slika 3" />
      </SwiperSlide>
    </Swiper>
    
    
    </section>
    
  )
}

export default Gallery
