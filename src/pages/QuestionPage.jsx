import React from "react";
import QuestionCard from "../components/QuestionCard";
import { ArrowCircleUp } from "phosphor-react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const QuestionPage = () => {
  return (
    <>
      <Navbar />
      <ArrowCircleUp
        size={36}
        weight="fill"
        className="ff-arrowup"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />

      <div
        className="qz-qn-container"
      >
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />

        <Link to="/result">
          <div
            className="qz-qn-card-question text-center qz-qn-card-chip"
          >
            Submit
          </div>
        </Link>

        <Link to="/">
          <div
            className="qz-qn-card-question text-center qz-qn-card-chip"
          >
            Exit
          </div>
        </Link>
      </div>
    </>
  );
};

export default QuestionPage;
