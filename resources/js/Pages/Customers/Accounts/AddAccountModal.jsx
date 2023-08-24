import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import {store} from "@/store/configureStore.js";

const AddAccountModal = ({ isOpen, onClose, customerId }) => {
    const [type, setType] = useState('SAVINGS');
    const token = store.getState().auth.token;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            type: type,
        }

        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await axios.post(
                `http://localhost:9001/api/v1/customers/${customerId}/accounts`,
                formData
            );

            onClose();
            window.location.reload();
        } catch (error) {
            console.error('Error adding new address:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="modal fixed inset-0 flex items-center justify-center"
            overlayClassName="overlay fixed inset-0 bg-gray-900 bg-opacity-70"
        >
            <div className="bg-white rounded-md p-6 shadow-lg w-2/3">
                <h2 className="text-xl font-semibold mb-4">Add New Account</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Type</label>
                        <select
                            name="type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="input resize-none w-full"
                        >
                            <option value="SAVINGS">Savings</option>
                            <option value="CHECKING">Checking</option>
                            <option value="CREDIT">Credit</option>
                            <option value="LOAN">Loan</option>
                            <option value="MORTGAGE">Mortgage</option>
                        </select>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring"
                        >
                            Abort
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default AddAccountModal;
