import React, {useState} from 'react';
import DashboardLayout from '../../../Layouts/DashboardLayout.jsx';
import AddAddressModal from './AddAccountModal.jsx';

const ShowList = ({uuid}) => {
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
                        <th className="border p-3">Account Type</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="border-t">
                        <td className="border p-3"> Coming Soon ...</td>
                    </tr>
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
