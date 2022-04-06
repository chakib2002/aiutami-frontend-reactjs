import React from "react";
import { useAppDispatch } from "../state/configureStore";

export const Text = ({
  message,
  width,
  name,
  action,
  state,
}: {
  message: string;
  width: string;
  name: string;
  state: string;
  action: Function;
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="form-outline">
      <label className="form-label" htmlFor="textAreaExample">
        {name}
      </label>
      <textarea
        onChange={(e) => dispatch(action({ text: e.target.value }))}
        value={state}
        className={`
        ${width} 
        px-5 py-2 border-2 border-lightgray shadow-md rounded 
        focus:outline-none h-36 `}
        id="textAreaExample1"
        rows={4}
        placeholder={message}
      ></textarea>
    </div>
  );
};
