import React from "react";
import { BookBookmark, Timer } from "phosphor-react";
import {Link} from "react-router-dom";

const QuizDisplayCard = () => {
  return (
    <>
      <div
        className="qz-card"
      >
        <div className="qz-card-img">
          <img
            src="https://th.bing.com/th/id/OIP.rqq0T0ITonG-KO35494I3gHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="card"
            className="image"
          />
        </div>
        <div className="qz-card-description">
          <div className="h4">Quiz Title : Lets play</div>
          <div className="h5">Quiz description</div>
        </div>
        <div className="qz-card-foot flex flex-align-center flex-justify-space-around" style={{padding: "0.5rem 0"}}>
          <div className="flex flex-align-center">
            <BookBookmark size={24} /> <span className="text-small">10 Questions</span> 
          </div>
          <div className="flex flex-align-center">
            <Timer size={24} /> <span className="text-small">10 Minutes</span>
          </div>
        </div>
        <Link to="/rules">
        <button class="btn btn-warning-ghost ff-btn-secondary btn-lg">
          PLAY
        </button>
        </Link>
      </div>
    </>
  );
};

export default QuizDisplayCard;
