import Review from "./Review";
import ReviewForm from "./ReviewForm";
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import { SERVER_URL } from "../containers/BookContainer";

const Book = ({book}) => {

    const [reviews, setReviews] = useState(book.reviews)

    const reviewComponents = reviews.map((review) => {
        // return <li><em>{review.descriptiveReview}</em> - {review.reader.name}</li>
        return <Review key={review.id} review={review} />
    })

        // Post new review
        const postNewReview = (newReview) => {
            fetch(`${SERVER_URL}/reviews`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newReview),
            })
    
            .then((response) => response.json())
            .then((response) => {
                setReviews([...reviews, response]);
            });
        };

    return ( 
        <div className="book-card">

            <img src="https://cloudfront.penguin.co.in/wp-content/uploads/2023/01/9780670097838-196x300.jpg" alt="Book cover"/>
            <p>Title: {book.title}</p>
            <p>Author: {book.author.name}</p>
            <p>Genre: {book.genre}</p>
            <p>Age rating: {book.ageRating}</p>
            <h3>Reviews</h3>
            <ul>
                {reviewComponents}
            </ul>
            <ReviewForm postNewReview={postNewReview} bookId = {book.id} />
        </div>
    );
}
 
export default Book;