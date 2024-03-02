import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = () => {
      const auth = getAuth();
      const firebaseUser = auth.currentUser;

      if (!firebaseUser) {
        // User is not signed in
        return;
      }

      const userUid = firebaseUser.uid;
      const db = getDatabase();
      const userTransactionsRef = ref(db, `users/${userUid}/transactions`);

      onValue(userTransactionsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const transactionList = Object.values(data);
          setTransactions(transactionList);
        } else {
          setTransactions([]);
        }
        setLoading(false);
      });
    };

    fetchTransactions();
  }, []);

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-center text-xl font-semibold mb-4">Transaction History</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col">
          {transactions.map((transaction, index) => (
            <div key={index} className={`bg-white shadow-md rounded-lg p-4 m-2 flex flex-wrap ${transaction.type === 'withdrawal' || transaction.type === 'payment' ? 'text-red-700' : 'text-green-700'}`}>
              <p className="w-full md:w-1/4">Type: {transaction.type}</p>
              <p className="w-full md:w-1/4">Amount: ${transaction.amount}</p>
              <p className="w-full md:w-1/4">Date: {new Date(transaction.date).toLocaleDateString()}</p>
              {transaction.type === 'payment' && (
                <p className="w-full md:w-1/4">Receiver Account: {transaction.recipientAccountNumber}</p>
              )}
              {(transaction.type === 'deposit' || transaction.type === 'withdrawal') && (
                <p className="w-full md:w-1/4">Account Number: {transaction.currentUserAccountNumber}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Transactions;

