// import React, { useState, useEffect } from 'react';
// import { createUser, updateUser } from '../API/UserAPI';
//  import { useNavigate, useParams } from 'react-router';
// const UserForm = ({ userToEdit,}) => {
//   const [formData, setFormData] = useState({
//     FirstName: '',
//     LastName: '',
//     Email: '',
//     Password: '',
//   });
//   const {id}= useParams()
// const navigate= useNavigate()
//   useEffect(() => {
//     if (userToEdit) {
//       setFormData({
//         FirstName: userToEdit.FirstName,
//         LastName: userToEdit.LastName,
//         Email: userToEdit.Email,
//         Password: '',
//       });
//     }
//   }, [userToEdit]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (userToEdit && userToEdit.ID) {
//       await updateUser(userToEdit.ID, formData);
//     } else {
//       await createUser(formData);
//     }

//     setFormData({ FirstName: '', LastName: '', Email: '', Password: '' });
//   };

//   return (
//     <div>
//       <h2>{userToEdit ? 'Edit User' : 'Create User'}</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="FirstName"
//           placeholder="First Name"
//           value={formData.FirstName}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="LastName"
//           placeholder="Last Name"
//           value={formData.LastName}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="Email"
//           placeholder="Email"
//           value={formData.Email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="Password"
//           placeholder="Password"
//           value={formData.Password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">{userToEdit ? 'Update' : 'Create'} User</button>
//         <button type="button" onClick={()=>navigate("/")}> Cancel </button>
//       </form>
//     </div>
//   );
// };

// export default UserForm;
import React, { useState, useEffect } from "react";
import { createUser, updateUser, getUserById } from "../API/UserAPI";
import { useNavigate, useParams } from "react-router";

const UserForm = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const userData = await getUserById(id);
          setFormData({
            FirstName: userData.data.FirstName,
            LastName: userData.data.LastName,
            Email: userData.data.Email,
            Password: "",
          });
        } catch (error) {
          if (error.response && error.response.status === 404) {
            navigate("*");
          }
        }
      };

      fetchUser();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateUser(id, formData);
    } else {
      await createUser(formData);
    }
    setFormData({ FirstName: "", LastName: "", Email: "", Password: "" });
    navigate(-1);
  };

  return (
    <div>
      <h2>{id ? "Edit User" : "Create User"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="FirstName"
          placeholder="First Name"
          value={formData.FirstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="LastName"
          placeholder="Last Name"
          value={formData.LastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="Email"
          placeholder="Email"
          value={formData.Email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="Password"
          placeholder="Password"
          value={formData.Password}
          onChange={handleChange}
          required
        />
        <button type="submit">{id ? "Update" : "Create"} User</button>
        <button type="button" onClick={() => navigate(-1)}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UserForm;
