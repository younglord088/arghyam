import React, { createContext, useState, useEffect } from 'react';

// Create and export the UserContext
export const UserContext = createContext();

// UserProvider component to wrap the app and provide user data
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [activeSessionsCount, setActiveSessionsCount] = useState(0);
  const [source, setSource] = useState("India Water Portal");

  useEffect(() => {
    // Fetch user data when component mounts
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://indiawaterportal-demo.madrid.quintype.io/api/auth/v1/users/me');
        const data = await response.json();
        if (data.user) {
          setUser(data.user);
          setActiveSessionsCount(data.activeSessionsCount);
          setSource(data.source);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, activeSessionsCount, source }}>
      {children}
    </UserContext.Provider>
  );
};
