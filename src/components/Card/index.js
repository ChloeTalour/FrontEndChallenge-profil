import React from 'react';
import './styles.scss';
import BackgroundImg from '../../assets/images/bg-pattern-card.svg';
import ProfilePicture from '../../assets/images/image-victor.jpg';

const Card = () => (
  <div className="card">
    <img src={BackgroundImg} alt="" className="card__background" />
    <div className="card__content">
      <img src={ProfilePicture} alt="" className="card__content--img" />
      <h1 className="card__content--name">Victor Crest <span>26</span></h1>
      <p className="card__content--city">London</p>
      <ul className="card__content--stat">
        <li>80K <span>Followers</span></li>
        <li>803K <span>Likes</span></li>
        <li>1.4K <span>Photos</span></li>
      </ul>
    </div>

  </div>
);

export default Card;
