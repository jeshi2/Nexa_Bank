import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, update, get, set, push } from 'firebase/database';

function Payments() {
    const [recipientAccountNumber, setRecipientAccountNumber] = useState('');
    const [sendAmount, setSendAmount] = useState('');
    const [withdrawAmount, setWithdrawAmount] = useState('');
    const [recipientUid, setRecipientUid] = useState('');
    const [error, setError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [success, setSuccess] = useState('');
    const [currentUserAccountNumber, setCurrentUserAccountNumber] = useState('');
    const [isAccountFrozen, setIsAccountFrozen] = useState(false);

    useEffect(() => {
        // Fetch current user's account number from the database
        const fetchCurrentUserAccountNumber = async () => {
            try {
                const auth = getAuth();
                const firebaseUser = auth.currentUser;
                if (firebaseUser) {
                    const userUid = firebaseUser.uid;
                    const db = getDatabase();
                    const userAccountNumberRef = ref(db, `users/${userUid}/additionalDetails/bankAccountNumber`);
                    /*const snapshot = await get(userAccountNumberRef);
                    if (snapshot.exists()) {
                        setCurrentUserAccountNumber(snapshot.val());
                    }*/
                    const accountStatusRef = ref(db, `users/${userUid}/isFrozen`);

                    const [accountNumberSnapshot, accountStatusSnapshot] = await Promise.all([
                        get(userAccountNumberRef),
                        get(accountStatusRef)
                    ]);

                    if (accountNumberSnapshot.exists()) {
                        setCurrentUserAccountNumber(accountNumberSnapshot.val());
                    }

                    if (accountStatusSnapshot.exists()) {
                        setIsAccountFrozen(accountStatusSnapshot.val());
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchCurrentUserAccountNumber();
    }, []);

    // Function to handle sending money to another user
    const handleSendMoney = async (e) => {
        e.preventDefault();
        // Check if the account is frozen
        if (isAccountFrozen) {
            setError('Account is frozen. Money transfer operation not allowed.');
            return;
        }
        // Implement sending money logic here
        try {

            const auth = getAuth();
            const firebaseUser = auth.currentUser;
            if (!firebaseUser) {
                setError('User is not signed in.');
                return;
            }
            const senderUid = firebaseUser.uid;

            const db = getDatabase();
            const senderRef = ref(db, `users/${senderUid}/balance`);
            const senderSnapshot = await get(senderRef);
            const senderBalance = senderSnapshot.val();

            if (senderBalance < sendAmount) {
                setError('Insufficient balance.');
                return;
            }

            // Access recipient's account number from their user data
            const recipientUidRef = ref(db, 'users');
            const recipientUidSnapshot = await get(recipientUidRef);
            const users = recipientUidSnapshot.val();
            const recipientUid = Object.keys(users).find(uid => {
                const userData = users[uid].additionalDetails;
                return userData && userData.bankAccountNumber === recipientAccountNumber;
            });

            if (!recipientUid) {
                setError('Recipient account number not found.');
                return;
            }

            setRecipientUid(recipientUid);

            const recipientBalanceRef = ref(db, `users/${recipientUid}/balance`);
            const recipientBalanceSnapshot = await get(recipientBalanceRef);
            let recipientBalanceValue = recipientBalanceSnapshot.val();

            // Check if recipientBalanceValue is null or undefined and initialize it to 0 if needed
            if (recipientBalanceValue === null || recipientBalanceValue === undefined) {
                recipientBalanceValue = 0;
            }

            // Parse senderBalance and sendAmount to numbers
            const senderBalanceNumber = parseFloat(senderBalance);
            const sendAmountNumber = parseFloat(sendAmount);

            // Ensure that senderBalanceNumber and sendAmountNumber are valid numbers
            if (isNaN(senderBalanceNumber) || isNaN(sendAmountNumber)) {
                setError('Invalid sender balance or send amount.');
                return;
            }

            const updates = {};
            updates[`users/${senderUid}/balance`] = senderBalanceNumber - sendAmountNumber;
            updates[`users/${recipientUid}/balance`] = recipientBalanceValue + sendAmountNumber;

            await update(ref(db), updates);
            // Log the transaction
            const transactionsRef = ref(db, `users/${senderUid}/transactions`);
            const newTransactionRef = push(transactionsRef);
            set(newTransactionRef, {
                type: 'payment',
                amount: sendAmountNumber,
                recipientAccountNumber: recipientAccountNumber,
                date: new Date().toISOString()
            });

            // Set success message
            setSuccessMessage('Money sent successfully.');


            setError('');
            setSendAmount('');
            setRecipientAccountNumber('');


        } catch (error) {
            console.error(error);
            setError('Failed to send money.');
        }
    };

    // Function to handle withdrawing money
    const handleWithdrawMoney = async (e) => {
        e.preventDefault();
        // Check if the account is frozen
        if (isAccountFrozen) {
            setErrorMessage('Account is frozen. Money withdrawal operation not allowed.');
            return;
        }
        // Implement withdrawing money logic here
        try {
            const auth = getAuth();
            const firebaseUser = auth.currentUser;
            if (!firebaseUser) {
                setErrorMessage('User is not signed in.');
                return;
            }
            const userUid = firebaseUser.uid;

            const db = getDatabase();
            const userRef = ref(db, `users/${userUid}/balance`);
            const userSnapshot = await get(userRef);
            const userBalance = userSnapshot.val();


            // Convert the withdraw amount to a number
            const withdrawAmountNumber = parseFloat(withdrawAmount);

            // Validate the withdraw amount
            if (isNaN(withdrawAmountNumber) || withdrawAmountNumber <= 0) {
                setErrorMessage('Please enter a valid amount to withdraw.');
                return;
            }


            // Check if there are sufficient funds
            if (userBalance < withdrawAmountNumber) {
                setErrorMessage('Insufficient balance.');
                return;
            }

            // Update the user's balance after withdrawal
            const updatedBalance = userBalance - withdrawAmountNumber;
            await set(ref(db, `users/${userUid}/balance`), updatedBalance);

            // Log the transaction
            const transactionsRef = ref(db, `users/${userUid}/transactions`);
            const newTransactionRef = push(transactionsRef);
            set(newTransactionRef, {
                type: 'withdrawal',
                amount: withdrawAmountNumber,
                currentUserAccountNumber: currentUserAccountNumber,
                date: new Date().toISOString()
            });
            setSuccess('Money withdrawn successfully.');

            // Clear the input field and error message
            setWithdrawAmount('');
            setErrorMessage('');
        } catch (error) {
            console.error(error);
            setErrorMessage('Failed to withdraw money.');
        }
    };

    return (
        <div>
            {/* Send Money Section */}
            <div className="bg-white text-black shadow-md rounded-lg p-4 w-full max-w-lg mx-auto mt-4">
                <h2 className="text-center text-xl font-semibold mb-4">Send Money</h2>
                <form onSubmit={handleSendMoney}>
                    <div className="mb-2">
                        <label htmlFor="recipientAccountNumber" className="block font-semibold">Recipient Account Number:</label>
                        <input
                            type="text"
                            id="recipientAccountNumber"
                            value={recipientAccountNumber}
                            onChange={(e) => setRecipientAccountNumber(e.target.value)}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="sendAmount" className="block font-semibold">Amount:</label>
                        <input
                            type="number"
                            id="sendAmount"
                            value={sendAmount}
                            onChange={(e) => setSendAmount(e.target.value)}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">Send Money</button>
                </form>
                {error && (
                    <p className="text-red-500 mt-2">{error}</p>
                )}
                {successMessage && (
                    <p className="text-green-500 mt-2">{successMessage}</p>
                )}
            </div>

            {/* Withdraw Money Section */}
            <div className="bg-white text-black shadow-md rounded-lg p-4 w-full max-w-lg mx-auto mt-4">
                <h2 className="text-center text-xl font-semibold mb-4">Withdraw Money</h2>
                <form onSubmit={handleWithdrawMoney}>
                    <div className="mb-2">
                        <label htmlFor="withdrawAmount" className="block font-semibold">Amount:</label>
                        <input
                            type="number"
                            id="withdrawAmount"
                            value={withdrawAmount}
                            onChange={(e) => setWithdrawAmount(e.target.value)}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">Withdraw Money</button>
                </form>
                {errorMessage && (
                    <p className="text-red-500 mt-2">{errorMessage}</p>
                )}
                {success && (
                    <p className="text-green-500 mt-2">{success}</p>
                )}
            </div>
        </div>
    );
}

export default Payments;
