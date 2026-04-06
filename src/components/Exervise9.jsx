import React from 'react'
import { useState, useEffect } from 'react'

function Exervise9() {
    const [input, setInput] = useState("");
    const [userData, setUserData] = useState(null);
    const search = async () => {
        if (!input) return;
        try {
            // Check this line specifically in your code:
            const response = await fetch(`https://api.github.com/users/${input}`);
            const data = await response.json();
            setUserData(data)

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <h2>Search githup users information</h2>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={search}>Search..</button>
            <div>
                {userData && (
                    <>
                        <h2>This is your information ...</h2>
                        <img src={userData.avatar_url} alt="profile" width="100"/>
                        <p><strong>Name :</strong> {userData.login}</p>
                        <p><strong>Bio :</strong> {userData.bio}</p>
                        <p><strong>Fllowers :</strong> {userData.followers}</p>
                        <p><strong>public Repos :</strong> {userData.public_repos}</p><br />
                    </>

                )}
            </div>
        </div>
    )
}

export default Exervise9