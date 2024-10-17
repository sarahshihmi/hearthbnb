import './Review.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteReview } from '../../store/review'; // Redux action for deleting a review
import PostReview from './PostReview'; 

const ReviewsComponent = ({ reviews, user, isOwner, spotId }) => {
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(null); // Track which review's delete modal is open

  const formatReviewDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
  };

  const handleDelete = (reviewId) => {
    dispatch(deleteReview(reviewId)); // Delete review via redux action
    setShowDeleteModal(null); // Close modal after deletion
  };

  const hasPostedReview = reviews.some((review) => review.userId === user?.id);

  return (
    <div className="reviews-component">
      <h2 className="reviews-heading">
        ★ {reviews.length > 0 
            ? (reviews.reduce((sum, review) => sum + review.stars, 0) / reviews.length).toFixed(1) 
            : 'New'}
        {reviews.length > 0 && (
          <>
            <span className="dot"> · </span>
            <span>{reviews.length} {reviews.length === 1 ? 'Review' : 'Reviews'}</span>
          </>
        )}
      </h2>

      {/* Display "Post Your Review" Button if user hasn't posted a review */}
      {user && !isOwner && !hasPostedReview && (
        <PostReview spotId={spotId} />
      )}

      {/* Display reviews */}
      {reviews.length > 0 ? (
        <ul className="reviews-list">
          {reviews.map(review => (
            <li key={review.id} className="review-item">
              <div className="review-header">
                <strong>{review.User.firstName}</strong>
                <span>{formatReviewDate(review.createdAt)}</span>
              </div>
              <p>{review.review}</p>

              {/* Show delete button for reviews posted by the logged-in user */}
              {user?.id === review.userId && (
                <>
                  <button 
                    onClick={() => setShowDeleteModal(review.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                  
                  {/* Confirmation modal */}
                  {showDeleteModal === review.id && (
                    <div className="delete-confirmation-modal">
                      <p>Are you sure you want to delete this review?</p>
                      <button 
                        onClick={() => handleDelete(review.id)}
                        className="delete-confirmation-button"
                      >
                        Yes (Delete Review)
                      </button>
                      <button 
                        onClick={() => setShowDeleteModal(null)}
                        className="cancel-button"
                      >
                        No (Keep Review)
                      </button>
                    </div>
                  )}
                </>
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
