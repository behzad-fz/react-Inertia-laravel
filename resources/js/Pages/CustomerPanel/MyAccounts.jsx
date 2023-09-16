import React, { useEffect, useState } from 'react';
import DashboardLayout from "@/Layouts/DashboardLayout.jsx";


const MyAccounts = () => {
    return (
        <DashboardLayout>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-700 p-8 rounded-lg shadow-md text-white">
                <h2 className="text-xl font-semibold mb-4">My Accounts</h2>
            </div>
        </DashboardLayout>
    );
}

export default MyAccounts
