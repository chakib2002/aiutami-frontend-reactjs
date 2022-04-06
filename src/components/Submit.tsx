import React from "react";

export const Submit = ({ title }: { title: string }) => {
  return (
    <button className=" text-center h-10 w-28 rounded-lg border-2 border-green bg-white hover:bg-green hover:text-white text-green active:scale-95 transition transition-duration-400 ease-out">
      {title}
    </button>
  );
};
