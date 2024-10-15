const SpotTile = ({ spot }) => {
    return (
      <div className="spot-tile">
        <img src={spot.imageUrl} alt={spot.name} className="spot-image" />
        <div className="spot-details">
          <div className="spot-location">
            {spot.city}, {spot.state}
          </div>
          <div className="spot-rating">
            ★ {spot.rating}
          </div>
          <div className="spot-price">
            <strong>${spot.price}</strong> / night
          </div>
        </div>
      </div>
    );
  };
  
  export default SpotTile;