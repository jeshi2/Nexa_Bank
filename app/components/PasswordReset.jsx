import React, { useRef, useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';

const PasswordReset = () => {
    const [email, setEmail] = useState('');

    const lemailRef = useRef();

    const auth = getAuth();

    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    const handleResetPassword = async (e) => {
        e.preventDefault();

        const email = lemailRef.current.value || '';
        if (!isEmailValid(email)) {
            toast.error('Please enter a valid email address.');
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            toast.success(`Password reset email sent to ${email}. Check your inbox, if you are registered.`);
            setEmail('');
            lemailRef.current.value = '';

        } catch (error) {
            const errorCode = "Not Found";
            const errorMessage = "Invalid Email";
            toast.error(`Please check your email: ${errorCode}, ${errorMessage}`);
        }
    };

    return (

        <div className="min-h-screen flex flex-col justify-center items-center bg-zinc-900">
            <Navbar />
            <div className="relative mt-20 p-8 rounded-3xl border border-neutral-800 flex flex-col justify-center items-center gap-8">
                <div className="bg-cover bg-center absolute top-0 left-0 w-full h-full rounded-3xl" style={{ backgroundImage: `url('/abstract.jpg')` }}></div>
                <div className="text-center mb-4 z-10 relative">
                    <h1 className="text-lime-400 text-5xl font-medium font-['Lexend']">Password Reset</h1>
                    <p className="text-stone-300 text-lg font-light font-['Lexend']">Forgot Password! Please request new one.</p>
                </div>

                <form className="Form w-full flex flex-col gap-4 mt-4 z-10 relative" onSubmit={handleResetPassword}>
                    <div>
                        <label htmlFor="email" className="block text-lg text-center mb-2 font-semibold font-['Lexend'] text-white">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full p-3 bg-zinc-900 rounded-3xl border border-neutral-800 text-white text-lg font-light font-['Lexend']"
                            placeholder="Enter your email address"
                            ref={lemailRef}
                        />
                    </div>
                    <div className="flex flex-col w-full gap-4">
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-lime-400 rounded-3xl text-neutral-800 text-lg font-normal font-['Lexend']" style={{ width: '50%' }}
                            >
                                Reset
                            </button>
                        </div>
                        <div>

                        </div>
                        <Link href="/login">
                            <div className="flex justify-center">
                                <button className="Button px-6 py-3 bg-neutral-800 rounded-3xl border border-zinc-800 text-white text-lg font-normal font-['Lexend']" style={{ width: '50%' }}>LogIn</button>
                            </div>
                        </Link>
                    </div>
                </form>

            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Footer />

        </div>
    );
};

export default PasswordReset;