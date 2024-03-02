import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);
    const [expanded, setExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState('');

    const toggleExpanded = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    useEffect(() => {
        const fetchUsers = () => {
            const db = getDatabase();
            const usersRef = ref(db, 'users');

            const startIndex = (page - 1) * pageSize;
            const endIndex = startIndex + pageSize;

            // Listen for changes to the users collection
            onValue(usersRef, (snapshot) => {
                const userData = snapshot.val();
                if (userData) {
                    // Convert the object of users into an array
                    const userList = Object.keys(userData)
                        .map((uid) => ({
                            uid,
                            ...userData[uid].additionalDetails, ...userData[uid],
                        }))
                        .filter((user) => user.role === 'user')
                        .slice(startIndex, endIndex);
                    setUsers(userList);
                } else {
                    setUsers([]);
                }
            });
        };

        fetchUsers();
    }, [page, pageSize]);

    useEffect(() => {
        // Function to filter users based on search query
        const filterUsers = () => {
            const filteredUsers = users.filter((user) =>
                user.email.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(filteredUsers);
        };

        filterUsers();
    }, [searchQuery, users]);

    const nextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const prevPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const filteredUsers = users.filter((user) =>
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (filteredUsers.length === 0) {
            setError('No users found matching the search query.');
        } else {
            setSearchResults(filteredUsers);
            setError('');
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-semibold mb-4">User List</h1>
            <form onSubmit={handleSearch} className="mb-4">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by email..."
                    className="border border-gray-300 rounded-md px-3 py-2 mr-2"
                />
                <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Search
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.map((user) => (
                    <div className="bg-white rounded-lg shadow p-4">
                        <h2 className="text-lg font-semibold text-gray-800">{user.email}</h2>
                        <p className="text-sm text-gray-600">Username: {user.fullName}</p>
                        <p className="text-sm text-gray-600">Role: {user.role}</p>
                        {expanded && (
                            <div className="mt-4">
                                <p className="text-sm text-gray-600">Account Name: {user.accountName}</p>
                                <p className="text-sm text-gray-600">Annual Income: {user.annualIncome}</p>
                                <p className="text-sm text-gray-600">Account Number: {user.bankAccountNumber}</p>
                                <p className="text-sm text-gray-600">Id Number: {user.idNumber}</p>
                                <p className="text-sm text-gray-600">Tel: {user.contactInfo}</p>
                                <p className="text-sm text-gray-600">Date of Birth: {user.dateOfBirth}</p>
                                <p className="text-sm text-gray-600">Employment Status: {user.employmentStatus}</p>
                                <p className="text-sm text-gray-600">Occupation: {user.occupation}</p>
                                <p className="text-sm text-gray-600">Account Purpose: {user.purposeOfAccount}</p>
                                <p className="text-sm text-gray-600">Source of Funds: {user.sourceOfFunds}</p>
                                <p className="text-sm text-gray-600">Residential Address: {user.residentialAddress}</p>
                            </div>
                        )}
                        <button onClick={toggleExpanded} className="text-blue-500 hover:underline mt-2">
                            {expanded ? 'View Less' : 'View More'}
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex justify-between mt-4">
                <button onClick={prevPage} disabled={page === 1} className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Previous Page
                </button>
                <button onClick={nextPage} className="py-2 px-4 bg-lime-400 text-white rounded-md hover:bg-blue-600">
                    Next Page
                </button>
            </div>
        </div>
    );
};

export default UserList;
