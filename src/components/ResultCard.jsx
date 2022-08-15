import React from "react";
import { Link } from "react-router-dom";
import { MagicWand } from "phosphor-react";
import { useScore } from "../context/score-context";
import { questions } from "../database/questions";
import CorrectAnswerCard from "./CorrectAnswerCard";
import { useParams } from "react-router-dom";

const ResultCard = () => {
  const {
    scoreState: { score },
    scoreDispatch,
  } = useScore();

  return (
    <>
      <div className="qz-result-card flex flex-col flex-align-center flex-justify-center qz-qn-result-card-wrap qz-qn-card-wrap">
        <div className="qz-qn-card-question text-left qz-qn-card-chip">
          Your Score : {score}
        </div>

        <Link to="/explore/all">
          <div
            className="qz-qn-card-question text-center h5 flex flex-align-center flex-justify-center qz-qn-card-chip"
            onClick={() => scoreDispatch({ type: "RESET" })}
          >
            Explore More <MagicWand size={20} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default ResultCard;
