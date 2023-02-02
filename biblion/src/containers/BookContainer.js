import {useState, useEffect} from 'react';
import BookList from '../components/BookList';
import ReviewForm from '../components/ReviewForm';
import { Button } from 'react-bootstrap';

export const SERVER_URL = "http://localhost:8080"

const BookContainer = () => {

    const [filteredBooks, setFilteredBooks] = useState([]);
    const [filterParam, setFilterParam] = useState(["All"]);
    const [query, setQuery] = useState("");

    //GET all books 
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch(`${SERVER_URL}/books`)
        .then(response => response.json())
        .then(response => {
            setBooks(response)
            setFilteredBooks(response)
        })
    }, []);



    useEffect(() => {
        fetch(`${SERVER_URL}/books?genre=${filterParam}`)
        .then(response => response.json())
        .then(response => {
            // setBooks(response)
            setFilteredBooks(response)
        })
    }, [filterParam]);


    //Filter Book title
    useEffect(() => {
        const foundBooks = books.filter((book) => {
            return book.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
            
        })
        setFilteredBooks(foundBooks);
    }, [query]) //query is the state that changes

    //Filter book author
    // useEffect(() => {
    //     const foundAuthor = books.filter((book) => {
    //         return book.author.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
            
    //     })
    //     setFilteredBooks(foundAuthor);
    // }, [query])


    function handleChange(event) {
        setQuery(event.target.value);
    }

    function handleFilter(event) {
        setFilterParam(event.target.value);
    }

    function handleClearButton() {
        setFilteredBooks(books);
    }

    const allGenres = books.map((book) => {
        // return <option key={book.id} value={book.id}>{book.genre}</option>
        return book.genre
    })

    const uniqueGenres = [...new Set(allGenres)];
    const genreOptions = uniqueGenres.map((genre) => {
        return <option key={genre}>{genre}</option>
    })

    return (  
        <>
        <div className="dropdown">
        <select onChange={handleFilter}
                className="form"
                aria-label="Filter Books By Genre">
                <option disabled-value="select-genre">Select a genre</option>
                {genreOptions}       
        </select>
        <Button onClick={handleClearButton} variant="outline-dark">clear</Button>
        </div>

        {/*Search bar*/}
        <div className="wrapper">
                    <div className="search-wrapper">
                        <label htmlFor="search-form">
                            <input
                                className = "form"
                                type="search"
                                name="search-form"
                                id="search-form"
                                placeholder="Search for..."
                                value={query}
                                onChange={handleChange}
                            />
                        </label>
                    </div></div>

        <BookList books={filteredBooks}/>

        </>
    );
}
 
export default BookContainer;