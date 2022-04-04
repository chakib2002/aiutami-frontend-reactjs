import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { SearchPageHousekeeper } from "./pages/SearchPageHousekeeper";
import { SearchPageSeniorcaregiver } from "./pages/SearchPageSeniorcaregiver";
import { SearchPageTutor } from "./pages/SearchPageTutor";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/search/housekeeper" element={<SearchPageHousekeeper />} />
      <Route path="/search/tutor" element={<SearchPageTutor />} />
      <Route
        path="/search/seniorcaregiver"
        element={<SearchPageSeniorcaregiver />}
      />
    </Routes>
  );
}

export default App;
