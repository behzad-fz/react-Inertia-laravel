import React from 'react';
import { Navigate } from 'react-router-dom';
import {store} from "@/store/configureStore.js";

const Authenticated = ({ element }) => {
    const token = store.getState().auth.token;

    if (!token) {
        return <Navigate to="/employee/login" />;
    }

    return element;
};

export default Authenticated;
