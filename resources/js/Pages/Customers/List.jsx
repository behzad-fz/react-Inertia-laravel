import React, {useEffect, useState} from 'react';
import DashboardLayout from '../../Layouts/DashboardLayout.jsx';
import axios from "axios";
import {store} from "@/store/configureStore.js";
import Select from 'react-select';
import UpdateModal from './UpdateModal.jsx';

const actionOptions = [
    { value: 'edit', label: 'Edit' },
    { value: 'delete', label: 'Delete' },
    { value: 'addresses', label: 'Addresses' },
    { value: 'accounts', label: 'Accounts' },
];

const ShowList = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [customers, setCustomers] = useState([]);
    const [isConfirmDelete, setIsConfirmDelete] = useState(false);
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

    const handleActionChange = (customer, selectedOption) => {
        if (selectedOption) {
            const selectedAction = selectedOption.value;
            if (selectedAction === 'edit') {
                setSelectedCustomer(customer);
                setIsEditModalOpen(true);
            } else if (selectedAction === 'delete') {
                setIsConfirmDelete(true);
                setSelectedCustomer(customer);
            } else {
                window.location.href = `/customers/${customer.uuid}/${selectedAction}`;
            }
        }
    };

    const handleDeleteConfirmed = async (customer) => {
        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            await axios.delete(
                `http://localhost:9001/api/v1/customers/${customer.uuid}`
            );

            window.location.reload();
        } catch (error) {
            console.error('Error deleting customer:', error);
        } finally {
            setIsConfirmDelete(false);
        }
    };

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
                        <th className="border p-3">Actions</th>
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
                            <td className="border p-3">
                                {isConfirmDelete && selectedCustomer === customer ? (
                                    <div className="bg-white rounded-md p-6 shadow-lg fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <p className="text-center text-xl font-semibold mb-4">Confirm Deletion</p>
                                        <p className="mb-4">Are you sure you want to delete this customer?</p>
                                        <div className="flex justify-center space-x-4">
                                            <button
                                                onClick={() => handleDeleteConfirmed(customer)}
                                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                            <button
                                                onClick={() => setIsConfirmDelete(false)}
                                                className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                                            >
                                                Abort
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <Select
                                        options={actionOptions}
                                        onChange={(selectedOption) =>
                                            handleActionChange(customer, selectedOption)
                                        }
                                        placeholder="Select"
                                        menuPlacement="auto"
                                    />
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            {isEditModalOpen && (
                <UpdateModal
                    isOpen={isEditModalOpen}
                    onClose={() => setIsEditModalOpen(false)}
                    customer={selectedCustomer}
                />
            )}
        </DashboardLayout>
    );
};

export default ShowList;
