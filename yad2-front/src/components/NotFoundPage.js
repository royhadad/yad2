import React from 'react';
import { Link } from 'react-router-dom';
import resources from '#resources#';
const notFoundPageResources = resources.notFoundPage;

const NotFoundPage = () => (
  <div className='not-found-page__wrapper'>
    <div className='not-found-page__container'>
      <div className='not-found-page__img-container'>
        <img src={notFoundPageResources.imgURL} alt="page not found" />
        <span>404</span>
      </div>
      <span className='not-found-page__bottom-text'>{notFoundPageResources.bottomText}</span>
      <Link to="/realestate" className='react-link'>{notFoundPageResources.bottomButton}</Link>
    </div>
  </div>
);

export default NotFoundPage;