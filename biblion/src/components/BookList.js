import Book from "./Book";

const BookList = ({books}) => {

    const bookComponents = books.map(book => {
        return <Book key={book.id} book={book}/>
    })

    return (
        <>
        <h1>List of Books!</h1>
        <hr />
        {bookComponents}
        </>

     );
}
 
export default BookList;