import { useDispatch } from 'react-redux';
import { useModal } from '../../../context/Modal';
import { deleteSpot } from '../../../store/spot';
import '../../Review/ConfirmDelete.css';
import { useState } from 'react';

const ConfirmDeleteSpot = ({ spotId }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [error, setError] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    dispatch(deleteSpot(spotId))
      .then(() => closeModal())
      .catch((err) => {
        console.error("Failed to delete the spot:", err);
        setError("Failed to delete the spot. Please try again.");
        setIsDeleting(false);
      });
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <div className="confirm-delete-container">
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to remove this spot from the listings?</p>
      {error && <p className="error-message">{error}</p>}
      <div className="confirm-delete-buttons">
        <button 
          className="delete-button" 
          onClick={handleDelete}
          disabled={isDeleting}
        >
          {isDeleting ? "Deleting..." : "Yes (Delete Spot)"}
        </button>
        <button className="cancel-button" onClick={handleCancel}>
          No (Keep Spot)
        </button>
      </div>
    </div>
  );
};

export default ConfirmDeleteSpot;
