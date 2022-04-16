import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ResultState } from "../state/configureStore";

export const ProtectedResults = () => {
  const data = useSelector(ResultState);
  const location = useLocation();
  return (
    <div>
      {data.searchResultsType !== null && data.results?.length !== null ? (
        <Outlet />
      ) : (
        <Navigate to={"/"} state={{ from: location }} replace />
      )}
    </div>
  );
};
