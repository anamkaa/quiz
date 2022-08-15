import React from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../context/filter-context";
import { categories } from "../database/categories";

const CategoryPill = ({ categories }) => {
  const { filterDispatch } = useFilter();
  return (
    <>
      <Link to={`/explore/${categories.categoryName}`}>
        <button
          className="btn ff-btn-secondary"
          onClick={() =>
            filterDispatch({
              type: "FILTER_BY_CATEGORY",
              payload: categories.categoryName,
            })
          }
        >
          {categories.categoryName}
        </button>
      </Link>
    </>
  );
};

const Hero = () => {
  return (
    <>
      <div className="ff-hero-wrap">
        <div className="ff-hero-container-main flex flex-row-rev flex-wrap flex-justify-space-evenly flex-align-center">
          <div className="ff-hero-container-img">
            <img
              src="../../assets/hero.svg"
              className="image image-md ff-hero-img"
              alt="hero-img"
            />
          </div>

          <div className="ff-hero-container-text flex flex-col text-left flex-align-start">
            <p className="ff-hero-text-box">
              <p className="h1"> EXPLORE QUIZBIZ </p>
            </p>
            <Link to="/explore/all">
              <button class="btn btn-warning-ghost ff-btn-primary btn-lg">
                PLAY NOW
              </button>
            </Link>
            <div className="ff-hero-container-category">
              {categories.map((item) => {
                return <CategoryPill categories={item} key={item._id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
