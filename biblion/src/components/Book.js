import Review from "./Review";
import ReviewForm from "./ReviewForm";
import "bootstrap/dist/css/bootstrap.min.css"

const Book = ({book}) => {
    const reviewComponents = book.reviews.map((review) => {
        // return <li><em>{review.descriptiveReview}</em> - {review.reader.name}</li>
        return <Review key={review.id} review={review} />
    })
    return ( 
        <div className="book-card">
            <p>Title: {book.title}</p>
            <p>Author: {book.author.name}</p>
            <p>Genre: {book.genre}</p>
            <p>Age rating: {book.ageRating}</p>
            <h3>Reviews</h3>
            <ul>
                {reviewComponents}
            </ul>
            <ReviewForm />
        </div>
    );
}
 
export default Book;