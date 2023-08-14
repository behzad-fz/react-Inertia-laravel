import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useDispatch } from 'react-redux';
import {clearToken, setToken} from '../store/authSlice';
import {store} from "@/store/configureStore.js";


const Logout = () => {
    const dispatch = useDispatch();
    const token = store.getState().auth.token;


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

    return (
        <h1>
            Logout
        </h1>
    );
}

export default Logout
