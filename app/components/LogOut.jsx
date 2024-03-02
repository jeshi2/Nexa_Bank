import React from 'react'
import { signOut, getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { LogoutIcon } from '@heroicons/react/outline';

const LogOut = ({ isSidebarCollapsed }) => {
  const auth = getAuth();
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      // console.error('Error signing out:', error.message);
    }
  };
  return (
    <button className={`flex space-x-2 w-full mb-8 text-sm font-semibold ${isSidebarCollapsed && 'justify-start'}`} onClick={handleLogout}>
      {!isSidebarCollapsed && <LogoutIcon className="h-6 w-6" />}
      <span>{isSidebarCollapsed ? <LogoutIcon className="h-6 w-6" /> : 'Logout'}</span>
    </button>
  )
}

export default LogOut
