import React, {useState} from 'react';
import DashboardLayout from '../../Layouts/DashboardLayout.jsx';
import {store} from "@/store/configureStore.js";
import axios from "axios";

const Create = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const token = store.getState().auth.token;


    const handleSubmit = async (e) => {
        e.preventDefault();

        const newCustomer = {
            firstName,
            lastName,
            dateOfBirth,
            email,
            phoneNumber
        };

        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await axios.post('http://localhost:9001/api/v1/customers', newCustomer);
            console.log('Customer created:', response.data);
            // Optionally, you can navigate to a different page after successful creation
        } catch (error) {
            console.error('Error creating customer:', error);
        }
    };

    return (
        <DashboardLayout>
            <h2 className="text-xl font-semibold mb-4">Create Customer</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block">First Name:</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full border rounded px-3 py-2" />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full border rounded px-3 py-2" />
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input type="text" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} className="w-full border rounded px-3 py-2" />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded px-3 py-2" />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full border rounded px-3 py-2" />
                </div>
                <div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create</button>
                </div>
            </form>
        </DashboardLayout>
    );
};

export default Create;
