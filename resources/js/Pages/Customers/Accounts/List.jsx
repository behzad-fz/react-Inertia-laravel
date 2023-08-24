import React, {useEffect, useState} from 'react';
import DashboardLayout from '../../../Layouts/DashboardLayout.jsx';
import AddAccountModal from './AddAccountModal.jsx';
import ChangeStatusModal from './ChangeStatusModal.jsx';
import Select from 'react-select';
import {store} from "@/store/configureStore.js";
import axios from "axios";
import UpdateModal from "@/Pages/Customers/UpdateModal.jsx";

const ShowList = ({uuid}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [accounts, setAccounts] = useState([]);
    const token = store.getState().auth.token;

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // Fetch customers data
        axios.get('http://localhost:9001/api/v1/customers/'+ uuid +'/accounts')
            .then(response => {
                setAccounts(response.data);
            })
            .catch(error => {
                console.error('Error fetching customers:', error);
            });
    }, []);

    const actionOptions = [
        { value: 'change-status', label: 'Change Status' },
    ];

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [isChangeStatusModalOpen, setIsChangeStatusModalOpen] = useState(false);
    const [selectedAccountUuid, setSelectedAccountUuid] = useState('');
    const [selectedAccountStatus, setSelectedAccountStatus] = useState('');

    const openChangeStatusModal = (account) => {
        setSelectedAccountUuid(account.uuid);
        setSelectedAccountStatus(account.status);
        setIsChangeStatusModalOpen(true);
    };

    const closeChangeStatusModal = () => {
        setSelectedAccountUuid('');
        setIsChangeStatusModalOpen(false);
    };

    return (
        <DashboardLayout>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Show Accounts</h2>
                <button
                    onClick={openModal}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                >
                    Add New Account
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full border">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-3">Account Number</th>
                        <th className="border p-3">Balance</th>
                        <th className="border p-3">Status</th>
                        <th className="border p-3">Type</th>
                        <th className="border p-3">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {accounts.map(account => (
                        <tr key={account.uuid} className="border-t">
                            <td className="border p-3">{account.accountNumber}</td>
                            <td className="border p-3">{account.balance}</td>
                            <td className="border p-3">{account.status}</td>
                            <td className="border p-3">{account.type}</td>
                            <td className="border p-3">
                                <Select
                                    options={actionOptions}
                                    onChange={(selectedOption) =>
                                        openChangeStatusModal(account)
                                    }
                                    placeholder="Select"
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <AddAccountModal
                isOpen={isModalOpen}
                onClose={closeModal}
                customerId={uuid}
            />
            {isChangeStatusModalOpen && (
                <ChangeStatusModal
                    isOpen={isChangeStatusModalOpen}
                    onClose={closeChangeStatusModal}
                    accountUuid={selectedAccountUuid}
                    customerId={uuid}
                    currentStatus={selectedAccountStatus}
                />
            )}
        </DashboardLayout>
    );
};

export default ShowList;
