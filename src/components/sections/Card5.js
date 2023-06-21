import React from 'react';
import "./card5.css";
import Slanted from '../helpers/input/Slanted';

const Card5 = () => {
  return (
    <section className="bottom-section">
      <div className="left-div">
      <b>LLM UNIVERSITY</b>
      <h2>Curious about Large<br /> language models?</h2>
      <p>
      LLM University offers an approachable and structured <br /> curriculum to get you speaking our language.
      </p>
      <Slanted title="START LEARNING"/>
      </div>
      <div className="right-div"></div>
    </section>
  );
};

export default Card5;
