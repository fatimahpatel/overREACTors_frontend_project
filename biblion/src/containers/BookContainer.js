import {useState, useEffect} from 'react';

const SERVER_URL = "http://localhost:8080"

const BookContainer = () => {

    //GET all books 
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch(`${SERVER_URL}/books`)
        .then(response => response.json())
        .then(response => setBooks(response))
    }, []);



    
    return (  
        <h1></h1>
    );
}
 
export default BookContainer;