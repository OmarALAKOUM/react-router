import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { getUsers, deleteUser } from "../API/UserAPI";
import { Link, useNavigate } from "react-router";
//{ onEdit }

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users", error);
      if (error.response && error.response.status === 401) {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    navigate("/Register", { state: { user } });
  };
  // const handleEdit = (userId) => {
  //   // Navigate to the UserForm with the user's ID
  //   navigate(`/users/${userId}`);
  // };
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.ID !== id));
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  return (
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.ID}>
              <td>{user.ID}</td>
              <td>{user.FirstName}</td>
              <td>{user.LastName}</td>
              <td>{user.Email}</td>
              <td>
                {/* <FaEdit onClick={() =>  handleEdit(user)} style={{ cursor: 'pointer', marginRight: '10px' }} /> */}
                <Link to={`/dashboard/users/${user.ID}`}>
                  <FaEdit style={{ cursor: "pointer", marginRight: "10px" }} />
                </Link>
                <FaTrash
                  onClick={() => handleDelete(user.ID)}
                  style={{ cursor: "pointer" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
