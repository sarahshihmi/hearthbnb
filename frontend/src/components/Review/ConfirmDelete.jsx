// frontend/src/components/Review/ConfirmDelete.jsx
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal'; // Correct import path
import { deleteReview } from '../../store/review'; // Correct import path
import './ConfirmDelete.css'; // Optional: Add styles if needed
import { useState } from 'react';

const ConfirmDelete = ({ reviewId }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [error, setError] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    dispatch(deleteReview(reviewId))
      .then(() => closeModal())
      .catch((err) => {
        console.error("Failed to delete the review:", err);
        setError("Failed to delete the review. Please try again.");
        setIsDeleting(false);
      });
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <div className="confirm-delete-container">
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to delete this review?</p>
      {error && <p className="error-message">{error}</p>}
      <div className="confirm-delete-buttons">
        <button 
          className="delete-button" 
          onClick={handleDelete}
          disabled={isDeleting}
        >
          {isDeleting ? "Deleting..." : "Yes (Delete Review)"}
        </button>
        <button className="cancel-button" onClick={handleCancel}>
          No (Keep Review)
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
