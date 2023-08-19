import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const Sidebar = () => {

    return (
        <div className="w-1/4 bg-gray-800 text-white p-4">
            {/* Main Menu Items */}
            <ul className="space-y-1">
                <li>
                    <a className="cursor-pointer">Customers</a>
                    {/* Sub-menu */}
                    <ul className="ml-4 space-y-1">
                        <li>
                            <InertiaLink href={route('customer.create')}>Create Customer</InertiaLink>
                        </li>
                        <li>
                            <InertiaLink href={route('customer.list')}>Show Customers</InertiaLink>
                        </li>
                    </ul>
                </li>
                {/* Add more main menu items */}
            </ul>

            {/* Logout Button */}
            <div className="mt-4">
                <InertiaLink
                    href={route('logout')}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                >
                    Logout
                </InertiaLink>
            </div>
        </div>
    );
};

export default Sidebar;
