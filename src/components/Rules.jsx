import React from "react";
import {X} from "phosphor-react";
import {Link} from "react-router-dom";

const Rules = () => {
  return (
    <>
    <div className="qz-rule-container flex flex-align-item flex-justify-center ">    
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

<Link to="/questions">
        <button class="btn btn-warning-ghost ff-btn-secondary btn-lg">
          START
        </button>
        </Link>
      </div>
    </div>
     
    </>
  );
};

export default Rules;
