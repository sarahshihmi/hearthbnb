// PostReviewModal.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postReview } from '../../store/review';

const PostReviewModal = ({ spotId, closeModal }) => {
  const dispatch = useDispatch();
  const [review, setReview] = useState('');
  const [stars, setStars] = useState(0);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = { review, stars };
    try {
      await dispatch(postReview(spotId, newReview));  // Dispatch the postReview action
      closeModal();  // Close modal on success
    } catch (res) {
      const data = await res.json();
      if (data?.errors) {
        setErrors(data.errors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>How was your stay?</h2>
      {errors.review && <p>{errors.review}</p>}
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Leave your review here..."
        required
      />
      <label>
        Stars
        <input
          type="number"
          value={stars}
          onChange={(e) => setStars(e.target.value)}
          min="1"
          max="5"
          required
        />
      </label>
      <button type="submit" disabled={review.length < 10 || stars === 0}>
        Submit Your Review
      </button>
    </form>
  );
};

export default PostReviewModal;
