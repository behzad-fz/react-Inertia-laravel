import React from 'react';
import { Navigate } from 'react-router-dom';
import {store} from "@/store/configureStore.js";

const token = store.getState().auth.token;

const Authenticated = ({ element }) => {
    if (!token) {
        return <Navigate to="/login" />;
    }

    return element;
};

export default Authenticated;
