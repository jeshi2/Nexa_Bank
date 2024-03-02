import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set, get, push } from 'firebase/database';

function DepositForm() {
    const [amount, setAmount] = useState('');
    const [accountBalance, setAccountBalance] = useState(0);
    const [error, setError] = useState('');
    const [currentUserAccountNumber, setCurrentUserAccountNumber] = useState('');
    const [isAccountFrozen, setIsAccountFrozen] = useState(false);

    useEffect(() => {
        const fetchAccountBalance = async () => {
            // Fetch the account balance from Firebase Realtime Database
            try {
                const auth = getAuth();
                const firebaseUser = auth.currentUser;
                if (!firebaseUser) {
                    setError('User is not signed in.');
                    return;
                }
                const firebaseUid = firebaseUser.uid;
                const db = getDatabase();
                const balanceRef = ref(db, `users/${firebaseUid}/balance`);
                /**const snapshot = await get(balanceRef);
                if (snapshot.exists()) {
                    setAccountBalance(snapshot.val());
                } else {
                    // If balance field doesn't exist, initialize it to 0
                    set(balanceRef, 0);
                    setAccountBalance(0);
                }*/

                const accountStatusRef = ref(db, `users/${firebaseUid}/isFrozen`);

                const [balanceSnapshot, accountStatusSnapshot] = await Promise.all([
                    get(balanceRef),
                    get(accountStatusRef)
                ]);

                if (balanceSnapshot.exists()) {
                    setAccountBalance(balanceSnapshot.val());
                } else {
                    // If balance field doesn't exist, initialize it to 0
                    set(balanceRef, 0);
                    setAccountBalance(0);
                }

                if (accountStatusSnapshot.exists()) {
                    setIsAccountFrozen(accountStatusSnapshot.val());
                }


                // Fetch current user's account number
                const userAccountNumberRef = ref(db, `users/${firebaseUid}/additionalDetails/bankAccountNumber`);
                const userAccountNumberSnapshot = await get(userAccountNumberRef);
                if (userAccountNumberSnapshot.exists()) {
                    setCurrentUserAccountNumber(userAccountNumberSnapshot.val());
                }

            } catch (error) {
                console.error(error.message);
            }
        };
        fetchAccountBalance();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Convert the amount to a number
        const depositAmount = parseFloat(amount);
        // Validate the input amount
        if (isNaN(depositAmount) || depositAmount <= 0) {
            setError('Please enter a valid amount to deposit.');
            return;
        }

        // Check if the account is frozen
        if (isAccountFrozen) {
            setError('Account is frozen. Deposit operation not allowed.');
            return;
        }
      

        const auth = getAuth();
        const firebaseUser = auth.currentUser;

        // Check if a user is signed in
        if (!firebaseUser) {
            setError('User is not signed in.');
            return;
        }
        const firebaseUid = firebaseUser.uid;
        const db = getDatabase();

        const balanceRef = ref(db, `users/${firebaseUid}/balance`);

        const lastDepositDateRef = ref(db, `users/${firebaseUid}/lastDepositDate`);

        // Fetch the current balance
        try {
            // Fetch the last deposit date
            const lastDepositDateSnapshot = await get(lastDepositDateRef);
            const lastDepositDate = lastDepositDateSnapshot.val();

            // If last deposit date is different from current date, reset total deposited amount
            const currentDate = new Date().toISOString().slice(0, 10);
            if (lastDepositDate !== currentDate) {
                await set(balanceRef, 0);
                await set(lastDepositDateRef, currentDate);
            }

            // Fetch the current total deposited amount
            const balanceSnapshot = await get(balanceRef);
            const currentBalance = balanceSnapshot.val();

            // Check if the new deposit amount exceeds the daily limit of 1000
            if (currentBalance + depositAmount > 1000) {
                setError('Daily deposit limit exceeded. Please try again tomorrow.');
                return;
            }

            /*const snapshot = await get(balanceRef);
            let currentBalance = 0;
            if (snapshot.exists()) {
                currentBalance = snapshot.val();
            }*/

            // Calculate new balance
            const newBalance = currentBalance + depositAmount;

            // Send a request to update the account balance in Firebase Realtime Database
            await set(balanceRef, newBalance);

            // Log the transaction under user's UID
            const transactionsRef = ref(db, `users/${firebaseUid}/transactions`);
            const newTransactionRef = push(transactionsRef);
            set(newTransactionRef, {
                type: 'deposit',
                amount: depositAmount,
                currentUserAccountNumber: currentUserAccountNumber,
                date: new Date().toISOString()
            });

            setAccountBalance(newBalance);
            setAmount('');
            setError('');
        } catch (error) {
            setError(error.message);
        }
    };

    const formattedBalance = accountBalance.toLocaleString();

    return (
        <>
            <div className="bg-white text-white shadow-md bg-gradient-to-tr from-[#9C2CF3] to-[#3A49F9] rounded-2xl p-4 w-full max-w-lg mx-auto mt-4">
                <h2 className="text-center text-xl font-semibold mb-4">Deposit Funds</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="amount" className="block font-semibold">Amount:</label>
                        <input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="border border-gray-300 rounded-md px-3 text-black py-2 w-full focus:outline-none"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-lime-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-lime-600">Deposit</button>
                    <p className="text-white mt-2">Account Balance: ${formattedBalance}</p>
                </form>
                {error && <p className="text-red-500 text-lg font-['Lexend']">{error}</p>}
            </div>
        </>
    );
}

export default DepositForm;
