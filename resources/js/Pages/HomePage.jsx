import React from 'react';
import DashboardLayout from '../Layouts/DashboardLayout.jsx';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';

const HomePage = () => {
    return (
        <DashboardLayout>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-700 p-8 rounded-lg shadow-md text-white">
                <h2 className="text-xl font-semibold mb-4">Banking Services</h2>
                <p className="text-lg mb-6">Explore our comprehensive range of banking services tailored just for you.</p>
                <ul className="list-disc ml-6 space-y-2">
                    <li>Secure Online Banking</li>
                    <li>Mobile App with Real-time Updates</li>
                    <li>24/7 Customer Support</li>
                    <li>Easy Fund Transfers</li>
                    <li>Investment Planning</li>
                </ul>
                <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">Learn More</button>
            </div>
        </DashboardLayout>
    );
};

export default HomePage;
