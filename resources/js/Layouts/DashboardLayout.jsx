import React from 'react';
import Sidebar from '../Components/Sidebar';

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="w-3/4 p-4">
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;
