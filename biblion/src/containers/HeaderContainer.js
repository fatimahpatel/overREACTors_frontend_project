import { useContext, useEffect, useState } from "react";
import { SERVER_URL } from "./BookContainer";
import { UserContext } from "../App";
import { createContext } from "react";

const HeaderContainer = () => {

    const [user, setUser] = useContext(UserContext)

    const [name, setName] = useState("")
    const [error, setError] = useState("")
    const [readers, setReaders] = useState([])

    useEffect(() =>{
        fetch(`${SERVER_URL}/readers`)
        .then(response => response.json())
        .then(response => {
        setReaders(response);
        })
    }, [])


    const handleSubmit = (event) => {
        //event default to stop refreshing
        //make a useEffect that fetches data
        //check if user exists within data
        //if user exists, set user in the context
        //if user does not exist, return error
        event.preventDefault();
        setError("");
        const reader = readers.find(reader => {
            return reader.name === name;
        })
        console.log(reader);

        if (reader) {
            setUser(reader);
        }
        else{
            setError("Could not find user :(");
            setUser(null);
        }
    }

    return (
        <>
        {user ? <><p>Hi {user.name}</p> <button type="submit" onClick={() => setUser(null)}>Logout</button></> : (
        <div className="login"> 
        <form onSubmit = {handleSubmit}>
            <input className = "form"
            type = "text"
            placeholder = "enter name"
            value = {name}
            onChange = {(e) => setName(e.target.value)}/>
            <button className = "login-button"
            type = "submit">Login
            </button>
            </form>
            <p>{error}</p>
         </div>   
            )}
        </>
     );
}
 
export default HeaderContainer;