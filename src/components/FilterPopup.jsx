import React from "react";
import { SortAscending, SortDescending } from "phosphor-react";

const FilterPopup = () => {
  return (
    <>
      <div className="ff-popup-sort text-orange">
        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left">
          <input
            type="radio"
            name="sort-input"
            id=""
            className="ff-popup-text"
          />
          <SortAscending size={18} className="ff-popup-icon" />
          Date Added (newest)
        </div>

        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left">
          <input
            type="radio"
            name="sort-input"
            id=""
            className="ff-popup-text"
          />
          <SortDescending size={18} className="ff-popup-icon" />
          Date Added (oldest)
        </div>

        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left">
          <input
            type="radio"
            name="sort-input"
            id=""
            className="ff-popup-text"
          />
          Clear
        </div>
      </div>
    </>
  );
};

export default FilterPopup;
