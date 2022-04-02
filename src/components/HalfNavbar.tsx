import React from "react";
import { Link } from "react-router-dom";

export const HalfNavbar = () => {
  return (
    <div className="flex justify-between bg-primary ">
      <div className="bg-primary">
        <Link to="/">
          <div className=" cursor-pointer font-bold text-2xl text-secondary ml-5 my-5 active:text-bluedark transition transition-duration-400 ease-out ">
            Aiutami
          </div>
        </Link>
      </div>
      <div className="bg-primary">
        <Link to="/signin">
          <div
            className=" cursor-pointer text-secondary mt-6 text-right mr-10 
          hover:text-white font-semibold active:text-bluedark transition transition-duration-400 ease-out "
          >
            Login
          </div>
        </Link>
      </div>
    </div>
  );
};
