import { useState, useContext } from "react";
import { UserContext } from "../App";



const ReviewForm = ({postNewReview}) => {

    const [descriptiveReview, setDescriptiveReview] = useState("");
    const [starRating, setStarRating] = useState(null);
    const [bookId, setBookId] = useState(null);

    const [user, setUser] = useContext(UserContext);

    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     postNewReview({descriptiveReview, starRating, bookId});
    //     setDescriptiveReview("")
    //     setStarRating(null)
    //     setBookId(null);
    // }


    return ( 
        <form>
            <label>enter your review</label>
            <input type="text" maxlength="10"
            name="descriptiveReview" 
            onChange={(e) => setDescriptiveReview(e.target.value)} 
            value={descriptiveReview} />
        </form>
     );
}
 
export default ReviewForm;