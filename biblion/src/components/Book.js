
const Book = ({book}) => {
    const reviews = book.reviews.map((review) => {
        return <li><em>{review.descriptiveReview}</em> - {review.reader.name}</li>
    })
    return ( 
        <div className="book">
            <p>Title: {book.title}</p>
            <p>Author: {book.author.name}</p>
            <p>Genre: {book.genre}</p>
            <p>Age rating: {book.ageRating}</p>
            <ul>
                {reviews}
            </ul>
            <hr/>


        </div>
    );
}
 
export default Book;