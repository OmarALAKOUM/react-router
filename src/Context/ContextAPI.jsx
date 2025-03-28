import { createContext, useState, useEffect } from "react";
import { getProfile } from "../API/UserAPI";
import { useNavigate } from 'react-router';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    loginid: "",
    email: "",
    firstname: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 
  
    const refreshProfile = async () => {
      try {
        setLoading(true);
        
        const profileData = await getProfile();
        if (profileData) {
          setProfile({
                loginid:profileData.ID,
                email: profileData.Email,
                firstname: profileData.FirstName,
              });
              navigate('/');
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    refreshProfile();
  }, []);
  const isAuthenticated = !!profile.firstname;
  return (
    <AuthContext.Provider
      value={{ profile, setProfile, isAuthenticated, loading, setLoading, refreshProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};
