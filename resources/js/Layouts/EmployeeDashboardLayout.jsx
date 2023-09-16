import React from 'react';
import EmployeeSidebar from '../Components/EmployeeSidebar';
import './../../css/dashboard-layout.css';

const EmployeeDashboardLayout = ({ children }) => {
    return (
    <div className="dashboard-layout">
        <EmployeeSidebar />

        <div className="main-content">
            {children}
        </div>
    </div>
    );
};

export default EmployeeDashboardLayout;
