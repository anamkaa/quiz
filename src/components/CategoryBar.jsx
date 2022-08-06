import React, { useState } from "react";
import { Funnel } from "phosphor-react";
import FilterPopup from "../components/FilterPopup";

const CategoryBar = () => {
  const [filterPopup, setFilterPopup] = useState(false);

  return (
    <>
      <div
        className="ff-container-options flex flex-align-center flex-justify-space-btw"
        id="category"
      >
        <div className="ff-container-content-category flex flex-align-center flex-wrap">
          <div className="ff-category-text btn  ff-btn-secondary">All</div>
          <div className="ff-category-text btn  ff-btn-secondary">Webshows</div>
          <div className="ff-category-text btn  ff-btn-secondary">Cartoons</div>
          <div className="ff-category-text btn  ff-btn-secondary">Movies</div>
          <div className="ff-category-text btn  ff-btn-secondary">Animes</div>
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
