import React, { useEffect } from "react";
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
import axios from "axios";
import { setFirstName, setId, setIsAuth, setLastName, setLink } from "./state/Slices/isAuthenticatedSlice";
import { useAppDispatch } from "./state/configureStore";
import { ProtectedAuthentication} from "./pages/ProtectedAuthentication";
import { MoreDetailsPage } from "./pages/MoreDetailsPage";


function App() {

  
  axios.defaults.withCredentials = true;


  const dispatch = useAppDispatch()

  useEffect(()=>{
    axios.get("http://localhost:3001/isAuth")
    .then((res)=>{
      if(res.data.message ==="you have logged in successfully ."){
        dispatch(setIsAuth({text : true}))
        dispatch(setFirstName({text : res.data.first_name}))
        dispatch(setLastName({text : res.data.last_name}))
        dispatch(setId({text : res.data.id}))
        dispatch(setLink({text : res.data.link}))
      }
    })
    .catch((err)=>{
        dispatch(setIsAuth({text : false}))
        dispatch(setFirstName({text :""}))
        dispatch(setLastName({text :""}))
        dispatch(setId({text : null}))
        dispatch(setLink({text : null}))     
    })
  })


  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route element={<ProtectedAuthentication/>} >
          <Route path="/signin" element={<LoginPage />} />
        </Route>
        <Route element={<ProtectedAuthentication/>}>
          <Route path="/signup" element={<SignupPage />} /> 
        </Route>
        <Route path="/search/housekeeper" element={<SearchPageHousekeeper />} />
        <Route path="/search/tutor" element={<SearchPageTutor />} />
        <Route
          path="/search/seniorcaregiver"
          element={<SearchPageSeniorcaregiver />}
        />
        <Route element={<ProtectedResults />}>
          <Route path="Results" element={<ResultPage />} />
        </Route>
        <Route path="/Results/:user_id" element={<MoreDetailsPage/>} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
