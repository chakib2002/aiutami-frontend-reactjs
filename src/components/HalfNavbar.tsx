import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isAuthenticatedState } from "../state/configureStore";
import { Menu } from "./Menu";

export const HalfNavbar = ({isAuth}: {isAuth : boolean}) => {
  const [settings, setSettings] = useState(false)
  const data = useSelector(isAuthenticatedState)
  const { link}= data
  return (
    <>
    <div
      className="flex justify-between bg-primary ">
      <div className="bg-primary">
        <Link to="/">
          <div className={`${isAuth && 'pt-1'} cursor-pointer font-bold text-2xl text-secondary ml-5 my-5 active:text-bluedark transition transition-duration-400 ease-out`}>
            Aiutami
          </div>
        </Link>
      </div>
      <div className="bg-primary">
      {isAuth === true && (
            <div className="bg-primary py-4 col-span-3 space-x-5 text-center pr-5">
            <div className="inline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-11 w-10 text-white inline md:mx-2 cursor-pointer 
                hover:scale-105 active:scale-95 transition transition-duration-700 ease-out"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <img
              onClick={()=>setSettings(!settings)}
              src={
                link !==null
                  ? 
                  `http://localhost:3001/${link}-profile.jpeg`
                  :
                    "https://imgs.search.brave.com/vLBQF6u3LXw69YDbtMDqv8K0uUxyGpga5L_8nN-ip7Y/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly90aGVw/b3dlcm9mdGhlZHJl/YW0ub3JnL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE1LzA5L2dl/bmVyaWMtcHJvZmls/ZS1waWN0dXJlLTEy/MDB4MTIwMC5qcGc"
              }
              alt=""
              className="h-12 w-12 rounded-full inline mr-1 cursor-pointer"
            />
          </div>
        
        

      ) }
      {isAuth === false && (
        <div
        className="bg-primary col-span-3">
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
    </div>
    {settings && <Menu/>}
    </>
     
  );
};
