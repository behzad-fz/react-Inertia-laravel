import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import EmployeeLogin from './Pages/EmployeeLogin.jsx';
import EmployeeHomePage from "@/Pages/EmployeeHomePage.jsx";
import Login from './Pages/Login.jsx';
import HomePage from './Pages/HomePage.jsx';
import Logout from './Pages/Logout.jsx';
import CreateCustomer from './Pages/Customers/Create.jsx';
import CustomerList from './Pages/Customers/List.jsx';
import AddressList from './Pages/Customers/Addresses/List.jsx';
import AccountList from './Pages/Customers/Accounts/List.jsx';
import AuthenticatedEmployee from "@/Guards/AuthenticatedEmployee.jsx";
import AuthenticatedCustomer from "@/Guards/AuthenticatedCustomer.jsx";
import MyAccounts from "@/Pages/CustomerPanel/MyAccounts.jsx";

const WebRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/employee/login" element={<EmployeeLogin />} />
                <Route path="/employee/" element={<AuthenticatedEmployee element={<EmployeeHomePage />} />} />
                <Route path="/employee/logout" element={<AuthenticatedEmployee element={<Logout />} />} />

                <Route path="/customers/create" element={<AuthenticatedEmployee element={<CreateCustomer />} />} />
                <Route path="/customers/list" element={<AuthenticatedEmployee element={<CustomerList />} />} />

                <Route path="/customers/:uuid/addresses" element={<AuthenticatedEmployee element={<AddressList />} />} />
                <Route path="/customers/:uuid/accounts" element={<AuthenticatedEmployee element={<AccountList />} />} />


                <Route path="/login" element={<Login />} />
                <Route path="/" element={<AuthenticatedCustomer element={<HomePage />} />} />
                <Route path="/logout" element={<AuthenticatedCustomer element={<Logout />} />} />
                <Route path="/my-accounts" element={<AuthenticatedCustomer element={<MyAccounts />} />} />
            </Routes>
        </Router>
    );
};

export default WebRoutes;
