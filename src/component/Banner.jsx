import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section className="book-banner">
       <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2><span className='shapes-cirlce'>Pozovite</span> nas da pružimo izvanrednu uslugu!</h2>
            <Link to="tel:+381601234567">
              <div className='text-content-contact'>
                  <AiFillPhone/>
                <h3>(060) 00000000</h3>
              </div>
            </Link>
            
          </div>
        </div>
    </section>
  )
}

export default Banner
