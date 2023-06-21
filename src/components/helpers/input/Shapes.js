import React from "react";
import "./shapes.css";
import Slanted from "./Slanted";
import { BsFillLockFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { HiChatAlt2 } from "react-icons/hi";

const Shapes = () => {
  return (
    <div className="shapes">
      <div className="shapes-text">
        <h2>The enterprise LLM</h2>
        <Slanted title="CONTACT SALES" />
      </div>
      <div className="div-container">
        <div className="main-content">
          <h1>1</h1>
          <i>
            <BsFillLockFill />
          </i>
          <p>
            <b>SECURE DEPLOYMENT OPTIONS</b>
            <br />
            <br />
            We offer multiple hosting options to give you full control over data
            security and privacy, with private cloud, secure cloud partners
            (AWS, Google), and Cohere’s managed cloud as options.
          </p>
        </div>
        <div className="one-line">
          <div className="second-content">
            <h1>2</h1>
            <i>
              <AiFillSetting />
            </i>
            <p>
              <b>CUSTOMIZABLE MODELS</b>
              <br />
              <br />
              Our language models are performant out-of-the-box, but we offer
              custom model training (fine-tunes) that make your models work for
              any use case, domain or industry.
            </p>
          </div>
          <div className="third-content">
            <h1>3</h1>
            <i>
              <HiChatAlt2 />
            </i>
            <p>
              <b>EXCELLENT CUSTOMER SUPPORT</b>
              <br />
              <br />
              We understand that building apps based on language models is new,
              so we offer industry leading support. Over 98% of questions are
              answered by our docs, and our live support responds to customers
              in less than a minute
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Shapes;
