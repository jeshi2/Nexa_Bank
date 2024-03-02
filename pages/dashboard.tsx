import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { getDatabase, ref, get } from 'firebase/database';
import Home from '@/app/components/Home';
import Payments from '@/app/components/Payments';
import Transactions from '@/app/components/Transactions';
import Inbox from '@/app/components/Inbox';
import Settings from '@/app/components/Settings';
import LogOut from '@/app/components/LogOut';
import UserHeader from '@/app/components/UserHeader';
import Link from 'next/link';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { ChevronLeftIcon, HomeIcon, CashIcon, ReceiptRefundIcon, InboxIcon, CogIcon } from '@heroicons/react/outline';

function Dashboard() {
    const auth = getAuth();
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [selectedComponent, setSelectedComponent] = useState('Home');
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [user, setUser] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const db = getDatabase();
                const roleRef = ref(db, `users/${user.uid}/role`);
                const snapshot = await get(roleRef);
                const role = snapshot.val();
                setUserRole(role);
                
                if (role !== 'user') {
                    setError('You do not have permission to access this page.');
                } else {
                    const tokenResult = await user.getIdTokenResult();
                    if (tokenResult.claims.admin) {
                        setError('You do not have permission to access this page.');
                    }
                }
            } else {
                router.push('/login');
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const checkAdditionalRegistrationCompleted = async () => {
            try {
                const user = auth.currentUser;
                if (user) {
                    const db = getDatabase();
                    const userRef = ref(db, `users/${user.uid}/registrationCompleted`);
                    const snapshot = await get(userRef);
                    const registrationCompleted = snapshot.val();
                    if (!registrationCompleted) {
                        router.push('/account-signup');
                    }
                }
            } catch (error) {
                setError(error.message);
            }
        };

        checkAdditionalRegistrationCompleted();
    }, []);

    if (error) {
        return <div className="bg-zinc-900 min-h-screen flex justify-center items-center">
            <p className="text-red-500 text-xl">{error}</p>
            <Link href="/">
            <p className="text-lime-400 text-xl">Home</p>
            </Link>
        </div>;
    }

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
            case 'Home':
                return <Home isDarkMode={isDarkMode} />;
            case 'Payments':
                return <Payments isDarkMode={isDarkMode} />;
            case 'Transactions':
                return <Transactions isDarkMode={isDarkMode} />;
            case 'Inbox':
                return <Inbox isDarkMode={isDarkMode} />;
            case 'Settings':
                return <Settings isDarkMode={isDarkMode} />;
            default:
                return <Home isDarkMode={isDarkMode} />;
        }
    };

    return (
        <div className={`${isDarkMode ? 'bg-zinc-900 text-white' : 'bg-white text-black'} flex font-['Lexend']`}>
            {/* Sidebar */}
            <div className={`${isSidebarCollapsed ? 'w-20' : 'w-40'} flex flex-col   p-4`} style={{ height: '100vh' }}>
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
                <div className="flex flex-col   justify-start mt-6 ">
                    <button className={`flex items-center space-x-2 w-full mb-6 
                        ${selectedComponent === 'Home' ? 'bg-lime-500 text-black' : 'bg-white text-black'}
                        ${isDarkMode ? 'bg-lime-500 text-black' : ''} rounded-lg px-4 py-2`}
                        onClick={() => handleComponentChange('Home')}>
                        <HomeIcon className="h-6 w-6" />
                        <span className={`${isSidebarCollapsed ? 'hidden' : 'block'} text-sm font-semibold`}>Home</span>
                    </button>
                    <button className={`flex items-center space-x-2 w-full mb-6 
                        ${selectedComponent === 'Payments' ? 'bg-lime-500 text-black' : 'bg-white text-black'} 
                        ${isDarkMode ? 'bg-lime-500 text-black' : ''} rounded-lg px-4 py-2`}
                        onClick={() => handleComponentChange('Payments')}>
                        <CashIcon className="h-6 w-6" />
                        <span className={`${isSidebarCollapsed ? 'hidden' : 'block'} text-sm font-semibold`}>Payments</span>
                    </button>
                    <button className={`flex items-center space-x-2 w-full mb-6 
                        ${selectedComponent === 'Transactions' ? 'bg-lime-500 text-black' : 'bg-white text-black'} 
                        ${isDarkMode ? 'bg-lime-500 text-black' : ''} rounded-lg px-4 py-2`} 
                        onClick={() => handleComponentChange('Transactions')}>
                        <ReceiptRefundIcon className="h-6 w-6" />
                        <span className={`${isSidebarCollapsed ? 'hidden' : 'block'} text-sm font-semibold`}>Transactions</span>
                    </button>
                    <button className={`flex items-center space-x-2 w-full mb-6 
                        ${selectedComponent === 'Inbox' ? 'bg-lime-500 text-black' : 'bg-white text-black'} 
                        ${isDarkMode ? 'bg-lime-500 text-black' : ''} rounded-lg px-4 py-2`} 
                        onClick={() => handleComponentChange('Inbox')}>
                        <InboxIcon className="h-6 w-6" />
                        <span className={`${isSidebarCollapsed ? 'hidden' : 'block'} text-sm font-semibold`}>Inbox</span>
                    </button>
                    <button className={`flex items-center space-x-2 w-full mb-6 
                        ${selectedComponent === 'Settings' ? 'bg-lime-500 text-black' : 'bg-white text-black'} 
                        ${isDarkMode ? 'bg-lime-500 text-black' : ''} rounded-lg px-4 py-2`} 
                        onClick={() => handleComponentChange('Settings')}>
                        <CogIcon className="h-6 w-6" />
                        <span className={`${isSidebarCollapsed ? 'hidden' : 'block'} text-sm font-semibold`}>Settings</span>
                    </button>
                    <LogOut isSidebarCollapsed={isSidebarCollapsed} />
                </div>
                <button className="flex  h-5 w-5 bg-green-500 hover:bg-teal-500 rounded-md" onClick={toggleSidebar}>
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>

            </div>
            {/* Main Content */}
            <div className="flex-grow ">
                <UserHeader />
                {renderComponent()}
            </div>
        </div>
    );
}

export default Dashboard;
