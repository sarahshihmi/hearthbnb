// frontend/src/components/ManageSpots/ManageSpots.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserSpots } from '../../store/spot';
import './ManageSpots.css';
import '../Spot/SpotTile/SpotTile.css'
import { FaStar } from 'react-icons/fa';
import OpenModalButton from '../OpenModalButton';
import ConfirmDeleteSpot from '../Spot/ConfirmDeleteSpot';

const ManageSpots = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userSpots = useSelector(state => state.spots.userSpots);
  const user = useSelector(state => state.session?.user);

  useEffect(() => {
    if (user) {
      dispatch(fetchUserSpots());
    }
  }, [dispatch, user]);

  const handleUpdateClick = (spotId) => {
    navigate(`/spots/${spotId}/edit`);
  };

  if (!userSpots.length) {
    return (
      <div className="manage-spots-container">
        <h1>Manage Spots</h1>
        <button onClick={() => navigate('/spots/new')} className="create-spot-link">
          Create a New Spot
        </button>
      </div>
    );
  }

  return (
    <div className="manage-spots-container">
      <h1>Manage Your Spots</h1>
      <button onClick={() => navigate('/spots/new')} className="create-spot-link">
        Create a New Spot
      </button>
      <div className="manage-spots-grid">
        {userSpots.map((spot) => (
          <div className="spot-tile" key={spot.id} data-tooltip={spot.name}>
            {spot.previewImage ? (
              <img src={spot.previewImage} alt={spot.name} className="spot-image" />
            ) : (
              <div className="placeholder-image">No Image Available</div>
            )}
            <div className="spot-details">
              <div className="spot-row">
                <p className="spot-location-small">{`${spot.city}, ${spot.state}`}</p>
                <div className="spot-rating">
                  <FaStar className="star-icon" /> {spot.avgRating ? parseFloat(spot.avgRating).toFixed(1) : 'New'}
                </div>
              </div>
              <div className="spot-price">${spot.price}/night</div>
            </div>
            <div className="spot-actions">
              <button onClick={() => handleUpdateClick(spot.id)} className="update-button">Update</button>
              <OpenModalButton
                buttonText="Delete"
                modalComponent={<ConfirmDeleteSpot spotId={spot.id} />}
                className="delete-button"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageSpots;
