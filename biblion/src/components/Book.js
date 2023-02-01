import Review from "./Review";

const Book = ({book}) => {
    const reviewComponents = book.reviews.map((review) => {
        // return <li><em>{review.descriptiveReview}</em> - {review.reader.name}</li>
        return <Review key={review.id} review={review} />
    })
    return ( 
        <div className="book">
            <p>Title: {book.title}</p>
            <p>Author: {book.author.name}</p>
            <p>Genre: {book.genre}</p>
            <p>Age rating: {book.ageRating}</p>
            <h3>Reviews</h3>
            <ul>
                {reviewComponents}
            </ul>
            <hr/>


        </div>
    );
}
 
export default Book;