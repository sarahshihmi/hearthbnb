import './SpotTile.css';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation

const SpotTile = ({ spot }) => {
  const navigate = useNavigate();  // useNavigate replaces useHistory

  const handleTileClick = () => {
    navigate(`/spots/${spot.id}`);  // Navigate to spot details
  };

  return (
    <div
      className="spot-tile"
      data-tooltip={spot.name}  // Tooltip text
      onClick={handleTileClick}  // Make entire tile clickable
    >
      <img src={spot.imageUrl} alt={spot.name} />
      <div className="spot-details">
        <h3>{spot.name}</h3>
        <p>{spot.city}, {spot.state}</p>
        <div className="spot-price">${spot.price}/night</div>
        <div className="spot-rating">★ {spot.rating}</div>
      </div>
    </div>
  );
};

export default SpotTile;
