import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { getAuth } from 'firebase/auth';

function AccountBalance() {
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const firebaseUser = auth.currentUser;

    if (!firebaseUser) {
      setError('User is not signed in.');
      return;
    }

    const firebaseUid = firebaseUser.uid;
    const db = getDatabase();
    const balanceRef = ref(db, `users/${firebaseUid}/balance`);

    // Listen for changes to the user's balance
    onValue(balanceRef, (snapshot) => {
      const data = snapshot.val();
      if (data === null) {
        setError('Failed to fetch account balance');
        return;
      }
      setBalance(data);
    });
  }, []);

  const formattedBalance = balance.toLocaleString();
  return (
    <div className="bg-white text-white shadow-md bg-gradient-to-tr from-[#9C2CF3] to-[#3A49F9] rounded-2xl p-4 w-full max-w-lg mx-auto md:ml-4 mt-4">
      <h2 className="text-center text-xl font-semibold mb-4">Account Balance</h2>
      <p className="text-center text-red-500 text-3xl font-bold">${formattedBalance}</p>
    </div>
  );
}

export default AccountBalance;