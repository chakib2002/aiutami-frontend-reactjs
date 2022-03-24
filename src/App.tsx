import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    
 
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signin" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>}/>
        
      </Routes>
  
  );
}

export default App;
