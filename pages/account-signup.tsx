import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getDatabase, ref, set, get } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { CountryDropdown } from 'react-country-region-selector';

function AdditionalRegistration() {
    const [fullName, setFullName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [residentialAddress, setResidentialAddress] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [idUpload, setIdUpload] = useState(null);
    const [idNumber, setIdNumber] = useState('');
    const [employmentStatus, setEmploymentStatus] = useState('');
    const [occupation, setOccupation] = useState('');
    const [annualIncome, setAnnualIncome] = useState('');
    const [sourceOfFunds, setSourceOfFunds] = useState('');
    const [purposeOfAccount, setPurposeOfAccount] = useState('');
    const [signature, setSignature] = useState(null);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [selectedCountry, setResidentialCountry] = useState('');

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const auth = getAuth();
                const user = auth.currentUser;
                if (!user) {
                    // If user is not authenticated, redirect to login page
                    router.push('/login');
                } else {
                    const db = getDatabase();
                    const roleRef = ref(db, `users/${user.uid}/role`);
                    const snapshot = await get(roleRef);
                    const role = snapshot.val();
                    if (role === 'user') {
                        // The user has the 'user' role, check if registration is completed
                        const userRef = ref(db, `users/${user.uid}/registrationCompleted`);
                        const registrationSnapshot = await get(userRef);
                        const registrationCompleted = registrationSnapshot.val();
                        if (registrationCompleted) {
                            // If registration is completed, redirect to dashboard
                            router.push('/dashboard');
                        } else {
                            // User is authorized to view this page
                            setIsAuthorized(true);
                        }
                    } else {
                        // User does not have the 'user' role
                        setError('You do not have permission to access this page.');
                    }
                }
            } catch (error) {
                setError(error.message);
            }
        };

        checkAuthentication();
    }, []);

    const handleRegistration = async (e) => {
        e.preventDefault();
        try {

            // Generate a random credit card number
            const creditCardNumber = generateCreditCardNumber();
            const signupDate = new Date();
            // Generate a random CVV number
            const cvv = generateCVV();

            // Generate an expiry date 6 years from the date of signup
            const expiryDate = generateExpiryDate(signupDate);

            // Generate a unique bank account number
            const generatedAccountNumber = generateBankAccountNumber();

            // Set default account name
            const defaultAccountName = "Infinite Account";

            // Store registration data in Firebase Storage
            const storage = getStorage();
            const idUploadRef = storageRef(storage, `id_uploads/${idUpload.name}`);
            const signatureRef = storageRef(storage, `signatures/${signature.name}`);
            await Promise.all([
                uploadBytes(idUploadRef, idUpload),
                uploadBytes(signatureRef, signature)
            ]);

            // Get download URLs for uploaded files
            const idUploadUrl = await getDownloadURL(idUploadRef);
            const signatureUrl = await getDownloadURL(signatureRef);

            // Get the current authenticated user
            const auth = getAuth();
            const user = auth.currentUser;
            // Store additional user details in Realtime Database
            if (user) {
                const db = getDatabase();
                const userRef = ref(db, `users/${user.uid}/additionalDetails`);
                await set(userRef, {
                    fullName,
                    dateOfBirth,
                    residentialAddress: `${residentialAddress}, ${selectedCountry}`,
                    contactInfo,
                    idUpload: idUploadUrl,
                    idNumber,
                    employmentStatus,
                    occupation,
                    annualIncome,
                    sourceOfFunds,
                    purposeOfAccount,
                    signature: signatureUrl,
                    bankAccountNumber: generatedAccountNumber,
                    accountName: defaultAccountName,
                    creditCardNumber,
                    cvv,
                    expiryDate
                });
                // Mark registration as completed
                await set(ref(db, `users/${user.uid}/registrationCompleted`), true);
                await set(ref(db, `users/${user.uid}/isFrozen`), false);
                router.push('/dashboard');
            } else {
                throw new Error('No user is currently authenticated.');
            }
            // Redirect user to dashboard or home page
            router.push('/dashboard');
        } catch (error) {
            setError(error.message);
        }
    };

    // Function to generate a random bank account number
    const generateBankAccountNumber = () => {
        const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
        return `BA${randomNumber}`;
    };

    // Function to generate a random credit card number
    const generateCreditCardNumber = () => {
        const creditCardNumber = '4' + Array.from({ length: 15 }, () => Math.floor(Math.random() * 10)).join('');
        return creditCardNumber;
    };

    // Function to generate a random CVV number
    const generateCVV = () => {
        const cvv = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10)).join('');
        return cvv;
    };

    // Function to generate an expiry date 6 years from the date of signup
    const generateExpiryDate = (signupDate) => {
        const sixYearsLater = new Date(signupDate);
        sixYearsLater.setFullYear(sixYearsLater.getFullYear() + 6);
        const month = ('0' + (sixYearsLater.getMonth() + 1)).slice(-2);
        const year = sixYearsLater.getFullYear();
        return `${month}/${year}`;
    };

    if (!isAuthorized) {
        return (
            <div className="bg-zinc-900 min-h-screen flex justify-center items-center">
                <p className="text-red-500 text-xl">{error || 'Checking authorization...'}</p>
                <Link href="/">
                    <p className="text-lime-400 mx-2 text-xl">Home</p>
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-zinc-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8  flex flex-wrap ">

            <div className="w-full lg:w-1/2 px-4 py-4 lg:py-0">
                <h1 className="text-lime-400 text-3xl font-bold font-['Lexend'] mb-4">Complete Account Registration ...</h1>
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                <form onSubmit={handleRegistration} className="mt-6 flex flex-wrap justify-center items-center">

                    <div className="w-full md:w-1/2 lg:w-1/3 mb-4 mx-2">
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            className="w-full p-2 bg-zinc-900 rounded-3xl border border-lime-800 text-white text-lg font-light font-['Lexend']"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 mb-4 mx-2" >

                        <input
                            type="date"
                            placeholder="Date of Birth"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            required
                            className="w-full p-2 bg-zinc-900 rounded-3xl border border-lime-800 text-white text-lg font-light font-['Lexend']"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 mb-4 mx-2">

                        <input
                            type="text"
                            placeholder="Residential Address"
                            value={residentialAddress}
                            onChange={(e) => setResidentialAddress(e.target.value)}
                            required
                            className="w-full p-2 bg-zinc-900 rounded-3xl border border-lime-800 text-white text-lg font-light font-['Lexend']"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 mb-4 mx-2">
                        <label className="text-white text-lg font-light font-['Lexend']">Residential Country</label>
                        <CountryDropdown
                            value={selectedCountry}
                            onChange={(val) => setResidentialCountry(val)}
                            className="w-full p-2 bg-zinc-900 rounded-3xl border border-lime-800 text-white text-lg font-light font-['Lexend']"
                        />
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 mb-4 mx-2">
                        <input
                            type="text"
                            placeholder="Contact Info"
                            value={contactInfo}
                            onChange={(e) => {
                                const inputValue = e.target.value;
                                // Check if input starts with "+" and is numeric
                                if (/^\+?[0-9]*$/.test(inputValue) || inputValue === '') {
                                    setContactInfo(inputValue);
                                }
                            }}
                            required
                            className="w-full p-2 bg-zinc-900 rounded-3xl border border-lime-800 text-white text-lg font-light font-['Lexend']"
                        />
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 mb-4 mx-2">
                        <label className="text-white text-lg font-light font-['Lexend']">Upload ID Document (e.g., Passport, Driver's License)</label>
                        <input
                            type="file"
                            accept="image/*, application/pdf"
                            onChange={(e) => setIdUpload(e.target.files[0])}
                            required
                            className="w-full p-2 bg-zinc-900 rounded-3xl border border-lime-800 text-white text-lg font-light font-['Lexend']"
                            placeholder="Upload ID Document (e.g., Passport, Driver's License)"
                        />
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 mb-4 mx-2">
                        <input
                            type="number"
                            placeholder="ID Number"
                            value={idNumber}
                            onChange={(e) => setIdNumber(e.target.value)}
                            required
                            className="w-full p-2 bg-zinc-900 rounded-3xl border border-lime-800 text-white text-lg font-light font-['Lexend']"
                        />
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 mb-4 mx-2">
                        <label className="text-white text-lg font-light font-['Lexend']">Employment Status</label>
                        <select
                            value={employmentStatus}
                            onChange={(e) => setEmploymentStatus(e.target.value)}
                            required
                            className="w-full p-2 bg-zinc-900 rounded-3xl border border-lime-800 text-white text-lg font-light font-['Lexend']"
                        >
                            <option value="">Select Employment Status</option>
                            <option value="Employed">Employed</option>
                            <option value="Not Employed">Not Employed</option>
                        </select>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 mb-4 mx-2">
                        <input
                            type="text"
                            placeholder="Occupation"
                            value={occupation}
                            onChange={(e) => setOccupation(e.target.value)}
                            required
                            className="w-full p-2 bg-zinc-900 rounded-3xl border border-lime-800 text-white text-lg font-light font-['Lexend']"
                        />
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 mb-4 mx-2">
                        <label className="text-white text-lg font-light font-['Lexend']">Annual Income (USD)</label>
                        <input
                            type="range"
                            min="0"
                            max="100000"
                            step="1000"
                            value={annualIncome}
                            onChange={(e) => setAnnualIncome(e.target.value)}
                            className="w-full p-2 bg-zinc-900 rounded-3xl border border-lime-800 text-white text-lg font-light font-['Lexend']"
                        />
                        <output className="text-white text-lg font-light font-['Lexend']">{annualIncome}</output>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 mb-4 mx-2">
                        <label className="text-white text-lg font-light font-['Lexend']">Source of Funds</label>
                        <select
                            value={sourceOfFunds}
                            onChange={(e) => setSourceOfFunds(e.target.value)}
                            required
                            className="w-full p-2 bg-zinc-900 rounded-3xl border border-lime-800 text-white text-lg font-light font-['Lexend']"
                        >
                            <option value="">Select Source of Funds</option>
                            <option value="Employment Income">Employment Income</option>
                            <option value="Investments">Investments</option>
                            <option value="Savings">Savings</option>
                            <option value="Gifts">Gifts</option>
                            <option value="Inheritance">Inheritance</option>
                        </select>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 mb-4 mx-2">
                        <label className="text-white text-lg font-light font-['Lexend']">Purpose of Account</label>
                        <select
                            value={purposeOfAccount}
                            onChange={(e) => setPurposeOfAccount(e.target.value)}
                            required
                            className="w-full p-2 bg-zinc-900 rounded-3xl border border-lime-800 text-white text-lg font-light font-['Lexend']"
                        >
                            <option value="">Select Purpose of Account</option>
                            <option value="Personal Savings">Personal Savings</option>
                            <option value="Investments">Investments</option>
                            <option value="Business Expenses">Business Expenses</option>
                            <option value="Education Fund">Education Fund</option>
                        </select>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 mb-4 mx-4">
                        <label className="text-white text-lg font-light font-['Lexend']">Upload Signature</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setSignature(e.target.files[0])}
                            required
                            className="w-full bg-zinc-900 p-2 rounded-3xl border border-lime-800 text-white text-lg font-light font-['Lexend']"
                            placeholder="Upload Signature (Image)"
                        />
                    </div>



                    <button type="submit" className="w-full bg-lime-400 hover:bg-lime-900 text-lime-800 font-normal py-2 px-4 font-['Lexend'] rounded-3xl mt-4">Complete Registration</button>

                </form>
            </div>
            <div className="hidden lg:block w-full lg:w-1/2 py-4 px-4">
                <div className="h-full flex justify-center items-center rounded-lg shadow-lg">
                    <img src="accountba.jpg" alt="Floating Image" className="max-h-full max-w-full rounded-lg" />
                </div>
            </div>
        </div>
    );
}

export default AdditionalRegistration;