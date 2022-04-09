import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { SearchPageHousekeeper } from "./pages/SearchPageHousekeeper";
import { SearchPageSeniorcaregiver } from "./pages/SearchPageSeniorcaregiver";
import { SearchPageTutor } from "./pages/SearchPageTutor";
import SignupPage from "./pages/SignupPage";
import { AnimatePresence } from "framer-motion";
import { ProtectedResults } from "./pages/ProtectedResults";
import { ResultPage } from "./pages/ResultPage";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/search/housekeeper" element={<SearchPageHousekeeper />} />
        <Route path="/search/tutor" element={<SearchPageTutor />} />
        <Route
          path="/search/seniorcaregiver"
          element={<SearchPageSeniorcaregiver />}
        />
        <Route element={<ProtectedResults />}>
          <Route path="Results" element={<ResultPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
