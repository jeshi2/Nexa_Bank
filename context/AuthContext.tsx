import React, { 
    createContext, 
    useContext, 
    useState, 
    useEffect } from 'react';
import { auth } from '../firebase';

// Create a context for authentication
const AuthContext = createContext();

// Create a custom hook to use the context
export function useAuth() {
  return useContext(AuthContext);
}

// Create the AuthProvider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    // Add additional methods or user-specific data here
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}