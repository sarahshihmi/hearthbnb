// frontend/src/components/SpotTile/SpotTile.jsx
import './SpotTile.css';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const SpotTile = ({ spot }) => {
  const navigate = useNavigate();

  const handleTileClick = () => {
    navigate(`/spots/${spot.id}`);
  };

  return (
    <div className="spot-tile" onClick={handleTileClick}>
    {spot.previewImage ? (
        <img src={spot.previewImage} alt={spot.name} className="spot-image" />
    ) : (
        <div className="placeholder-image">No Image Available</div>
    )}
    
    <div className="spot-details">
        <div className="spot-row">
            <p className="spot-location-small">{`${spot.city}, ${spot.state}`}</p>
            <div className="spot-rating">
                <FaStar className="star-icon" /> 
                {spot.rating ? spot.rating.toFixed(1) : 'New'}
            </div>
        </div>
        <div className="spot-price">${spot.price} night</div>
    </div>
</div>
  );
};

export default SpotTile;
