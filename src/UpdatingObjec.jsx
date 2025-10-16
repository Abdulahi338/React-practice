import React, { useState } from 'react'

function UpdatingObjec() {
    let listUsers = {Name:"Ali",Age:20,Address:"Afgoye"};
    const [user , setUser] = useState(listUsers);
    const updateObj = ()=>{
        setUser({...user,Age:user.Age+1});
    }
  return (
    <div>
        <h1>UpdatingObjec</h1>
        <p>Name: {user.Name}, Age:{user.Age} , Adress: {user.Address}</p>
        <button onClick={updateObj}>Increase the Age</button>
    </div>
  )
}

export default UpdatingObjec