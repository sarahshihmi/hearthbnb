// frontend/src/components/SpotTile/SpotTile.jsx
import './SpotTile.css';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa'; // Optional: Using React Icons for better stars

const SpotTile = ({ spot }) => {
  const navigate = useNavigate();

  // Debugging: Check spot data
  if (spot.id === 1) {
    console.log(spot);
  }

  const handleTileClick = () => {
    navigate(`/spots/${spot.id}`);  // Navigate to spot details
  };

  return (
    <div
      className="spot-tile"
      data-tooltip={spot.name}  // Tooltip text
      onClick={handleTileClick}  // Make entire tile clickable
    >
      {spot.previewImage ? (
        <img src={spot.previewImage} alt={spot.name} className="spot-image" />
      ) : (
        <div className="placeholder-image">No Image Available</div>  // Fallback if no image
      )}
      <div className="spot-details">
        <h3 className="spot-title">{spot.name}</h3>
        <div className="location-rating">
          <p className="spot-location">{`${spot.city}, ${spot.state}`}</p>
          <div className="spot-rating">
            {/* Optional: Using React Icons for stars */}
            <FaStar className="star-icon" /> {spot.rating ? spot.rating.toFixed(1) : 'New'}
          </div>
        </div>
        <div className="spot-price">${spot.price}/night</div>
      </div>
    </div>
  );
};

export default SpotTile;
