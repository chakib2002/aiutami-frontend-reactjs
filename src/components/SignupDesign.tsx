import React from "react";
import { ReactComponent as Subscription } from "../Images/Subscription.svg";
import { Link } from "react-router-dom";

export const SignupDesign = () => {
  return (
    <div className="bg-primary h-screen sticky top-0 z-50 hidden lg:inline lg:col-span-1 shadow-2xl">
      <Link to="/">
        <p
          className="text-left w-48 ml-10 mt-20 text-5xl font-extrabold text-secondary 
        hover:text-bluedark cursor-pointer transition transition-duration-600 ease-out hover:animate-none active:scale-95"
        >
          Aiutami
        </p>
      </Link>
      <p className="sticky top-36 text-left ml-10 text-secondary mt-2 tracking-wide w-80 opacity-80 text-sm cursor-default">
        Few clicks away from working and earning money with Aiutami.
      </p>
      <div className="sticky z-50 mt-16">
        <Subscription />
      </div>
    </div>
  );
};
