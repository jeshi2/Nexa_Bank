import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Check if the user has the admin custom claim
        user.getIdTokenResult().then((idTokenResult) => {
          if (idTokenResult.claims.admin) {
            router.push('/admin_dashboard');
          }
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);

      const user = auth.currentUser;
      if (user) {
        user.getIdTokenResult().then((idTokenResult) => {
          if (idTokenResult.claims.admin) {
            router.push('/admin_dashboard');

          } else {
            toast.error('You do not have permission to access the admin panel.');
          }
        });
      }
    } catch (error) {
      toast.error('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="LoginPageDesktop min-h-screen flex flex-col justify-center items-center bg-zinc-900" >
      <Navbar />
      <div className="Login relative mt-20 p-8 rounded-3xl border border-neutral-800 flex flex-col justify-center items-center gap-8">
        {/* Background image */}
        <div className="bg-cover bg-center absolute top-0 left-0 w-full h-full rounded-3xl" style={{ backgroundImage: `url('/abstract.jpg')` }}></div>
        <div className="TextContainer text-center mb-4 z-10 relative">
          <h1 className="text-lime-400 text-5xl font-medium font-['Lexend']">Admin Login</h1>
          <p className="text-stone-300 text-lg font-light font-['Lexend']">Welcome back! Please log in to access the admin panel.</p>
        </div>
        {/* Login form */}
        <form onSubmit={handleLogin} className="Form w-full flex flex-col gap-4 mt-4 z-10 relative">
          {/* Email and Password fields */}
          <div className="flex flex-row w-full gap-4">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="Input w-full p-3 bg-zinc-900 rounded-3xl border border-neutral-800 text-white text-lg font-light font-['Lexend']"
              />
            </div>
            <div className="flex-1 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="Input w-full p-3 bg-zinc-900 rounded-3xl border border-neutral-800 text-white text-lg font-light font-['Lexend']"
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
          {/* Forgot password link */}
          <Link href="/reset_password" className="TextButton self-stretch text-center text-white text-lg font-normal font-['Lexend'] underline leading-relaxed">Forgot Password?</Link>
          {/* Login and Sign Up buttons */}
          <div className="flex flex-col w-full gap-4">
            <div className="flex justify-center">
              <button type='submit' className="Button px-6 py-3 bg-lime-400 rounded-3xl text-neutral-800 text-lg font-normal font-['Lexend']" style={{ width: '50%' }}>Login</button>
            </div>
            <Link href="/">
              <div className="flex justify-center">
                <button className="Button px-6 py-3 bg-neutral-800 rounded-3xl border border-zinc-800 text-white text-lg font-normal font-['Lexend']" style={{ width: '50%' }}>Not Admin</button>
              </div>
            </Link>
          </div>
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
      <Footer />
    </div>
  );
};

export default AdminLogin;
