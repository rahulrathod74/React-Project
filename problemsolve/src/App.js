import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  async function fetchAndUpdateData() {
    try {
      const response = await axios.get("https://reqres.in/api/users");
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  return (
    <div className="App">
      <h1>List of users</h1>
      <div>
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt= ''/>
            <h2>{user.first_name} </h2>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
