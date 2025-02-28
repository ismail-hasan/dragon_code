import React, { useContext } from 'react';
import { AuthContext } from '../ContextProvider/AuthProvider';
import { Navigate } from 'react-router-dom';


const PrivetRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)

    if (loader) {
        return <h3>loading</h3>
    }

    if (user && user?.email) {
        return children
    }
    return <Navigate to={"/auth/login"}></Navigate>
};

export default PrivetRoute;