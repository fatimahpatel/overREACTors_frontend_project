import { useState, useContext } from "react";
import { UserContext } from "../App";



const ReviewForm = ({postNewReview, bookId}) => {

    const [descriptiveReview, setDescriptiveReview] = useState("");
    const [starRating, setStarRating] = useState(null);

    const [user, setUser] = useContext(UserContext);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postNewReview({descriptiveReview, starRating, readerId:user.id, bookId});
        setDescriptiveReview("")
        setStarRating(null)
    }

    return ( 
        <form onSubmit={handleFormSubmit}>
            <label>enter your review</label>
            <input 
            className = "form"
            type="text" 
            name="descriptiveReview" 
            onChange={(e) => setDescriptiveReview(e.target.value)} 
            value={descriptiveReview} />
            <button type="submit">Submit</button>
        </form>
     );
}
 
export default ReviewForm;