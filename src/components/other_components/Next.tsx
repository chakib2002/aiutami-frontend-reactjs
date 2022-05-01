import React from "react";
import { useAppDispatch } from "../../state/configureStore";

export const Next = ({ action }: { action: Function }) => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => dispatch(action())}
      className=" mb-10 lg:mb-0 bg-primary text-white text-sm font-medium h-10 w-24 rounded-lg hover:border hover:border-primary hover:text-primary hover:bg-white active:scale-95 transition transition-duration-400 ease-out"
    >
      Next
    </button>
  );
};
