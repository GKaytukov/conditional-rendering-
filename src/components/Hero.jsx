import React, { useState } from 'react' //#1

function Hero() {
    const [user, setUser] = useState() // #3 Because we are in an array destruction, a useState, the brackets b/c it assigning an array. Basically, React is telling us to name it.
    console.log({ user })
    const handleLogin = () => {
        setUser({ firstName: 'Todd', email: 'todd@bocacode.com', admin: true })
    }

    const handleLogout = () => {
        setUser() //Means set User undefined 
    }
    // User === exactly equal to undefined (falsely)
    // ! User === exactly equal to truthy (boolean)
    // !! User === exactly equal to false (boolean)
    // !!! User === exactly equal to false (boolean)

    if (!user) {
        //If !not user meaning falsely, not means give me the opposite 
        return <button onClick={handleLogin}>Login</button>
        //Use this function
    }

    return (                     //#1
    <> 
        <h1>Hello {user.firstName}</h1> 
        <button onClick={handleLogout}>Log out</button> 
    </>

    ) // //One element 
    //Now need to wrap it

}

export default Hero             //#1