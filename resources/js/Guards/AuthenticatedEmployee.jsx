import React from 'react';
import { Navigate } from 'react-router-dom';
import {store} from "@/store/configureStore.js";

const AuthenticatedEmployee = ({ element }) => {
    const token = store.getState().auth.token;
    const userType = store.getState().auth.userType;

    if (!token || userType !== "employee") {
        return <Navigate to="/employee/login" />;
    }

    return element;
};

export default AuthenticatedEmployee;
