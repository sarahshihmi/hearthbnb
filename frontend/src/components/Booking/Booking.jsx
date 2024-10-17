import './Booking.css';

const BookingComponent = ({ price, avgRating, reviewCount }) => {

  const handleReserveClick = () => {
    alert('Feature coming soon');
  };

  return (
    <div className="booking-component">
      <div className="booking-info">
        <div className="price-section">
          <span className="price">${price}</span> / night
        </div>
        <div className="review-summary">
          ★ {avgRating}  {/* avgRating is already formatted */}
          {reviewCount > 0 && (
            <>
              <span className="dot"> · </span>
              <span>{reviewCount} {reviewCount === 1 ? 'Review' : 'Reviews'}</span>
            </>
          )}
        </div>
      </div>
      <button className="reserve-button" onClick={handleReserveClick}>
        Reserve
      </button>
    </div>
  );
};

export default BookingComponent;