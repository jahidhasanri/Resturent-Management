import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    const location = useNavigate();
    if(loader){
        return <span className="loading loading-spinner text-error"></span>
    }
    if(user){
        return children
    }

    return <Navigate state={{ from: location }} to={'/login'} replace />
};

export default PrivateRoute;