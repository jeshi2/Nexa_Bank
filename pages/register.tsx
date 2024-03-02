import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getDatabase, ref, set } from "firebase/database";
import Navbar from '@/app/components/Navbar';
import Testimonials from '@/app/components/Testimonials';
import Footer from '@/app/components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    // Define a regex for a strong password
    const strongPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    if (!strongPasswordRegex.test(password)) {
      toast.error('Password must contain at least 8 characters, including at least one digit, one lowercase letter, one uppercase letter, and one special character.');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up 
        const user = userCredential.user;

        const defaultRole = { role: "user" };
        const db = getDatabase();
        await set(ref(db, `users/${user.uid}`), {
          email: user.email,
          ...defaultRole
        });

        router.push('/account-signup');
        toast.success("Registration Successful");
        // ...
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {

          toast.error('Registration failed. Please check your information and try again.');
        } else {
          toast.error('An error occurred. Please try again later.');
        }
        // ..
      });
  };

  return (
    <div className="SignUpPageDesktop min-h-screen flex flex-col justify-center items-center bg-zinc-900">
      <Navbar />
      <div className="SignUp  mt-20 relative p-8 rounded-3xl border border-neutral-800 flex flex-col justify-center items-center gap-8 ">
        <div className="bg-cover bg-center absolute top-0 left-0 w-full h-full rounded-3xl" style={{ backgroundImage: `url('/abstract.jpg')` }}></div>
        <div className="TextContainer text-center mb-4 z-10 relative">
          <h1 className="text-lime-400 text-5xl font-bold font-['Lexend']">Register</h1>
          <p className="text-stone-300 text-lg font-light font-['Lexend']">Join our community today! Create an account to unlock exclusive features and personalized experiences.</p>
        </div>
        <form onSubmit={handleRegister} className="Form w-full flex flex-col gap-4 mt-4 z-10 relative">
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
            <div className="flex-1">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="Input w-full p-3 bg-zinc-900  rounded-3xl border border-neutral-800 text-white text-lg font-light font-['Lexend']"
                style={{ width: '100%' }}
              />
            </div>
          </div>

          <div className="flex flex-col w-full gap-4 mt-8">
            <div className="flex justify-center">
              <button type="submit" className="Button px-6  py-3 bg-lime-400 rounded-3xl text-neutral-800 text-lg font-normal font-['Lexend']" style={{ width: '50%' }}>Register</button>
            </div>
            <Link href="/login">
              <div className="flex justify-center">
                <button className="Button px-6 py-3  bg-neutral-800 rounded-3xl border border-zinc-800 text-white text-lg font-normal font-['Lexend']" style={{ width: '50%' }}>LogIn</button>
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
      <Testimonials />
      <Footer />
    </div>

  )
}

export default Register