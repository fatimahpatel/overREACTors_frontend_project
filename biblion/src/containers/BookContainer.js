import {useState, useEffect} from 'react';
import BookList from '../components/BookList';

const SERVER_URL = "http://localhost:8080"

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
            setBooks(response)
            setFilteredBooks(response)
        })
    }, []);

    console.log(filteredBooks);

    
    //Filter Book title
    useEffect(() => {
        const foundBooks = books.filter((book) => {
            return book.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
            
        })
        setFilteredBooks(foundBooks);
    }, [query]) //query is the state that changes

    //Filter book author
    useEffect(() => {
        const foundAuthor = books.filter((book) => {
            return book.author.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
            
        })
        setFilteredBooks(foundAuthor);
    }, [query])


    function handleChange(event) {
        setQuery(event.target.value);
    }

    function handleFilter(event) {
        setFilterParam(event.target.value);
    }


    // const filterBooks = (searchTerm) => {
    //     const foundBooks = books.filter(book => {
    //       return book.genre.toLowerCase().includes(searchTerm.toLowerCase())
    //     })
    //     setFilteredBooks(foundBooks);
    //   }


    return (  
        <>
        <h1>Biblion</h1>
        <div className="dropdown">
        <select onChange={handleFilter}
                className="custom-select"
                aria-label="Filter Books By Genre">
                    <option value="All">Filter By Genre</option>
                    <option value="Romance">Romance</option>
        </select>
        </div>

        {/*Search bar*/}
        <div className="wrapper">
                    <div className="search-wrapper">
                        <label htmlFor="search-form">
                            <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search-input"
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