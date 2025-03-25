import axios from 'axios';

const API_URL = 'http://localhost:4000/api/users';

export const getUsers = async () => {
  const token = localStorage.getItem('token');
  const response= await axios.get(API_URL,{
    headers: {
      Authorization: token,
    },
  });
  return response;
};

export const getUserById = async (id) => {
  const resp =  await axios.get(`${API_URL}/${id}`);
  return resp
};

export const createUser = async (userData) => {
  return await axios.post(API_URL, userData);
};

export const updateUser = async (id, userData) => {
  return await axios.put(`${API_URL}/${id}`, userData);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      Email: email,
      Password: password
    });
    const  token = response.data.token;
    localStorage.setItem('token', token);
    console.log('token:', response.data.token);
    return response.data;
  } catch (error) {
    console.error('Login error:', error.response ? error.response.data : error.message);
  }
};