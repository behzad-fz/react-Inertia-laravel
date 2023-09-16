import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useDispatch } from 'react-redux';
import {clearToken, setToken} from '../store/authSlice';
import {store} from "@/store/configureStore.js";
import {Navigate} from "react-router-dom";


const Logout = () => {
    const dispatch = useDispatch();
    const token = store.getState().auth.token;
    const userType = store.getState().auth.userType;


    useEffect(() => {

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        const response1 = axios
            .post("http://localhost:9001/api/v1/auth/logout")
            .then(
                (response) => {
                    dispatch(clearToken());
                }
            );
    }, []);

    console.log("logging out");
    console.log(userType)
    const login = userType === "employee" ? "/employee/login" : "/login";
    return <Navigate to={login} />;
}

export default Logout
