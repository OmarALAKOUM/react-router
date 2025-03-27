// import axios from 'axios';
// export const loginUser = async (email, password) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, {
//       Email: email,
//       Password: password
//     });
//     const  token = response.data.token;
//     localStorage.setItem('token', token);
//     console.log('token:', response.data.token);
//     return response.data;
//   } catch (error) {
//     console.error('Login error:', error.response ? error.response.data : error.message);
//   }
// };

// const API_URL = 'http://localhost:4000/api/users';

// export const getUsers = async () => {
//   const token = localStorage.getItem('token');
//   const response= await axios.get(API_URL,{
//     headers: {
//       Authorization: token,
//     },
//   });
//   return response;
// };

// export const getUserById = async (id) => {
//   const resp =  await axios.get(`${API_URL}/${id}`);
//   return resp
// };

// export const createUser = async (userData) => {
//   return await axios.post(API_URL, userData);
// };

// export const updateUser = async (id, userData) => {
//   return await axios.put(`${API_URL}/${id}`, userData);
// };

// export const deleteUser = async (id) => {
//   return await axios.delete(`${API_URL}/${id}`);
// };
import axiosInstance from "./Instance.jsx";

export const getUsers = async () => {
  return await axiosInstance.get("/users");
};

export const getUserById = async (id) => {
  return await axiosInstance.get(`/users/${id}`);
};

export const getProfile = async () => {
  try {
    const response = await axiosInstance.post("/users/token");
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching profile:",
      error.response?.data || error.message
    );
  }
};

export const createUser = async (userData) => {
  return await axiosInstance.post("/users", userData);
};

export const updateUser = async (id, userData) => {
  return await axiosInstance.put(`/users/${id}`, userData);
};

export const deleteUser = async (id) => {
  return await axiosInstance.delete(`/users/${id}`);
};

export const loginUser = async (email, password) => {
  try {
    const response = await axiosInstance.post("/users/login", {
      Email: email,
      Password: password,
    });

    const token = response.data.token;
    if (token) {
      localStorage.setItem("token", token);
      console.log("Token:", token);
    }

    return response.data;
  } catch (error) {
    console.error(
      "Login error:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
