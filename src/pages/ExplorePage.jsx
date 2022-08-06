import React from "react";
import Navbar from "../components/Navbar";
import QuizDisplayCard from "../components/QuizDisplayCard";
import CategoryBar from "../components/CategoryBar";
import { ArrowCircleUp } from "phosphor-react";

const VideoListingPage = () => {
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
            <QuizDisplayCard />
            <QuizDisplayCard />
            <QuizDisplayCard />
            <QuizDisplayCard />
            <QuizDisplayCard />
            <QuizDisplayCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoListingPage;
