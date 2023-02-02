import { useState, useContext } from "react";
import { UserContext } from "../App";
import { Button } from 'react-bootstrap';



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
            <input 
            className = "form"
            type="text"
            placeholder="Enter Your Review" 
            name="descriptiveReview" 
            onChange={(e) => setDescriptiveReview(e.target.value)} 
            value={descriptiveReview} />
            <Button type="submit" variant="outline-secondary">Submit</Button>
        </form>
     );
}
 
export default ReviewForm;