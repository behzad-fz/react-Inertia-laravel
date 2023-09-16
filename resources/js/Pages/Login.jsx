import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';
import { setToken } from '../store/authSlice';
import {useNavigate} from "react-router-dom";
import {store} from "@/store/configureStore.js";

const Login = () => {
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        try {
             axios.post("http://localhost:9001/api/v1/auth/authenticate", {
                username: username,
                password: password
            }).then(
               async response => {
                    await dispatch(setToken(response.data.token));
                     navigate("/");
                }
            );
        } catch (error) {
            console.error("Authentication Error:", error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                    <input
                        type="text"
                        id="username"
                        className="mt-1 p-2 border rounded-md w-full"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className="mt-1 p-2 border rounded-md w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login
