import React, { useState, useEffect } from 'react';
import { getAuth, deleteUser } from 'firebase/auth';
import { getDatabase, ref, get, update } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { UserIcon } from '@heroicons/react/outline';
import { PlusCircleIcon } from '@heroicons/react/solid';

function Settings() {
  const [userDetails, setUserDetails] = useState(null);
  const [residentialAddress, setResidentialAddress] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [occupation, setOccupation] = useState('');
  const [signature, setSignature] = useState(null);
  const [signatureUrl, setSignatureUrl] = useState('');
  const [signatureName, setSignatureName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteError, setDeleteError] = useState(null);
  const [deleteSuccess, setDeleteSuccess] = useState(null);


  useEffect(() => {
    const auth = getAuth();
    const db = getDatabase();
    const user = auth.currentUser;

    if (user) {
      // Fetch Profile Picture
      const storage = getStorage();
      const profilePictureRef = storageRef(storage, `profilePictures/${user.uid}`);
      const signatureRef = storageRef(storage, `signatures/${user.uid}`);
      /**getDownloadURL(signatureRef)
        .then((url) => {
          setSignatureUrl(url);
        })
        .catch((error) => {
          console.error("Error getting signature URL:", error);
          setErrorMessage("Failed to fetch user data. Please try again later.");
        });**/

      getDownloadURL(profilePictureRef)
        .then((url) => {
          setProfilePictureUrl(url);
        })
        .catch((error) => {
          //console.error("Error getting profile picture URL:", error);
          setErrorMessage("Can't find user profile. Please upload or update.");
        });

      // Fetch user details from Firebase Realtime Database
      const userRef = ref(db, `users/${user.uid}/additionalDetails`);
      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            setUserDetails(snapshot.val());
            setResidentialAddress(snapshot.val().residentialAddress);
            setContactInfo(snapshot.val().contactInfo);
            setOccupation(snapshot.val().occupation);
            setSignatureUrl(snapshot.val().signature);

          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          //console.error("Error getting user details:", error);
          setErrorMessage("Failed to find user info. Please try again later.");
        });
      setUserEmail(user.email);
    }
  }, []);

  const handleUpdate = async () => {
    const auth = getAuth();
    const db = getDatabase();
    const user = auth.currentUser;

    if (user) {

      // Upload profile picture to Firebase Storage
      if (profilePicture) {
        const storage = getStorage();
        const profilePictureRef = storageRef(storage, `profilePictures/${user.uid}`);
        try {
          await uploadBytes(profilePictureRef, profilePicture);
          //console.log("Profile picture uploaded successfully");
          setSuccessMessage("Profile picture uploaded successfully");
        } catch (error) {
          //console.error("Error uploading profile picture:", error);
          setErrorMessage("Failed to upload profile picture. Please try again later.");
        }
      }

      // Upload signature to Firebase Storage
      if (signature) {
        const storage = getStorage();
        const signatureRef = storageRef(storage, `signatures/${user.uid}`);
        try {
          await uploadBytes(signatureRef, signature);
          //console.log("Signature uploaded successfully");
          setSuccessMessage("Signature uploaded successfully");
        } catch (error) {
          //console.error("Error uploading signature:", error);
          setErrorMessage("Failed to upload signature. Please try again later.");
        }
      }
      // Update user details in Firebase Realtime Database
      const userRef = ref(db, `users/${user.uid}/additionalDetails`);
      try {
        await update(userRef, {
          residentialAddress,
          contactInfo,
          occupation,
        });
        //console.log("User details updated successfully");
        setSuccessMessage("User details updated successfully");
      } catch (error) {
        //console.error("Error updating user details:", error);
        setErrorMessage("Failed to update user details. Please try again later.");
      }
    }

  };

  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
    setProfilePictureUrl(URL.createObjectURL(file));
  };

  const handleSignatureUpload = (e) => {
    const file = e.target.files[0];
    setSignature(file);
    setSignatureName(file.name);
  };

  const handleDeleteAccount = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      try {
        await deleteUser(user);
        setDeleteSuccess("Your account has been successfully deleted.");
      } catch (error) {
        setDeleteError("Failed to delete your account. Please try again later.");
      }
    }
  };


  return (
    <div className="p-4 flex flex-wrap">
      <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
        <h1 className="text-2xl font-semibold mb-4">Account Settings</h1>
        <div className="bg-white rounded-md shadow-md p-4 mb-4">
          {/* Profile Picture */}
          <div className="mb-4 flex items-center">
            <label htmlFor="profilePicture" className="block font-semibold mr-2">
              {profilePictureUrl ? (
                <img
                  src={profilePictureUrl}
                  alt="Profile"
                  className="h-40 w-40 rounded-full cursor-pointer border border-gray-300"
                />
              ) : (
                <UserIcon className="h-40 w-40 text-gray-500 rounded-full cursor-pointer border border-gray-300" />
              )}
              <input
                type="file"
                id="profilePicture"
                accept="image/*"
                onChange={handlePictureUpload}
                className="hidden"
              />
            </label>
          </div>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="fullName" className="block font-semibold">Full Name:</label>
            <input type="text" id="fullName" value={userDetails?.fullName || ''} readOnly className="border border-gray-300 text-black rounded-md px-3 py-2 w-full focus:outline-none" />
          </div>
          {/* Date of Birth */}
          <div className="mb-4">
            <label htmlFor="dateOfBirth" className="block font-semibold">Date of Birth:</label>
            <input type="text" id="dateOfBirth" value={userDetails?.dateOfBirth || ''} readOnly className="border border-gray-300 text-black rounded-md px-3 py-2 w-full focus:outline-none" />
          </div>
          {/* Contact Info */}
          <div className="mb-4">
            <label htmlFor="contactInfo" className="block font-semibold">Contact Info:</label>
            <input type="text" id="contactInfo" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} className="border border-gray-300 text-black  rounded-md px-3 py-2 w-full focus:outline-none" />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold">Email:</label>
            <input type="email" id="email" value={userEmail} readOnly className="border border-gray-300 text-black  rounded-md px-3 py-2 w-full focus:outline-none" />
          </div>
          {/* Signature Upload */}
          <div className="mb-4 flex items-center">
            <label htmlFor="signature" className="block font-semibold mr-2">Signature:</label>
            <label htmlFor="signature" className="cursor-pointer">
              <PlusCircleIcon className="h-10 w-10 rounded-md text-blue-500" />
              <input
                type="file"
                id="signature"
                accept="image/*"
                onChange={handleSignatureUpload}
                className="hidden"
              />
            </label>
            {signatureName && <span className="ml-2 text-black ">{signatureName}</span>}
          </div>
          {/* Update Button */}
          <button onClick={handleUpdate} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">Update</button>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
        <h1 className="text-2xl font-semibold mb-4">Address</h1>
        <div className="bg-white rounded-md shadow-md p-4 mb-4">
          {/* Residential Address */}
          <div className="mb-4">
            <label htmlFor="residentialAddress" className="block font-semibold">Residential Address:</label>
            <input type="text" id="residentialAddress" value={residentialAddress} onChange={(e) => setResidentialAddress(e.target.value)} className="border border-gray-300 text-black  rounded-md px-3 py-2 w-full focus:outline-none" />
          </div>
          {/* Occupation */}
          <div className="mb-4">
            <label htmlFor="occupation" className="block font-semibold">Occupation:</label>
            <input type="text" id="occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)} className="border border-gray-300 text-black  rounded-md px-3 py-2 w-full focus:outline-none" />
          </div>
          {/* Update Button */}
          <button onClick={handleUpdate} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">Update</button>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
        <h1 className="text-2xl font-semibold mb-4">Account Deletion</h1>
        <div className="bg-white rounded-md shadow-md p-4 mb-4">
          <p className="mb-4 text-black ">
            When you delete your account, you lose access to Front account services, and we permanently delete your personal data in 14 days.
            Make sure to empty your account before deletion process the bank will not be accounted for loss of money.
          </p>
          {deleteConfirmation ? (
            <div>
              <p className="text-red-500 mb-4 text-black ">Are you sure you want to delete your account?</p>
              <button onClick={handleDeleteAccount} className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600">Yes, Delete My Account</button>
              <button onClick={() => setDeleteConfirmation(false)} className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-600 ml-2">Cancel</button>
            </div>
          ) : (
            <button onClick={() => setDeleteConfirmation(true)} className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600">Delete My Account</button>
          )}
          {deleteError && <p className="text-red-500 mt-4">{deleteError}</p>}
          {deleteSuccess && <p className="text-green-500 mt-4">{deleteSuccess}</p>}
        </div>
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
    </div>
  );
}

export default Settings;