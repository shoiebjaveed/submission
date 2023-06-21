import React from "react";
import "./about.css";
import Slanted from "../helpers/input/Slanted";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-text">
        <h1>Transform your products with LLMs</h1>
      </div>
      <div className="description-text">
      <p>
        It’s never been easier to add AI to your products. Cohere’s models power
        interactive chat features, generate text for product descriptions, blog
        posts, and articles, and capture the meaning of text for search, content
        moderation, and intent recognition.
      </p>
      <Slanted title="TRY THE PLAYGROUND" />
      </div>
    </section>
  );
};

export default About;
