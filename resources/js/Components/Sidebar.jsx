import React from 'react';
import { useNavigate } from 'react-router-dom';
import {store} from "@/store/configureStore.js";

const Sidebar = () => {
    const navigate = useNavigate();
    const userType = store.getState().auth.userType;

    return (
        <div className="w-1/4 bg-gray-800 text-white p-4 h-full">
            <ul className="space-y-1">
                <li>
                    <a onClick={() => navigate('/my-accounts')}>My Accounts</a>
                </li>
            </ul>

            <div className="mt-4">
                <button
                    onClick={() => navigate("/login")}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
