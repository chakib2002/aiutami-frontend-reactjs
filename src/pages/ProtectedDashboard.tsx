import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isAuthenticatedState } from '../state/configureStore'

export const ProtectedDashboard = () => {
    const {isAuth} = useSelector(isAuthenticatedState);
    const location = useLocation();
    return (
    <div>
        {isAuth === true &&  <Outlet/> }
        {isAuth === false &&  <Navigate to={"/"} state={{from : location}} replace />}
    </div>
  )
}