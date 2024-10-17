import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal'; // Assuming you have a modal context
import { deleteReview } from '../../store/review'; // Assuming you have a deleteReview action in your review store
import './ConfirmDelete.css'; // Optional, add styles for the modal

const ConfirmDelete = ({ reviewId }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleDelete = () => {
    dispatch(deleteReview(reviewId))
      .then(() => closeModal());
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <div className="confirm-delete-modal">
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to delete this review?</p>
      <div className="modal-buttons">
        <button className="delete-button" onClick={handleDelete}>
          Yes (Delete Review)
        </button>
        <button className="cancel-button" onClick={handleCancel}>
          No (Keep Review)
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
