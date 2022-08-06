import React from "react";
import { ArrowCircleUp } from "phosphor-react";
import Navbar from "../components/Navbar";
import ResultCard from "../components/ResultCard";

const ResultPage = () => {
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

      <div
        className="qz-result-container"
      >
        <ResultCard />
      </div>
    </>
  );
};

export default ResultPage;
