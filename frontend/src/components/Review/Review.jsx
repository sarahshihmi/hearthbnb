import './Review.css';

const ReviewsComponent = ({ reviews, user, isOwner }) => {

  const formatReviewDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="reviews-component">
      <h2 className="reviews-heading">
        ★ {reviews.length > 0 ? (reviews.reduce((sum, review) => sum + review.stars, 0) / reviews.length).toFixed(1) : 'New'}
        {reviews.length > 0 && (
          <>
            <span className="dot"> · </span>
            <span>{reviews.length} {reviews.length === 1 ? 'Review' : 'Reviews'}</span>
          </>
        )}
      </h2>

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
