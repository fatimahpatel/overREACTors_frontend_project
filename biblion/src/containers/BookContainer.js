import {useState, useEffect} from 'react';
import BookList from '../components/BookList';
import Search from '../components/Search';

const SERVER_URL = "http://localhost:8080"

const BookContainer = () => {

    //GET all books 
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch(`${SERVER_URL}/books`)
        .then(response => response.json())
        .then(response => setBooks(response))
    }, []);
    
    //Filter books
    const filterBooks = (searchTerm) => {
        const foundBooks = books.filter(book => {
          return book.genre.toLowerCase().includes(searchTerm.toLowerCase())
        })
        setFilteredBooks(foundBooks);
      }

    //Search bar and dropdown 
    const [searchParam] = useState(["author", "genre", "title"]);
    const [filteredBooks, setFilteredBooks] = useState();
    const [filterParam, setFilterParam] = useState(["All"]);
    const [q, setQ] = useState("");

    function search(books) {
        return books.filter((book) => {
            if (book.genre == filterParam) {
                return searchParam.some((newBook) => {
                    return (
                        book[newBook]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            } else if (filterParam == "All") {
                return searchParam.some((newBook) => {
                    return (
                        book[newBook]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        });
    }


    return (  
        <>
        <h1>Biblion</h1>

        <div className="dropdown">
        <select onChange={(e) => {
                setFilterParam(e.target.value);
                    }}
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
                                value={q}
                                /*
                                // set the value of our useState q
                                //  anytime the user types in the search box
                                */
                                onChange={(e) => setQ(e.target.value)}
                            />
                        </label>
                    </div></div>

        <Search filterBooks={filterBooks} />

        <BookList books={books}/>

        </>
    );
}
 
export default BookContainer;