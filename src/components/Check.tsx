import React from "react";
import { useAppDispatch } from "../state/configureStore";
import { checkComponentDetails } from "../state/types/types";

export const Check = ({
  checkCard,
}: {
  checkCard: checkComponentDetails[];
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-2 mx-3 ">
      {checkCard.map((element, index) => {
        return (
          <div
            key={index}
            className="text-left text-gray-700 hover:text-gray-900 cursor-pointer my-2 mx-2"
          >
            <p className="text-md font-medium mb-1 text-gray-900">
              {element.title}
            </p>
            <div className="form-check px-6 py-4 border border-gray-200 flex justify-start">
              <input
                onClick={() => {
                  if (element.state) {
                    dispatch(element.action({ text: false }));
                  } else {
                    dispatch(element.action({ text: true }));
                  }
                }}
                className="form-check-input appearance-none h-4 w-4 border px-2 border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                id={element.title}
                checked={element.state}
                onChange={()=>{}}
              />
              <label
                className="form-check-label px-2 text-sm text-gray-800"
                htmlFor={element.title}
              >
                {element.description}
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};
