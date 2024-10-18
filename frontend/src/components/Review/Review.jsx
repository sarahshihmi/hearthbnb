// frontend/src/components/Review/Review.jsx
import './Review.css';
import OpenModalButton from '../OpenModalButton'; 
import ConfirmDelete from './ConfirmDelete';
import UpdateReview from './UpdateReview';

const ReviewsComponent = ({ reviews = [], user, isOwner, spotId }) => { // Default to empty array
  //const dispatch = useDispatch();

  const formatReviewDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="reviews-component">
      {/* Display reviews */}
      {reviews.length > 0 ? (
        <ul className="reviews-list">
          {reviews.map(review => (
            <li key={review.id} className="review-item">
              <div className="review-header">
                <strong>{review.User ? review.User.firstName : 'Unknown User'}</strong>
                <span>{formatReviewDate(review.createdAt)}</span>
              </div>
              <p>{review.review}</p>

              {/* Show Update and Delete buttons for reviews posted by the logged-in user */}
              {user?.id === review.userId && (
                <div className="review-actions">
                  {/* Update Button */}
                  <OpenModalButton 
                    buttonText="Update"
                    modalComponent={<UpdateReview review={review} spotId={spotId} />}
                    buttonClass="small-button update-button" // Add classes for styling
                  />

                  {/* Delete Button */}
                  <OpenModalButton 
                    buttonText="Delete"
                    modalComponent={<ConfirmDelete reviewId={review.id} />}
                    buttonClass="small-button delete-button" // Add classes for styling
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        !isOwner && user && (
          <p className="no-reviews-message">Be the first to post a review!</p>
        )
      )}
    </div>
  );
};

export default ReviewsComponent;
