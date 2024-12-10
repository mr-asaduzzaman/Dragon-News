import React, { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading';

const PrivetRout = ({children}) => {
    const {user, loading} = useContext(authContext)
    const location = useLocation()
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children
    }
    return (
        <Navigate state={location.pathname} to='/auth/login'></Navigate>
    );
};

export default PrivetRout;