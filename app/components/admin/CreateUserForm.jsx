import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

const CreateUserForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');

    const handleCreateUser = async (e) => {
        e.preventDefault();
        try {

            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const db = getDatabase();
            const userRef = ref(db, `users/${user.uid}`);
            await set(userRef, {
                email,
                role: 'user',
            });


            setEmail('');
            setPassword('');
            setRole('');
            setError('');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4"></h2>
            <form onSubmit={handleCreateUser} className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border border-gray-300 rounded-md px-3 py-2"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password" className="text-sm">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border border-gray-300 rounded-md px-3 py-2"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Create User</button>
            </form>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default CreateUserForm;
