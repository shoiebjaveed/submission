import React from 'react'

import { BsSpotify } from "react-icons/bs";
import { BsWordpress } from "react-icons/bs";
import { BsTwitch } from "react-icons/bs";
import { BsStripe } from "react-icons/bs";
import { BsSkype } from "react-icons/bs";
import { BsSinaWeibo } from "react-icons/bs";
import { BsReddit } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";

import './b2.css';

const B2 = () => {
  return (
      <div className="wrapper">
          <div className="slider">
        <h2>Our Customers</h2>
            <div className="slide">
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
            <div className="slide">
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
      </div>

  )
}

export default B2