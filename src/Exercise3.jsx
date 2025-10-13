import React from 'react'




function UserCard({user,email}) {
  return (
    <div>
        <h1>surer name is : {user}</h1>
        <p>and your Email is : {email}</p>
    </div>
  )
}

export default UserCard