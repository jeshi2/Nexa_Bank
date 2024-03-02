import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import { getAuth } from 'firebase/auth';

function AccountInfo() {
    const [accountNumber, setAccountNumber] = useState('');
    const [accountName, setAccountName] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAccountInfo = async () => {
            try {
                const auth = getAuth();
                const user = auth.currentUser;
                if (user) {
                    const db = getDatabase();
                    const accountRef = ref(db, `users/${user.uid}/additionalDetails`);
                    const snapshot = await get(accountRef);
                    const additionalDetails = snapshot.val();
                    if (additionalDetails) {
                        setAccountNumber(additionalDetails.bankAccountNumber);
                        setAccountName(additionalDetails.accountName);
                    }
                }
            } catch (error) {
                setError(error.message);
            }
        };

        fetchAccountInfo();
    }, []);

    return (
        <div className="bg-white text-white bg-gradient-to-tr from-[#9C2CF3] to-[#3A49F9] rounded-2xl shadow-md  p-4 w-full max-w-lg mx-auto md:mr-4 mt-4">
            <h2 className="text-center text-xl font-semibold mb-4">Account Information</h2>
            <div className="flex justify-between mb-2">
                <p className="font-semibold">Account Name:</p>
                <p className="ml-2">{accountName}</p>

            </div>
            <div className="flex justify-between">
                <p className="font-semibold">Account Number:</p>
                <p className="ml-2">{accountNumber}</p>
            </div>
            {error && <p className="text-red-500">Error: {error}</p>}
        </div>
    );
}

export default AccountInfo;