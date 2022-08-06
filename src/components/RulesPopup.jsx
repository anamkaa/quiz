import React from "react";
import {X} from "phosphor-react";

const RulesPopup = () => {
  return (
    <>
    <div
        className="qz-rule-wrap"
      >
        <div className="flex flex-align-center flex-justify-end"> <X size={24} weight="bold" style={{color:"white"}} /></div>
        
        <div className="qz-rule-heading h3">Rules</div>

        <div
          className="qz-rule-point h5 text-left"
          style={{ margin: "0.5rem" }}
        >
          1. Lorem ipsum dolor sit amet error fugiat magnam amet maxime quasi
          ipsum quas
        </div>

        <div
          className="qz-rule-point h5 text-left"
          style={{ margin: "0.5rem" }}
        >
          2. Lorem ipsum dolor sit amet error fugiat magnam amet maxime quasi
          ipsum quas
        </div>

        <div
          className="qz-rule-point h5 text-left"
          style={{ margin: "0.5rem" }}
        >
          3. Lorem ipsum dolor sit amet error fugiat magnam amet maxime quasi
          ipsum quas
        </div>

      </div>
      </>
  )
}

export default RulesPopup