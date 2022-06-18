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
import { clearNotifications, setDBNotifications, setRedisNotifications } from "./state/Slices/notificationSlice";
import { dbNotificationInterface, RedisNotificationInterface } from "./state/types/interfaces";


function App() {

  
  axios.defaults.withCredentials = true;

  const location = useLocation();
  const dispatch = useAppDispatch();
  const array :number [] = []

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


  useEffect(()=>{
    dispatch(clearNotifications());
    fetchNotificationsFromdb(); 
  },[])

  
  useEffect(()=>{
    const timer = setInterval(
      () => fetchNotificationsFromRedis(),
      3000
    );
    return () => clearTimeout(timer); 
  },[])


  const fetchNotificationsFromdb = ()=>{
    axios.get('http://localhost:3001/fetchNotifications')
    .then(res=>{
      res.data.map((element :dbNotificationInterface)=>{
        return (
          dispatch(setDBNotifications({
            id : element.id,
            full_name : element.full_name,
            phone_number : element.phone_number,
            location : element.location,
            job_description : element.job_description,
            time : element.time,
            seen : element.seen,
            accepted : element.accepted, 
            new : element.new
          }))
        )
      })
    })   
    .catch(err=>console.log(err))
  }

  const fetchNotificationsFromRedis = ()=>{
    axios.post('http://localhost:3001/checkForNewNotifications',{
      ids: array
    })
    .then((res)=>{
      res.data.map((element : any )=>{
        array.push(element.message.id)
        return (
          dispatch(setRedisNotifications({
            id : element.message.id,
            full_name : element.message.full_name,
            phone_number : element.message.phone_number,
            job_description : element.message.job_description,
            time : element.message.time,
            location : element.message.location       
          }))
        )
      })
    })
    .catch((err)=>{console.log(err)})
  }

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
