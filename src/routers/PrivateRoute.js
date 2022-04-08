import React from 'react'
import { Navigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

export const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    console.log(user)

    return user.logged
        ?   children
        :  <Navigate to="/login" />
}

