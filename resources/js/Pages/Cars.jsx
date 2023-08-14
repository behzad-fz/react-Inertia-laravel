import React, { useEffect, useState } from 'react';
import axios from "axios";
import {store} from '../store/store';
import {InertiaLink} from "@inertiajs/inertia-react";
// import apiCall from '../services/apiCall';

export default function App() {
    const [items, setItems] = useState([]);
    const token = store.getState().auth.token;

    // const [items, setData] = useState([]);


    useEffect(() => {
        try {

            // apiCall.get('/cars')
            //     .then(response => {
            //         console.log(response)
            //         // setData(response.data);
            //     })
            //     .catch(error => {
            //     });


            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            // Make authenticated requests after obtaining the token
            const response1 = axios
                .get("http://localhost:9001/api/v1/cars")
                .then(
                    (response) => {
                        setItems(response.data);
                    }
                );
        } catch (error) {
            // Handle errors for any of the authenticated requests
        }

    }, []);

    return (
        <div>
            <h1>CARS</h1>
            <div>
                {items.map((item, index) => (
                    <div key={index}>
                        <h3>{item.name}</h3>
                        <p>{item.id}</p>
                    </div>
                ))}
            </div>
            <div className="absolute top-0 right-0 mt-4 mr-4">
                <InertiaLink
                    href={route('logout')}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                >
                    Logout
                </InertiaLink>
            </div>
        </div>
    );
}
