import React, { useContext } from 'react';
import { AuthContext } from '../ContextProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivetRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    // console.log("my location", location)

    if (loader) {
        return <h3>loading</h3>
    }

    if (user && user?.email) {
        return children
    }
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
};

export default PrivetRoute;