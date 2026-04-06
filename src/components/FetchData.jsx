import React from 'react';
import { useState, useEffect } from 'react';

function FetchData() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
        setUsers(data);

      } catch (error) {
        console.error("error", error);
      }
    }
    fetchUsers();
  }, [])
  return (
    <>
      <h2>Fetch Data..</h2>
      <ul>
        {
          users.map((user)=>(
            <li>{user.phone}</li>
          ))
        }
      </ul>
    </> 

  )
}

export default FetchData