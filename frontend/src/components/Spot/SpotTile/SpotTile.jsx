import './SpotTile.css';
import { useNavigate } from 'react-router-dom';

const SpotTile = ({ spot }) => {
  const navigate = useNavigate();

  // Select the preview image or the first image if available
  const previewImage = spot.SpotImages?.find(image => image.preview) || spot.SpotImages?.[0];

  const handleTileClick = () => {
    navigate(`/spots/${spot.id}`);  // Navigate to spot details
  };

  return (
    <div
      className="spot-tile"
      data-tooltip={spot.name}  // Tooltip text
      onClick={handleTileClick}  // Make entire tile clickable
    >
      {previewImage ? (
        <img src={previewImage.url} alt={spot.name} className="spot-image" />
      ) : (
        <div className="placeholder-image">No Image Available</div>  // Fallback if no image
      )}
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
