import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import ExplorePage from "../src/pages/ExplorePage";
import RulePage from "./pages/RulePage";
import QuestionPage from "./pages/QuestionPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore/:categoryName" element={<ExplorePage />} />
        <Route path="/rules" element={<RulePage />} />
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
