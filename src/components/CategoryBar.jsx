import React, { useState } from "react";
import { Funnel } from "phosphor-react";
import FilterPopup from "../components/FilterPopup";
import { useFilter } from "../context/filter-context";

const CategoryBar = () => {
  const [filterPopup, setFilterPopup] = useState(false);
  const { filterDispatch } = useFilter();

  return (
    <>
      <div
        className="ff-container-options flex flex-align-center flex-justify-space-btw"
        id="category"
      >
        <div className="ff-container-content-category flex flex-align-center flex-wrap">
          <div
            className="ff-category-text btn  ff-btn-secondary"
            onClick={() => filterDispatch({ type: "CLEAR_CATEGORY_FILTER" })}
          >
            All
          </div>
          <div
            className="ff-category-text btn  ff-btn-secondary"
            onClick={() =>
              filterDispatch({ type: "FILTER_BY_CATEGORY", payload: "webshow" })
            }
          >
            Webshows
          </div>
          <div
            className="ff-category-text btn  ff-btn-secondary"
            onClick={() =>
              filterDispatch({ type: "FILTER_BY_CATEGORY", payload: "cartoon" })
            }
          >
            Cartoons
          </div>
          <div
            className="ff-category-text btn  ff-btn-secondary"
            onClick={() =>
              filterDispatch({ type: "FILTER_BY_CATEGORY", payload: "movie" })
            }
          >
            Movies
          </div>
          <div
            className="ff-category-text btn  ff-btn-secondary"
            onClick={() =>
              filterDispatch({ type: "FILTER_BY_CATEGORY", payload: "anime" })
            }
          >
            Animes
          </div>
        </div>

        <div
          onClick={() =>
            setFilterPopup((filterPopup) => (!filterPopup ? true : false))
          }
          className="flex flex-align-center cursor"
        >
          <span className="text-white">Filter</span>
          <Funnel size={12} className="text-white ff-icon-filter" />
        </div>

        {filterPopup && <FilterPopup />}
      </div>
    </>
  );
};

export default CategoryBar;
