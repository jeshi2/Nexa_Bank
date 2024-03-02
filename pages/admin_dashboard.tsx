import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import UserManagement from '@/app/components/admin/UserManagement';
import ContentModeration from '@/app/components/admin/ContentModeration';
import Analytics from '@/app/components/admin/Analytics';
import SystemSettings from '@/app/components/admin/SystemSettings';
import LogOut from '@/app/components/LogOut';
import AdminHeader from '@/app/components/admin/AdminHeader';
import AdminInbox from '@/app/components/admin/AdminInbox';
import UserList from '@/app/components/admin/UserList'
import MessageList from '@/app/components/admin/MessageList'
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { ChevronLeftIcon, UsersIcon, ShieldCheckIcon, ChartBarIcon, InboxIcon, CogIcon } from '@heroicons/react/outline';
import { AiOutlineMessage } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa';

function AdminDashboard() {
    const auth = getAuth();
    const router = useRouter();
    const [selectedComponent, setSelectedComponent] = useState('UserManagement');
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // Check for admin role
                const tokenResult = await user.getIdTokenResult();
                if (!tokenResult.claims.admin) {
                    // Not an admin, redirect
                    router.push('/dashboard');
                }
            } else {
                router.push('/admin_login');
            }
        });

        return () => unsubscribe();
    }, []);

    const handleComponentChange = (component) => {
        setSelectedComponent(component);
    };

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'UserManagement':
                return <UserManagement isDarkMode={isDarkMode} />;
            case 'MessageList':
                return <MessageList isDarkMode={isDarkMode} />;
            case 'ContentModeration':
                return <ContentModeration isDarkMode={isDarkMode} />;
            case 'Analytics':
                return <Analytics isDarkMode={isDarkMode} />;
            case 'AdminInbox':
                return <AdminInbox isDarkMode={isDarkMode} />;
            case 'UserList':
                return <UserList isDarkMode={isDarkMode} />;
            case 'SystemSettings':
                return <SystemSettings isDarkMode={isDarkMode} />;
            default:
                return <UserManagement isDarkMode={isDarkMode} />;
        }
    };

    return (
        <div className={`${isDarkMode ? 'bg-zinc-900 text-white' : 'bg-white text-black'} flex font-['Lexend']`}>
            {/* Sidebar */}
            <div className={`${isSidebarCollapsed ? 'w-20' : 'w-60'} p-4`} style={{ height: '100vh' }}>
            <div className="flex items-center justify-center">
                    {/* logo */}
                    <div className="flex items-center justify-center mb-2 ">
                        <img src="/lion.png" alt="Logo" className={`h-${isSidebarCollapsed ? '10' : '20'} w-${isSidebarCollapsed ? '50' : '60'}`} />
                    </div>

                    {/* Bank Name */}
                    <div className={`${isSidebarCollapsed ? 'hidden' : 'block'} text-xl font-semibold`}>
                        Nexa Trust Bank
                    </div>

                </div>
                <div className={`${isSidebarCollapsed ? 'hidden' : 'block'} text-sm font-semibold mt-6 mb-6`}>
                    Your Trust, is Our Commitment
                </div>
                <button className="flex items-center space-x-2 w-full mb-6 mt-6" onClick={() => toggleDarkMode()}>
                    {isDarkMode ? (
                        <>
                            <MoonIcon className={` h-6 w-6`} />
                            <span className={`${isSidebarCollapsed ? 'hidden' : 'block'} text-sm font-semibold`}>Light Mode</span>
                        </>
                    ) : (
                        <>
                            <SunIcon className={` h-6 w-6`} />
                            <span className={`${isSidebarCollapsed ? 'hidden' : 'block'} text-sm font-semibold`}>Dark Mode</span>
                        </>
                    )}
                </button>

                <div className="flex flex-col justify-start mt-6">
                    {/* For User Management */}
                    <button onClick={() => handleComponentChange('UserManagement')}
                        className={`flex items-center space-x-2 mb-4 
                        ${selectedComponent === 'UserManagement' ? 'bg-lime-500 text-black' : 'bg-white text-black'}
                        ${isDarkMode ? 'bg-lime-500 text-black' : ''} rounded-lg px-4 py-2`}>
                        <UsersIcon className="h-6 w-6" />
                        <span className={`${isSidebarCollapsed ? 'hidden' : 'block'} text-sm font-semibold`}>User Management</span>
                    </button>
                    <button onClick={() => handleComponentChange('MessageList')}
                        className={`flex items-center space-x-2 mb-4 
                        ${selectedComponent === 'MessageList' ? 'bg-lime-500 text-black' : 'bg-white text-black'}
                        ${isDarkMode ? 'bg-lime-500 text-black' : ''} rounded-lg px-4 py-2`}>
                        <AiOutlineMessage className="h-6 w-6" />
                        <span className={`${isSidebarCollapsed ? 'hidden' : 'block'} text-sm font-semibold`}>Messages</span>
                    </button>
                    {/* For Content Moderation */}
                    <button onClick={() => handleComponentChange('ContentModeration')} 
                        className={`flex items-center space-x-2 mb-4 
                        ${selectedComponent === 'ContentModeration' ? 'bg-lime-500 text-black' : 'bg-white text-black'}
                        ${isDarkMode ? 'bg-lime-500 text-black' : ''} rounded-lg px-4 py-2`}>
                        <ShieldCheckIcon className="h-6 w-6" />
                        <span className={`${isSidebarCollapsed ? 'hidden' : 'block'} text-sm font-semibold`}>Content Moderation</span>
                    </button>
                    {/* For Analytics */}
                    <button onClick={() => handleComponentChange('Analytics')} 
                        className={`flex items-center space-x-2 mb-4 
                        ${selectedComponent === 'Analytics' ? 'bg-lime-500 text-black' : 'bg-white text-black'}
                        ${isDarkMode ? 'bg-lime-500 text-black' : ''} rounded-lg px-4 py-2`}>
                        <ChartBarIcon className="h-6 w-6" />
                        <span className={`${isSidebarCollapsed ? 'hidden' : 'block'} text-sm font-semibold`}>Analytics</span>
                    </button>
                    <button onClick={() => handleComponentChange('AdminInbox')} 
                        className={`flex items-center space-x-2 mb-4 
                        ${selectedComponent === 'AdminInbox' ? 'bg-lime-500 text-black' : 'bg-white text-black'}
                        ${isDarkMode ? 'bg-lime-500 text-black' : ''} rounded-lg px-4 py-2`}>
                        <InboxIcon className="h-6 w-6" />
                        <span className={`${isSidebarCollapsed ? 'hidden' : 'block'} text-sm font-semibold`}>AdminInbox</span>
                    </button>
                    <button onClick={() => handleComponentChange('UserList')} 
                        className={`flex items-center space-x-2 mb-4 
                        ${selectedComponent === 'UserList' ? 'bg-lime-500 text-black' : 'bg-white text-black'}
                        ${isDarkMode ? 'bg-lime-500 text-black' : ''} rounded-lg px-4 py-2`}>
                        <FaUsers className="h-6 w-6" />
                        <span className={`${isSidebarCollapsed ? 'hidden' : 'block'} text-sm font-semibold`}>All Users</span>
                    </button>
                    {/* For System Settings */}
                    <button onClick={() => handleComponentChange('SystemSettings')} 
                        className={`flex items-center space-x-2 mb-4 
                        ${selectedComponent === 'SystemSettings' ? 'bg-lime-500 text-black' : 'bg-white text-black'}
                        ${isDarkMode ? 'bg-lime-500 text-black' : ''} rounded-lg px-4 py-2`}>
                        <CogIcon className="h-6 w-6" />
                        <span className={`${isSidebarCollapsed ? 'hidden' : 'block'} text-sm font-semibold`}>System Settings</span>
                    </button>
                    <LogOut isSidebarCollapsed={isSidebarCollapsed}/>
                </div>
                <button className="flex  h-5 w-5 bg-green-500 hover:bg-teal-500 rounded-md" onClick={toggleSidebar}>
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>
            </div>
            {/* Main Content */}
            <div className="flex-grow">
                <AdminHeader />
                {renderComponent()}
            </div>
        </div>
    );
}

export default AdminDashboard;
