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
    <div className="spot-tile" 
    onClick={handleTileClick} 
    data-tooltip={spot.name}
    data-testid='spot-tile'
    >
    {spot.previewImage ? (
        <img src={spot.previewImage} alt={spot.name} className="spot-image" data-testid='spot-thumbnail-image' />
    ) : (
        <div className="placeholder-image">No Image Available</div>
    )}
    
    <div className="spot-details" data-testid='spot-link'>
        <div className="spot-row">
            <p className="spot-location-small" data-testid='spot-city'>{`${spot.city}, ${spot.state}`}</p>
            <div className="spot-rating" data-testid='spot-rating'>
                <FaStar className="star-icon" /> 
                {spot.avgRating ? parseFloat(spot.avgRating).toFixed(1) : 'New'}

            </div>
        </div>
        <div className="spot-price" data-testid='spot-price'>${spot.price} night</div>
    </div>
</div>
  );
};

export default SpotTile;
