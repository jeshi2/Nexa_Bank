import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from '@firebase/auth';
import router from 'next/router';
import { getDatabase, ref, get } from 'firebase/database';
import Navbar from '@/app/components/Navbar';
import Link from 'next/link';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Testimonials from '@/app/components/Testimonials';
import Footer from '@/app/components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Invalid email format. Please enter a valid email address.");
      return;
    }
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          // Check if the additional registration is completed
          const db = getDatabase();
          const userRef = ref(db, `users/${user.uid}/registrationCompleted`);
          const snapshot = await get(userRef);
          const registrationCompleted = snapshot.val();
          if (!registrationCompleted) {
            // If additional registration is not completed, redirect to additional registration page
            router.push('/account-signup');
          } else {
            // If additional registration is completed, redirect to dashboard
            router.push('/dashboard');
            toast.success("Logged In Successful");
          }

        })
        .catch((error) => {
          toast.error("Invalid email or password. Please try again.");
          setPassword('');
        });
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
    // Clear input fields

  };
  return (
    <div className="LoginPageDesktop min-h-screen flex flex-col justify-center items-center bg-zinc-900" >
      <Navbar />
      <div className="Login mt-20 relative p-8 rounded-3xl border border-neutral-800 flex flex-col justify-center items-center gap-8 ">
        <div className="bg-cover bg-center absolute top-0 left-0 w-full h-full rounded-3xl" style={{ backgroundImage: `url('/abstract.jpg')` }}></div>
        <div className="TextContainer text-center mb-4 z-10 relative">
          <h1 className="text-lime-400 text-5xl font-medium font-['Lexend']">Login</h1>
          <p className="text-stone-300 text-lg font-light font-['Lexend']">Welcome back! Please log in to access your account.</p>
        </div>
        <form onSubmit={handleLogin} className="Form w-full flex flex-col gap-4 mt-4 z-10 relative">
          <div className="flex flex-row w-full gap-4">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="Input w-full p-3 bg-zinc-900  rounded-3xl border border-neutral-800 text-white text-lg font-light font-['Lexend']"
                style={{ width: '100%' }}
              />
            </div>
            <div className="flex-1 relative">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="Input w-full p-3 bg-zinc-900  rounded-3xl border border-neutral-800 text-white text-lg font-light font-['Lexend']"
              />
              {/* Password visibility toggle */}
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <Link href="/reset_password" className="TextButton self-stretch text-center text-white text-lg font-normal font-['Lexend'] underline leading-relaxed">Forgot Password?</Link>
          <div className="flex flex-col w-full gap-4 ">
            <div className="flex justify-center" >
              <button type='submit' className="Button px-6  py-3 bg-lime-400 rounded-3xl text-neutral-800 text-lg font-normal font-['Lexend']" style={{ width: '50%' }}>Login</button>
            </div>
            <Link href="/register">
              <div className="flex justify-center">
                <button className="Button px-6 py-3  bg-neutral-800 rounded-3xl border border-zinc-800 text-white text-lg font-normal font-['Lexend']" style={{ width: '50%' }}>Sign Up</button>
              </div>
            </Link>
          </div>
          <Link href="/admin_login" className="TextButton self-stretch  text-center text-white text-lg font-normal font-['Lexend'] underline leading-relaxed">Are you Admin?</Link>
        </form>
      </div>
      {error && <p className="text-red-500 text-lg font-['Lexend']">{error}</p>}
      {successMessage && <p className="text-green-500 text-lg font-['Lexend']">{successMessage}</p>}
      <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      <Testimonials />
      <Footer />
    </div>

  )
}

export default Login