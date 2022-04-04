import React from "react";

import { useAppDispatch } from "../state/configureStore";

export const Previous = ({ action }: { action: Function }) => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => dispatch(action())}
      className=" mb-10 lg:mb-0 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white text-sm font-medium h-10 w-24 rounded-lg  active:scale-95 transition transition-duration-400 ease-out"
    >
      Previous
    </button>
  );
};
