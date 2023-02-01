import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BookList from "../components/BookList";
import ReviewForm from "../components/ReviewForm";
import BookContainer from "./BookContainer";

import { createContext } from "react";

const HeaderContainer = () => {

    const readerContext = createContext();

    // GET request for userId

    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li> <Link to="/all-books">All Books</Link> </li>
                    <li> <Link to="/add-review">Add Review</Link> </li>
                </ul>
                <Routes>
                    <Route path="/all-books" element={<BookList books={books}/>} />
                    <Route path="/add-review" element={<ReviewForm addReview={addReview}/>} />
                </Routes>

            </div>
        </BrowserRouter>

     );
}
 
export default HeaderContainer;