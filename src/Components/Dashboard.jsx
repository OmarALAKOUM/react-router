import { useContext } from "react"
import { AuthContext } from '../Context/ContextAPI'

const Dashboard = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <p>Loading...</p>; 
  }

  return <h1>Welcome to the Dashboard!</h1>;
}

export default Dashboard;