import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <section className='oopss ' >
    <div className='error-text container' >
        <img src='https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg' alt="404"/>
        <span>404 PAGE</span>
        <p class="p-a">
           . The page you were looking for could not be found</p>
        <Link to='/' class="back"><button className="button">... Back to previous page</button></Link>
    </div>
    </section>
    
  );
};

export default PageNotFound;
