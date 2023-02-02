import { useContext } from "react";
import { UserContext } from "../App";
import Book from "./Book";

const BookList = ({books}) => {
    const [user] = useContext(UserContext);
    const bookComponents = books.map(book => {
        return <Book key={book.id} book={book}/>
    })

    return (
        <>
        <p>{user ? user.name : ""}</p>
        <h1>List of Books!</h1>

        <div className="book-wrapper">
        {bookComponents}
        </div>
        </>

     );
}
 
export default BookList;