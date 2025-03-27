import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [profile, setProfile] = useState({loginid:'', email: "", firstname: "" });
  const [loading, setLoading] = useState(false);
  const isAuthenticated = !!profile.firstname; 
  return (
    <AuthContext.Provider value={{ profile, setProfile,isAuthenticated ,loading, setLoading}}>
      {children}
    </AuthContext.Provider>
  );
};
