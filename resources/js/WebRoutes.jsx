import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login.jsx';
import HomePage from './Pages/HomePage.jsx';
import Logout from './Pages/Logout.jsx';
import CreateCustomer from './Pages/Customers/Create.jsx';
import CustomerList from './Pages/Customers/List.jsx';
import AddressList from './Pages/Customers/Addresses/List.jsx';
import AccountList from './Pages/Customers/Accounts/List.jsx';
import Authenticated from "@/Guards/Authenticated.jsx";

const WebRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Authenticated element={<HomePage />} />} />
                <Route path="/logout" element={<Authenticated element={<Logout />} />} />

                <Route path="/customers/create" element={<Authenticated element={<CreateCustomer />} />} />
                <Route path="/customers/list" element={<Authenticated element={<CustomerList />} />} />

                <Route path="/customers/:uuid/addresses" element={<Authenticated element={<AddressList />} />} />
                <Route path="/customers/:uuid/accounts" element={<Authenticated element={<AccountList />} />} />
            </Routes>
        </Router>
    );
};

export default WebRoutes;
