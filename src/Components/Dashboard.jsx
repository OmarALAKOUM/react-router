import { useContext } from "react"
import { AuthContext } from '../Context/ContextAPI'

const Dashboard = () => {
  const { loading } = useContext(AuthContext);
  {loading ? <p>Loading...</p> : <p>Welcome to the Dashboard!</p>}
 
}

export default Dashboard;