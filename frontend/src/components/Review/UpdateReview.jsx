// frontend/src/components/Review/UpdateReview.jsx

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateReview } from '../../store/review'; // Ensure this path is correct
import { useModal } from '../../context/Modal'; // Adjust the path based on your project structure
import './UpdateReview.css'; // Optional: for styling


const UpdateReview = ({ review }) => {
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
  
    return (
      <div className="update-review-modal">
        <h2>Edit Your Review</h2>
        <form onSubmit={handleSubmit}>
          {errors.backend && <p className="error">{errors.backend}</p>}
          <div className="form-group">
            <label htmlFor="review">Review</label>
            {errors.review && <p className="error">{errors.review}</p>}
            <textarea
              id="review"
              value={editedReview}
              onChange={(e) => setEditedReview(e.target.value)}
              placeholder="Edit your review here..."
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="stars">Stars</label>
            {errors.stars && <p className="error">{errors.stars}</p>}
            <input
              id="stars"
              type="number"
              value={stars}
              onChange={(e) => setStars(Number(e.target.value))}
              min="1"
              max="5"
              required
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="submit-button">
              Update Your Review
            </button>
            <button type="button" className="cancel-button" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default UpdateReview;
  