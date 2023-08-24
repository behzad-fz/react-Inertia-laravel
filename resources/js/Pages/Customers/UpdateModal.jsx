import React, { useState } from 'react';
import Modal from 'react-modal';
import { store } from '@/store/configureStore.js';
import axios from 'axios';

const UpdateModal = ({ isOpen, onClose, customer}) => {
    const [firstName, setFirstName] = useState(customer.firstName);
    const [lastName, setLastName] = useState(customer.lastName);
    const [dateOfBirth, setDateOfBirth] = useState(customer.dateOfBirth);
    const [email, setEmail] = useState(customer.email);
    const [phoneNumber, setPhoneNumber] = useState(customer.phoneNumber);
    const token = store.getState().auth.token;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedCustomer = {
            firstName : firstName,
            lastName : lastName,
            dateOfBirth :
            (() => {
                const formattedDate = new Date(dateOfBirth)
                    .toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' }
                );

                const [day, month, year] = formattedDate.split(' ');

                return `${month} ${day} ${year}`;
            })()
            ,
            email: email,
            phoneNumber: phoneNumber
        };

        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await axios.put(
                `http://localhost:9001/api/v1/customers/${customer.uuid}`,
                updatedCustomer
            );

            onClose();
            window.location.reload();
        } catch (error) {
            console.error('Error updating customer:', error);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="modal fixed inset-0 flex items-center justify-center"
            overlayClassName="overlay fixed inset-0 bg-gray-900 bg-opacity-70"
        >
            <div className="bg-white rounded-md p-6 shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Edit Customer</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block">First Name:</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div>
                        <label>Date of Birth:</label>
                        <input
                            type="text"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Update
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 focus:outline-none focus:ring ml-2"
                        >
                            Abort
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default UpdateModal;
