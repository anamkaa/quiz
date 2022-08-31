import React, { useState } from "react";
import { useScore } from "../context/score-context";

const QuestionCard = ({ question }) => {
  const { scoreState, scoreDispatch } = useScore();
  const [bgColor, setBgColor] = useState({ q_no: undefined, color: "" });
  const [disable, setDisable] = useState(false);

  const scoreCalculator = (isTrue, q_no) => {
    setDisable(true);
    if (isTrue === true) {
      scoreDispatch({ type: "INCREMENT", payload: 1 });
      setBgColor({ q_no, color: "green" });
    } else {
      setBgColor({ q_no, color: "red" });
    }
  };

  return (
    <>
      <div className="qz-qn-card flex flex-col flex-align-center flex-justify-center qz-qn-card-wrap">
        <div className="qz-qn-card-header flex flex-align-center flex-justify-space-btw qz-qn-card-chip">
          <div>Question No : {question?.number}</div>
          <div className="flex flex-align-center">
            Score: {scoreState.score}
          </div>
        </div>

        <div className="qz-qn-card-question text-left qz-qn-card-chip txt-optn">
          {question?.statement}
        </div>

        <button
          className="qz-qn-card-optn qz-qn-card-chip chip-hover"
          onClick={() => scoreCalculator(question.option[0].isCorrect, 0)}
          disabled={disable}
          style={{ backgroundColor: bgColor.q_no === 0 && bgColor.color }}
        >
          {question?.option[0]?.text}
        </button>
        <button
          className="qz-qn-card-optn qz-qn-card-chip chip-hover"
          onClick={() => scoreCalculator(question.option[1].isCorrect, 1)}
          disabled={disable}
          style={{ backgroundColor: bgColor.q_no === 1 && bgColor.color }}
        >
          {question?.option[1]?.text}
        </button>
        <button
          className="qz-qn-card-optn qz-qn-card-chip chip-hover"
          onClick={() => scoreCalculator(question.option[2].isCorrect, 2)}
          disabled={disable}
          style={{ backgroundColor: bgColor.q_no === 2 && bgColor.color }}
        >
          {question?.option[2]?.text}
        </button>
        <button
          className="qz-qn-card-optn qz-qn-card-chip chip-hover"
          onClick={() => scoreCalculator(question.option[3].isCorrect, 3)}
          disabled={disable}
          style={{ backgroundColor: bgColor.q_no === 3 && bgColor.color }}
        >
          {question?.option[3]?.text}
        </button>
      </div>
    </>
  );
};

export default QuestionCard;
