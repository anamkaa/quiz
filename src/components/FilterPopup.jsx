import React from "react";
import { SortAscending, SortDescending } from "phosphor-react";
import { useFilter } from "../context/filter-context";

const FilterPopup = () => {
  const { filterDispatch } = useFilter();

  return (
    <>
      <div className="ff-popup-sort text-orange">
        <div
          className="ff-popup-chip flex flex-align-center flex-justify-start text-left"
          onClick={() =>
            filterDispatch({ type: "FILTER_BY_LEVEL", payload: "easy" })
          }
        >
          <input
            type="radio"
            name="sort-input"
            id=""
            className="ff-popup-text"
          />
          Easy
        </div>

        <div
          className="ff-popup-chip flex flex-align-center flex-justify-start text-left"
          onClick={() =>
            filterDispatch({ type: "FILTER_BY_LEVEL", payload: "medium" })
          }
        >
          <input
            type="radio"
            name="sort-input"
            id=""
            className="ff-popup-text"
          />
          Medium
        </div>

        <div
          className="ff-popup-chip flex flex-align-center flex-justify-start text-left"
          onClick={() =>
            filterDispatch({ type: "FILTER_BY_LEVEL", payload: "hard" })
          }
        >
          <input
            type="radio"
            name="sort-input"
            id=""
            className="ff-popup-text"
          />
          Hard
        </div>

        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left">
          <input
            type="radio"
            name="sort-input"
            id=""
            className="ff-popup-text"
            onClick={() => filterDispatch({ type: "CLEAR_LEVEL_FILTER" })}
          />
          Clear
        </div>
      </div>
    </>
  );
};

export default FilterPopup;
