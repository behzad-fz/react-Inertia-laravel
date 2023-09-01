import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login.jsx';
import HomePage from './Pages/HomePage.jsx';
import Logout from './Pages/Logout.jsx';
import CreateCustomer from './Pages/Customers/Create.jsx';
import CreateList from './Pages/Customers/List.jsx';
import AddressList from './Pages/Customers/Addresses/List.jsx';
import AccountList from './Pages/Customers/Accounts/List.jsx';


const WebRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/logout" element={<Logout />} />

                <Route path="/customers/create" element={<CreateCustomer />} />
                <Route path="/customers/list" element={<CreateList />} />

                <Route path="/customers/:uuid/addresses" element={<AddressList />} />
                <Route path="/customers/:uuid/accounts" element={<AccountList />} />
            </Routes>
        </Router>
    );
};

export default WebRoutes;
