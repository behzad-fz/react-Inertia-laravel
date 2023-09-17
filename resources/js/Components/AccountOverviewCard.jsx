import React from 'react';

const AccountOverviewCard = ({ account }) => {
    return (
        <div className="border rounded p-4 mb-4 relative">
            <h3 className="text-xl font-semibold">{account.accountNumber}</h3>
            <p>Type: {account.type}</p>
            <p>Currency: {account.currency}</p>
            <p>Balance: {account.balance}</p>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <div className="w-4 h-4 bg-transparent border-t-2 border-r-2 border-blue-500 rotate-45"></div>
            </div>
            {/* Add any other account details you want to display */}
        </div>
    );
};

export default AccountOverviewCard;
