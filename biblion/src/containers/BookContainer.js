import {useState, useEffect} from 'react';
import BookList from '../components/BookList';

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
        <>
        <BookList books={books}/>
        </>
    );
}
 
export default BookContainer;