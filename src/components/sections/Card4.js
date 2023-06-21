import React from "react";
import './card4.css';
import Slanted from "../helpers/input/Slanted";
import { BsArrowUpRight } from "react-icons/bs";

const Card4 = () => {
  return (
    <div className="card4">
      <div className="backgroud-bg">
        <div className="content-wrapper">
          <h2>We deliver the world’s most advanced LLMs</h2>
          <p>
            Our Command model is among the highest performing models as measured
            by Stanford University’s HELM benchmarks. We’re investing heavily
            every day in improving model performance for industry use cases, and
            we release updated models weekly so our customers always have access
            to the cutting edge in performance.
          </p>
          <div className="new-animate" >
        <div className="new-title">LEARN MORE ABOUT COMMANDS</div>
        <div className="new-icon" >
          <BsArrowUpRight />
        </div>
      </div>
        </div>
        <div className="table-wrapper">
          <table>
            <tbody>
              <tr>
                <td>Model</td>
                <td>Model Type</td>
                <td>Mean win rate</td>
              </tr>
              <tr className="different-color">
                <td>cohere Command</td>
                <td>Command</td>
                <td>93%</td>
              </tr>
              <tr>
                <td>Competitor A Model 1</td>
                <td>Command</td>
                <td>89.8%</td>
              </tr>
              <tr>
                <td>Competitor B Model</td>
                <td>Command</td>
                <td>84.2%</td>
              </tr>
              <tr>
                <td>Competitor C Model</td>
                <td>Command</td>
                <td>80.6%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Card4;
