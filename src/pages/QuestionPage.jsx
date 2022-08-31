import React from "react";
import QuestionCard from "../components/QuestionCard";
import { ArrowCircleUp } from "phosphor-react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { questions } from "../database/questions";
import { useParams } from "react-router-dom";
import { useScore } from "../context/score-context";

const QuestionPage = () => {
  const title = useParams();

  const { scoreDispatch } = useScore();

  const selectedArray = questions.filter((item) => item.title === title.title);

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

      <div className="qz-qn-container">
        {selectedArray.map((item) => {
          return <QuestionCard question={item} key={item._id} />;
        })}

        <Link to="/result">
          <div className="qz-qn-card-question text-center qz-qn-card-chip">
            Submit
          </div>
        </Link>

        <Link to="/">
          <div
            className="qz-qn-card-question text-center qz-qn-card-chip"
            onClick={() => scoreDispatch({ type: "RESET" })}
          >
            Exit
          </div>
        </Link>
      </div>
    </>
  );
};

export default QuestionPage;
