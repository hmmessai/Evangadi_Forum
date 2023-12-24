import React from "react";
import LandingLayout from "./pages/LandingLayout/LandingLayout";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import NewQuestion from "./components/PostQuestion/NewQuestion";
import Answer from "./components/Answer/Answer";
import FooterComp from "./components/Footer/FooterComp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingLayout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/questions" element={<NewQuestion />} />
        <Route path="/questions/:questionId/answers" element={<Answer />} />
      </Routes>
      {/* <FooterComp></FooterComp> */}
    </>
  );
}

export default App;
