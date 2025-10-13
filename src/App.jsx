import React from 'react'

import './App.css'
import Exercise1 from './Exercise1';
import Blog from './Exercise2';
import UserCard from './Exercise3';


function App() {
  const userName = "ALi";
  const email = "azam@gmail.com";

  return (
    <>
    {/* <Exercise1/>
    <Blog/> */}
    <UserCard 
    user ={userName}
    email ={email}
    />
     <UserCard 
    user ={"Yacqub"}
    email ={"Yacqub12@gmail.com"}
    />
     <UserCard 
    user ="Osman"
    email ={"Osman@gmail.com"}
    />
     <UserCard 
    user ={"Moha"}
    email ={"mo@gmail.com"}
    />
     <UserCard 
    user ={"Asma"}
    email ={"asma@gmail.com"}
    />
     <UserCard 
    user ={"Sumayo"}
    email ={"sumayo@gmail.com"}
    />

    </>
  )
}

export default App
