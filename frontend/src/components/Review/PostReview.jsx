// PostReview.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postReview } from '../../store/review';
import { useModal } from '../../context/Modal';

const PostReview = ({ spotId }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(0);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (stars === 0 || review.length < 10) {
      setErrors({
        review: "Review must be at least 10 characters long.",
        stars: "Please provide a star rating."
      });
      return;
    }

    // Corrected dispatch: pass spotId and reviewData separately
    dispatch(postReview(spotId, { review, stars }))
      .then(() => closeModal())
      .catch((err) => {
        const data = err.response?.data;
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <div className="post-review-modal">
      <h2>How was your stay?</h2>
      <form onSubmit={handleSubmit}>
        {errors.review && <p className="error">{errors.review}</p>}
        <textarea 
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Leave your review here..."
          required
        />
        {errors.stars && <p className="error">{errors.stars}</p>}
        <label htmlFor="stars">Stars</label>
        <input 
          id="stars"
          type="number" 
          value={stars} 
          onChange={(e) => setStars(Number(e.target.value))}
          min="1" 
          max="5"
          required
        />
        <button type="submit" disabled={review.length < 10 || stars === 0}>
          Submit Your Review
        </button>
      </form>
    </div>
  );
};

export default PostReview;
