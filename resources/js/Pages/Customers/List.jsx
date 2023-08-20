import React, {useEffect, useState} from 'react';
import DashboardLayout from '../../Layouts/DashboardLayout.jsx';
import axios from "axios";
import {store} from "@/store/configureStore.js";
const ShowList = () => {
    const [customers, setCustomers] = useState([]);
    const token = store.getState().auth.token;

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // Fetch customers data
        axios.get('http://localhost:9001/api/v1/customers')
            .then(response => {
                setCustomers(response.data);
            })
            .catch(error => {
                console.error('Error fetching customers:', error);
            });
    }, []);

    return (
        <DashboardLayout>
            <h2 className="text-xl font-semibold mb-4">Show Customers</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-3">First Name</th>
                        <th className="border p-3">Last Name</th>
                        <th className="border p-3">Date of Birth</th>
                        <th className="border p-3">Email</th>
                        <th className="border p-3">Phone Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map(customer => (
                        <tr key={customer.uuid} className="border-t">
                            <td className="border p-3">{customer.firstName}</td>
                            <td className="border p-3">{customer.lastName}</td>
                            <td className="border p-3">{customer.dateOfBirth}</td>
                            <td className="border p-3">{customer.email}</td>
                            <td className="border p-3">{customer.phoneNumber}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
};

export default ShowList;