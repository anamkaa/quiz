import React from "react";

const CorrectAnswerCard = ({ question }) => {
  return (
    <>
      <div className="qz-qn-card flex flex-col flex-align-center flex-justify-center qz-qn-card-wrap">
        <div className="qz-qn-card-header flex flex-align-center flex-justify-space-btw qz-qn-card-chip">
          <div>Question No : {question?.number}</div>
          {/* <div className="flex flex-align-center">
        Score: {scoreState.score}
      </div> */}
        </div>

        <div className="qz-qn-card-question text-left qz-qn-card-chip txt-optn">
          {question?.statement}
        </div>

        <div className="qz-qn-card-optn qz-qn-card-chip chip-hover">
          {question?.option[0]?.text}
        </div>
        {/* <div className="qz-qn-card-optn qz-qn-card-chip chip-hover" onClick={()=>scoreCalculator(question.option[1].isCorrect)}>
      {question?.option[1]?.text}
    </div>
    <div className="qz-qn-card-optn qz-qn-card-chip chip-hover" onClick={()=>scoreCalculator(question.option[2].isCorrect)}>
      {question?.option[2]?.text}
    </div>
    <div className="qz-qn-card-optn qz-qn-card-chip chip-hover" onClick={()=>scoreCalculator(question.option[3].isCorrect)}>
      {question?.option[3]?.text}
    </div> */}
      </div>
    </>
  );
};

export default CorrectAnswerCard;
