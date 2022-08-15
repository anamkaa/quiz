import React from "react";
import { BookBookmark, Timer } from "phosphor-react";
import { Link } from "react-router-dom";

const QuizDisplayCard = ({ quiz }) => {
  return (
    <>
      <div className="qz-card">
        <div className="qz-card-img">
          <img src={quiz.imgSrc} alt="card" className="image image-sm" />
        </div>
        <div className="qz-card-description">
          <div className="h4 text-black text-bold">{quiz.title}</div>
          <div className="h6 text-black">{quiz.level}</div>
        </div>
        <div
          className="qz-card-foot flex flex-align-center flex-justify-space-around"
          style={{ padding: "0.5rem 0" }}
        >
          <div className="flex flex-align-center">
            <BookBookmark size={24} />{" "}
            <span className="text-small text-black">
              {quiz.questionNumber} Questions
            </span>
          </div>
          <div className="flex flex-align-center">
            <Timer size={24} />{" "}
            <span className="text-small text-black">{quiz.time} Minutes</span>
          </div>
        </div>
        <Link to={`/questions/${quiz.title}`}>
          <button class="btn btn-warning-ghost ff-btn-secondary btn-lg chip-hover">
            PLAY
          </button>
        </Link>
      </div>
    </>
  );
};

export default QuizDisplayCard;
