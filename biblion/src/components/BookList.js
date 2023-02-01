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
        <h1>List of Books!</h1>
        <p>hello {user ? user.name : ""}</p>
        <hr />
        {bookComponents}
        </>

     );
}
 
export default BookList;