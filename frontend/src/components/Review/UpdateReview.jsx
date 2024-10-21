import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateReview } from '../../store/review'; // Ensure this path is correct
import { useModal } from '../../context/Modal'; // Adjust the path based on your project structure
import './UpdateReview.css'; // Optional: for styling

const UpdateReview = ({ review }) => { // Accept spotName as a prop
    const dispatch = useDispatch();
    const { closeModal } = useModal(); // Access closeModal from context
    const [editedReview, setEditedReview] = useState(review.review);
    const [stars, setStars] = useState(review.stars);
    const [errors, setErrors] = useState({});
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Frontend Validation
      const newErrors = {};
      if (editedReview.length < 10) {
        newErrors.review = 'Review must be at least 10 characters long.';
      }
      if (stars < 1 || stars > 5) {
        newErrors.stars = 'Stars must be between 1 and 5.';
      }
  
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
  
      try {
        await dispatch(updateReview(review.id, { review: editedReview, stars }));
        closeModal(); // Close the modal after successful update
      } catch (err) {
        if (err.message) {
          setErrors({ backend: err.message });
        } else {
          setErrors({ backend: 'An unexpected error occurred.' });
        }
      }
    };

    // Helper function to handle star click
    const handleStarClick = (rating) => {
      setStars(rating);
    };
  
    return (
      <div className="update-review-modal">
        <div className="update-review-title">How was your stay?</div>
        <form onSubmit={handleSubmit}>
          {errors.backend && <p className="error">{errors.backend}</p>}
          <div className="form-group">
            {errors.review && <p className="error">{errors.review}</p>}
            <textarea
              value={editedReview}
              onChange={(e) => setEditedReview(e.target.value)}
              placeholder="Edit your review here..."
              required
            />
          </div>
          <div className="form-group">
            {errors.stars && <p className="error">{errors.stars}</p>}
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= stars ? "star selected" : "star"}
                  onClick={() => handleStarClick(star)}
                >
                  ★
                </span>
              ))}
              <span> stars</span>
            </div>
          </div>
          <button type="submit" className="submit-button full-width">
            Update Your Review
          </button>
        </form>
      </div>
    );
  };
  
  export default UpdateReview;
