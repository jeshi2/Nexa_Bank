import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';
import { SearchIcon, UserCircleIcon } from '@heroicons/react/outline';

const UserHeader = () => {
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const db = getDatabase();
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // User is signed in
                const userRef = ref(db, `users/${user.uid}/additionalDetails/fullName`);
                try {
                    const snapshot = await get(userRef);
                    if (snapshot.exists()) {
                        setUserName(snapshot.val());
                    } else {
                        // console.log("No such document!");
                    }
                } catch (error) {
                    // console.error("Error getting user name:", error);
                }
            } else {
                // No user is signed in
                setUserName(null);
            }
        });

        // Cleanup subscription
        return () => unsubscribe();
    }, []);
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2">
            {/* Left side */}
            
            <div className="flex items-center mb-2 md:mb-0">
                {/* Logo */}
                {/*<img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />*/}
                <h1 className="text-xl font-semibold">My Dashboard</h1>
            </div>
            
            {/* Right side */}
            <div className="flex items-center">
                {/* Search bar */}
                <div className="relative mr-4">
                    <input type="text" placeholder="Search..." className="px-3 py-1 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                    <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                
                {/* User profile */}
                <div className="flex items-center">
                    <p className="mr-2 hidden md:block">{userName}</p>
                    <UserCircleIcon className="h-8 w-8 text-gray-500" />
                </div>
            </div>
        </div>
  )
}

export default UserHeader