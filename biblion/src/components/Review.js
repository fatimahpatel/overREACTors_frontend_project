
const Review = ({review}) => {

    return ( 
        <div>
            <li><em>{review.descriptiveReview}</em> - {review.reader.name}</li>
        </div>

                // return <li><em>{review.descriptiveReview}</em> - {review.reader.name}</li>
     );
}
 
export default Review;