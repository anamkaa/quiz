import React from "react";
import { UserSwitch } from "phosphor-react";
import { Link } from "react-router-dom";
import { useFilter } from "../context/filter-context";

const Navbar = () => {
  const { filterDispatch } = useFilter();

  return (
    <>
      <nav className="nav-wrap ff-nav-wrap">
        <div className="nav-head ff-nav-head">
          {" "}
          <Link to="/"> QuizBiz </Link>
        </div>

        <div className="ff-nav-wrap-search">
          <input
            type="search"
            className="ff-nav-search"
            placeholder="search"
            onChange={(e) => {
              filterDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
          />
        </div>

        <div className="ff-nav-icon-wrap flex flex-align-center flex-justify-center">
          <div className="ff-nav-icon-chip">
            <UserSwitch size={32} weight="bold" />
          </div>

          <Link to="/rules">
            <div className="ff-nav-icon-chip h5">Rules</div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
