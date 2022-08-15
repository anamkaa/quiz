import React from "react";
import Navbar from "../components/Navbar";
import QuizDisplayCard from "../components/QuizDisplayCard";
import CategoryBar from "../components/CategoryBar";
import { ArrowCircleUp } from "phosphor-react";
import { quiz } from "../database/quiz";
import { filterBySearch } from "../utility/bySearchUtil";
import { useFilter } from "../context/filter-context";
import { filterByLevel } from "../utility/byLevelUtil";
import { filterByCategory } from "../utility/byCategoryUtil";

const VideoListingPage = () => {
  const {
    filterState: { bySearch, byLevel, byCategory },
  } = useFilter();

  const filteredByLevel = filterByLevel(quiz, byLevel);
  const filteredByCategory = filterByCategory(filteredByLevel, byCategory);
  const filteredBySearch = filterBySearch(filteredByCategory, bySearch);

  return (
    <>
      <Navbar />
      <ArrowCircleUp
        size={36}
        weight="fill"
        className="ff-arrowup"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />

      <div className="ff-container">
        <div className="ff-container-content">
          <CategoryBar />

          <div className="ff-container-video-card">
            {filteredBySearch.map((item) => {
              return <QuizDisplayCard quiz={item} key={item._id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoListingPage;
