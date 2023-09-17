import React, {useEffect, useState} from 'react';
import DashboardLayout from '../../Layouts/DashboardLayout.jsx';
import {store} from "@/store/configureStore.js";
import axios from "axios";
import AccountOverviewCard from "@/Components/AccountOverviewCard.jsx";


const MyAccounts = () => {
    const token = store.getState().auth.token;
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // Fetch customers data
        axios.get('http://localhost:9001/api/v1/customer-accounts')
            .then(response => {
                setAccounts(response.data);
            })
            .catch(error => {
                console.error('Error fetching customers:', error);
            });
    }, []);

    return (
        <DashboardLayout>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">My Accounts</h2>
            </div>
            <div>
                {accounts.map(account => (
                    <AccountOverviewCard key={account.uuid} account={account} />
                ))}
            </div>
        </DashboardLayout>
    );
};

export default MyAccounts;
