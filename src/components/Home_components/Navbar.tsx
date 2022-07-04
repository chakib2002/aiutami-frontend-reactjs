import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isAuthenticatedState, NotificationsNumberState, useAppDispatch } from "../../state/configureStore";
import { Menu } from "../Dashboard_components/Menu";
import { Notifications } from "../Dashboard_components/Notifications";
import { array } from "../../pages/DashboardPage";
import { setNotificationsNumber } from "../../state/Slices/notificationsNumberSlice";

export const NavBar = ({isAuthData} : {isAuthData : boolean}) => {
 
  const { link } = useSelector(isAuthenticatedState);
  const [settings, setSettings] = useState(false);
  const [notification, setNotification] = useState(false);
  const newNotificationNumber = useSelector(NotificationsNumberState);
  const dispatch = useAppDispatch();

  return (
    <>
    <div className="grid grid-cols-6">
      <div className="bg-primary col-span-3">
        <Link to="/">
          <div className={`${isAuthData && 'pt-1'} cursor-pointer font-bold text-2xl text-secondary ml-5 my-5 active:text-bluedark transition transition-duration-700 ease-out `}>
            Aiutami
          </div>
        </Link>
      </div>
        <div
          className="order-3 col-span-6 shadow-lg  flex justify-evenly md:justify-start md:space-x-10
       text-primary"
        >
          <Link to="/search/tutor">
            <div
              className="cursor-pointer my-6 md:font-medium md:text-lg md:border-l-2 pl-5 md:ml-5 
            hover:text-bluedark active:scale-95 transition transition-duration-400 ease-out"
            >
              Tutor
            </div>
          </Link>
          <Link to="/search/housekeeper">
            <div
              className="cursor-pointer my-6 md:font-medium md:text-lg md:border-l-2 pl-5 md:ml-5 
            hover:text-bluedark active:scale-95 transition transition-duration-400 ease-out"
            >
              Housekeeper
            </div>
          </Link>
          <Link to="/search/seniorcaregiver">
            <div
              className="cursor-pointer my-6 md:font-medium md:text-lg md:border-l-2 pl-5 md:ml-5 
          hover:text-bluedark active:scale-95 transition transition-duration-400 ease-out"
            >
              Seniorcaregiver
            </div>
          </Link>
        </div>
      {isAuthData === true && (
                <div className="bg-primary py-4 col-span-3 space-x-5 text-right pr-5">
                <div className="flex justify-end space-x-9">
                  <svg
                    onClick={()=>{
                      setSettings(false);
                      setNotification(!notification);
                      axios.post("http://localhost:3001/DeleteNotificationsFromRedisStore",{
                        ids : array
                      })
                      .then(()=>{
                        array.map((element, index)=>array.splice(0,1))
                      })
                      .then(()=> dispatch(setNotificationsNumber({text: 0})) )
                      .catch((err)=>{console.log(err)})
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-11 w-10 text-secondary inline md:mx-2 cursor-pointer 
                        hover:scale-105 active:scale-95 transition transition-duration-900 ease-out"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />                
                  </svg>
                  {newNotificationNumber !==0 && (
                    <div className="absolute h-4 w-4 bg-red-500 text-xs font-semibold 
                    text-white text-center rounded-full right-28 animate-bounce ">{newNotificationNumber}</div>
                  )}
                
                <img
                  onClick={()=>{
                    setNotification(false);
                    setSettings(!settings)
                  }}
                  src={
                    link !==null
                      ? 
                      `http://localhost:3001/${link}-profile.jpeg`
                      :
                       "https://imgs.search.brave.com/vLBQF6u3LXw69YDbtMDqv8K0uUxyGpga5L_8nN-ip7Y/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly90aGVw/b3dlcm9mdGhlZHJl/YW0ub3JnL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE1LzA5L2dl/bmVyaWMtcHJvZmls/ZS1waWN0dXJlLTEy/MDB4MTIwMC5qcGc"
                  }
                  alt=""
                  className="h-12 w-12 rounded-full inline mr-1 cursor-pointer lg:hover:opacity-90 active:scale-95 transition transition-duration-900 ease-out "
                />
                </div>
              </div>

      ) }
      {isAuthData === false && (
        <div className="bg-primary col-span-3">
          <Link to="/signin">
            <div
              className=" cursor-pointer text-secondary mt-6 text-right mr-10 
          hover:text-white font-semibold active:text-bluedark transition transition-duration-400 ease-out "
            >
              Login
            </div>
          </Link>
        </div>
      )}
    </div>
    {settings && <Menu/>}
    {notification && <Notifications />}
  </>
  );
};
