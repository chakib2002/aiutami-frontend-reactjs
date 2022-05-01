import React from "react";
import { Link } from "react-router-dom";
export const NavBarLogin = () => {
  return (
    <div className="bg-primary py-5">
      <Link to="/">
        <p className="text-left w-48 cursor-pointer font-bold text-2xl text-secondary px-5 active:text-bluedark transition transition-duration-400 ease-out ">
          Aiutami
        </p>
      </Link>
    </div>
  );
};
