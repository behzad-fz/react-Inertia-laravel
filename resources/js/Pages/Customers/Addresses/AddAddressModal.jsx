import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import {store} from "@/store/configureStore.js";

const AddAddressModal = ({ isOpen, onClose, customerId }) => {
    const token = store.getState().auth.token;
    const [formData, setFormData] = useState({
        street: '',
        city: '',
        state: '',
        postalCode: '',
        extraInformation: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await axios.post(
                `http://localhost:9001/api/v1/customers/${customerId}/addresses`,
                formData
            );

            // Handle success and close the modal
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
                <h2 className="text-xl font-semibold mb-4">Add New Address</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Street</label>
                        <input
                            type="text"
                            name="street"
                            value={formData.street}
                            onChange={handleInputChange}
                            className="input resize-none w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">City</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="input resize-none w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">State</label>
                        <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            className="input resize-none w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Postal Code</label>
                        <input
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            className="input resize-none w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Extra Information</label>
                        <textarea
                            name="extraInformation"
                            value={formData.extraInformation}
                            onChange={handleInputChange}
                            className="input resize-none w-full"
                            rows="5"
                        />
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

export default AddAddressModal;
