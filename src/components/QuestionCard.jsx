import React from "react";
import { Timer} from "phosphor-react";

const QuestionCard = () => {
  return (
    <>
      <div
        className="qz-qn-card flex flex-col flex-align-center flex-justify-center qz-qn-card-wrap"
      >
        <div className="qz-qn-card-header flex flex-align-center flex-justify-space-btw qz-qn-card-chip" >
          <div>Question No : 1</div>
          <div className="flex flex-align-center">
            <Timer size={24} weight="bold" /> Timer
          </div>
        </div>

        <div className="qz-qn-card-question text-left qz-qn-card-chip" >
          Lorem ipsum dolor sit amet error fugiat magnam amet maxime quasi ipsum
          quas Lorem ipsum dolor sit amet error fugiat magnam amet maxime quasi
          ipsum quas
        </div>

        <div className="qz-qn-card-optn qz-qn-card-chip"  >Option 1</div>
        <div className="qz-qn-card-optn qz-qn-card-chip"  >Option 2</div>
        <div className="qz-qn-card-optn qz-qn-card-chip"  >Option 3</div>
        <div className="qz-qn-card-optn qz-qn-card-chip"  >Option 4</div>

      </div>

      
    </>
  );
};

export default QuestionCard;
