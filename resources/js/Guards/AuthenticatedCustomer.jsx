import React from 'react';
import { Navigate } from 'react-router-dom';
import {store} from "@/store/configureStore.js";

const AuthenticatedCustomer = ({ element }) => {
    const token = store.getState().auth.token;
    const userType = store.getState().auth.userType;

    if (!token || userType !== "customer") {
        return <Navigate to="/login" />;
    }

    return element;
};

export default AuthenticatedCustomer;
