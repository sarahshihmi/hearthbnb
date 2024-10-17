// SpotDetails.jsx
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BookingComponent from '../../Booking';  
import ReviewsComponent from '../../Review';   
import { getSpotDetailsById } from '../../../store/spot';
import { fetchReviews } from '../../../store/review';
import OpenModalButton from '../../OpenModalButton'; 
import PostReview from '../../Review'; 
import './SpotDetails.css'; 

const SpotDetails = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const spot = useSelector(state => state.spots.spotDetails);
  const reviews = useSelector(state => state.reviews.reviews);
  const user = useSelector(state => state.session?.user);
  
  useEffect(() => {
    dispatch(getSpotDetailsById(id));
    dispatch(fetchReviews(id));
  }, [dispatch, id]);

  if (!spot || spot.id !== parseInt(id)) {
    return <div>Loading...</div>; 
  }

  const {
    name,
    city,
    state,
    country,
    description,
    Owner,
    SpotImages,
    price = 'N/A',
    // avgRating and numReviews are not destructured
  } = spot;

  const largeImage = SpotImages.find(img => img.preview === true) || SpotImages[0];
  const smallImages = SpotImages.filter(img => !img.preview).slice(0, 4);

  // Compute average rating from reviews
  const sumStars = reviews.reduce((sum, review) => sum + review.stars, 0);
  const avgRatingDisplay = reviews.length > 0 
    ? (sumStars / reviews.length).toFixed(1) 
    : 'New';

  const numReviews = reviews.length;

  const canPostReview = user && !reviews.some(review => review.userId === user.id) && user.id !== Owner.id;

  return (
    <div className="spot-details-container">
      <h1 className="spot-name">{name}</h1>
      <p className="spot-location">{city}, {state}, {country}</p>
      
      {/* Grid layout for images */}
      <div className="images-section">
        {largeImage && (
          <img src={largeImage.url} alt={`${name} Preview`} className="large-image" />
        )}
        <div className="small-images">
          {smallImages.map(img => (
            <img key={img.id} src={img.url} alt={`${name} Image ${img.id}`} className="small-image" />
          ))}
        </div>
      </div>

      {/* Separator Line */}
      <hr className="separator" />

      {/* Description and Booking side by side */}
      <div className="content-grid">
        <div className="description-section">
          <div className="host-info">
            <p>Hosted by {Owner.firstName} {Owner.lastName}</p>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>

        {/* Booking Module */}
        <div className="booking-section">
          <BookingComponent
            price={price}
            avgRating={avgRatingDisplay}  
            reviewCount={numReviews}
          />
        </div>
      </div>

      {/* Separator Line */}
      <hr className="separator" />

      <div className="reviews-section">
        <h2 className="reviews-heading">
          <span className="star-icon">★</span> {avgRatingDisplay} 
          {numReviews > 0 && (
            <>
              <span className="dot"> · </span>
              <span>{numReviews} {numReviews === 1 ? 'Review' : 'Reviews'}</span>
            </>
          )}
        </h2>

        {canPostReview && (
          <OpenModalButton 
            buttonText="Post Your Review" 
            modalComponent={<PostReview spotId={id} />}
          />
        )}

        {/* Display reviews */}
        <ReviewsComponent reviews={reviews} user={user} isOwner={user?.id === Owner.id} />
      </div>
    </div>
  );
};

export default SpotDetails;
