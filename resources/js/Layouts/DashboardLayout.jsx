// import React from 'react';
//
// const DashboardLayout = ({ children }) => {
//     return (
//         <div className="flex">
//             {/* Sidebar */}
//             <div className="w-1/4 bg-gray-800 text-white p-4">
//                 {/* Sidebar */}
//                 <div className="w-1/4 bg-gray-800 text-white p-4">
//                     <ul>
//                         <li>Customer</li>
//                         <ul>
//                             <li>Create</li>
//                             <li>List</li>
//                         </ul>
//                         <li>Accounts</li>
//                         <ul>
//                             <li>Create</li>
//                             <li>List</li>
//                         </ul>
//                         {/* Other menu items */}
//                     </ul>
//                 </div>
//             </div>
//
//             {/* Main Content */}
//             <div className="w-3/4 p-4">
//                 {children}
//             </div>
//         </div>
//     );
// };
//
// export default DashboardLayout;

import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";
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
