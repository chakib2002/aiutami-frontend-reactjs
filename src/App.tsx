import React from "react";
import { Routes, Route } from "react-router-dom";
import { SearchHousekeeper } from "./components/SearchHousekeeper";
import { SearchSeniorcaregiver } from "./components/SearchSeniorcaregiver";
import { SearchTutor } from "./components/SearchTutor";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/search/housekeeper" element={<SearchHousekeeper />} />
      <Route path="/search/tutor" element={<SearchTutor />} />
      <Route
        path="/search/seniorcaregiver"
        element={<SearchSeniorcaregiver />}
      />
    </Routes>
  );
}

export default App;
