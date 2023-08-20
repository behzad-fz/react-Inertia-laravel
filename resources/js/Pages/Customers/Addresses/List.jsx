import React, {useEffect, useState} from 'react';
import DashboardLayout from '../../../Layouts/DashboardLayout.jsx';
import axios from "axios";
import {store} from "@/store/configureStore.js";
import { InertiaLink } from '@inertiajs/inertia-react';
import AddAddressModal from './AddAddressModal';

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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <DashboardLayout>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Show Addresses</h2>
                <button
                    onClick={openModal}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                >
                    Add New Address
                </button>
            </div>
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
            <AddAddressModal
                isOpen={isModalOpen}
                onClose={closeModal}
                customerId={uuid}
            />
        </DashboardLayout>
    );
};

export default ShowList;
