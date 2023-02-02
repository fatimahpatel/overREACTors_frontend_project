import { useContext, useEffect, useState } from "react";
import { SERVER_URL } from "./BookContainer";
import { UserContext } from "../App";
import { createContext } from "react";
import { Button } from 'react-bootstrap';

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
        <div className="user-name-greeting">
        <div className="login"> 
        {user ? <div className="login-greeting"><p class="user-name">Welcome Back {user.name}!</p> <Button type="submit" className = "login-button" onClick={() => setUser(null)} variant="outline-light" >Logout</Button></div> : (
        <>
        <form onSubmit = {handleSubmit}>
            <input className = "input-login"
            type = "text"
            placeholder = "  Enter Name"
            value = {name}
            onChange = {(e) => setName(e.target.value)}/>
            <Button className = "login-button"
            type = "submit" variant="outline-light">Login
            </Button>
            </form>
            <p>{error}</p>
            </>
            )}
        </div>  
        </div>    
        </>
     );
}
 
export default HeaderContainer;