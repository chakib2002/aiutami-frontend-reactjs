import React from "react";
import { useSelector } from "react-redux";
import { ResultState } from "../../state/configureStore";
import { care_type, Redirects } from "../../state/types/enums";
import { useNavigate } from "react-router-dom";

export const ResultsHeaderCategory = ({
  title,
  redirect,
}: {
  title: care_type;
  redirect: Redirects;
}) => {
  const { searchResultsType } = useSelector(ResultState);
  const navigate = useNavigate();
  return (
    <p
      onClick={() => {
        navigate(redirect);
      }}
      className={`${
        title === searchResultsType
          ? "text-dark border-b-2 text-sm md:text-base font-semibold pr-6 lg:pr-12 py-1 mx-2 cursor-default"
          : "text-dark opacity-70 text-sm md:text-base font-normal  active:scale-95  transition transition-duration-400 ease-out lg:px-5 px-4 py-2 hover:bg-gray-300 hover:rounded-full cursor-pointer  "
      }`}
    >
      {title}
    </p>
  );
};
