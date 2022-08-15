import React from "react";
import { X } from "phosphor-react";
import { Link } from "react-router-dom";

const Rules = () => {
  return (
    <>
      <div className="qz-rule-container flex flex-align-item flex-justify-center ">
        <div className="qz-rule-wrap">
          <Link to="/explore/all">
            <div className="flex flex-align-center flex-justify-end">
              {" "}
              <X size={24} weight="bold" style={{ color: "white" }} />
            </div>
          </Link>

          <div className="qz-rule-heading h3">Rules</div>

          <div
            className="qz-rule-point h5 text-left"
            style={{ margin: "0.5rem" }}
          >
            1. There are 5 questions each in every quiz , along with multiple
            choice options.
          </div>

          <div
            className="qz-rule-point h5 text-left"
            style={{ margin: "0.5rem" }}
          >
            2. Among all options only one is correct.
          </div>

          <div
            className="qz-rule-point h5 text-left"
            style={{ margin: "0.5rem" }}
          >
            3. If correct answer is chosen , the score increases but for wrong
            answer score remains same.
          </div>

          <div
            className="qz-rule-point h5 text-left"
            style={{ margin: "0.5rem" }}
          >
            4. If you quit , the progress is lost.
          </div>
        </div>
      </div>
    </>
  );
};

export default Rules;
