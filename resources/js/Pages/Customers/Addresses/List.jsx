import React, {useEffect, useState} from 'react';
import DashboardLayout from '../../../Layouts/DashboardLayout.jsx';
import axios from "axios";
import {store} from "@/store/configureStore.js";

const ShowList = ({uuid}) => {
    console.log(uuid);
    const [addresses, setAddresses] = useState([]);
    const token = store.getState().auth.token;

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // Fetch customers data
        axios.get('http://localhost:9001/api/v1/customers/'+ uuid +'/addresses')
            .then(response => {
                setAddresses(response.data);
            })
            .catch(error => {
                console.error('Error fetching customers:', error);
            });
    }, []);

    return (
        <DashboardLayout>
            <h2 className="text-xl font-semibold mb-4">Show Addresses</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-3">Street</th>
                        <th className="border p-3">City</th>
                        <th className="border p-3">State</th>
                        <th className="border p-3">Postal Code</th>
                        <th className="border p-3">Extra Information</th>
                    </tr>
                    </thead>
                    <tbody>
                    {addresses.map(address => (
                        <tr key={address.id} className="border-t">
                            <td className="border p-3">{address.street}</td>
                            <td className="border p-3">{address.city}</td>
                            <td className="border p-3">{address.state}</td>
                            <td className="border p-3">{address.postalCode}</td>
                            <td className="border p-3">{address.extraInformation}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
};

export default ShowList;
