
const Book = ({book}) => {
    return ( 
        <div className="book">
            <p>Title: {book.title}</p>
            <p>Author: {book.author.name}</p>
            <p>Genre: {book.genre}</p>
            <p>Age rating: {book.ageRating}</p>
            <hr/>


        </div>
    );
}
 
export default Book;