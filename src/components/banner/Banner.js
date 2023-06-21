import React from 'react';
import './banner.css';

import { BsSpotify } from "react-icons/bs";
import { BsWordpress } from "react-icons/bs";
import { BsTwitch } from "react-icons/bs";
import { BsStripe } from "react-icons/bs";
import { BsSkype } from "react-icons/bs";
import { BsSinaWeibo } from "react-icons/bs";
import { BsReddit } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h2>Our Customers</h2>
      </div>
      <div className="logos">
        <i className="icon-wrapper">
          <BsSpotify />
          <span>Spotify</span>
        </i>
        <i className="icon-wrapper">
          <BsWordpress />
          <span>WordPress</span>
        </i>
        <i className="icon-wrapper">
          <BsTwitch />
          <span>Twitch</span>
        </i>
        <i className="icon-wrapper">
          <BsStripe />
          <span>Stripe</span>
        </i>
        <i className="icon-wrapper">
          <BsSkype />
          <span>Skype</span>
        </i>
        <i className="icon-wrapper">
          <BsSinaWeibo />
          <span>SinaWeibo</span>
        </i>
        <i className="icon-wrapper">
          <BsReddit />
          <span>Reddit</span>
        </i>
        <i className="icon-wrapper">
          <BsPinterest />
          <span>Pinterest</span>
        </i>
      </div>
    </div>
  );
};

export default Banner;
