import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';
import Image from "next/image";
import { Share_Tech_Mono } from "next/font/google";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
});

const VirtualCreditCard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const db = getDatabase();
          const userRef = ref(db, `users/${user.uid}`);
          const snapshot = await get(userRef);
          if (snapshot.exists()) {
            const userData = snapshot.val();
            // Check if the user has the role of 'user'
            if (userData.role === 'user') {
              setUserData(userData.additionalDetails);
            }
          }
        }
      } catch (error) {
        // console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return null;
  }

  return (
    <div className="p-4 w-full max-w-lg mx-auto md:mr-4 mt-4">
    <div
      className={`${shareTechMono.className} w-[425px] h-[270px] bg-gradient-to-tr rounded-2xl flex content-center items-center justify-center from-[#9C2CF3] to-[#3A49F9]`}
    >
      <div className="p-8 w-full h-full">
        <div className="relative w-full h-full">
        <div className="absolute right-4 top-4 text-white text-xl font-bold">Nexa Trust Bank</div>
          <Image
            className="absolute"
            alt=""
            src="/mastercard.svg"
            width={70}
            height={24}
            layout="fixed"
            objectFit="cover"
          />
          <Image
            className="absolute right-0 bottom-0 top-0 my-auto"
            alt=""
            src="/chip.svg"
            width={60}
            height={30}
            layout="fixed"
            objectFit="cover"
          />
          <div className="flex flex-col w-full h-full justify-end gap-2">
            <p className="text-2xl text-white">{userData.creditCardNumber}</p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg text-white uppercase">{userData.fullName}</p>
                <p className="text-sm text-white uppercase">CVV: {userData.cvv}</p>
              </div>
              <p className="text-lg text-white uppercase">Exp: {userData.expiryDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default VirtualCreditCard;

