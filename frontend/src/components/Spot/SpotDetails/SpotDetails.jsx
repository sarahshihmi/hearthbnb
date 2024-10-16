import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSpotDetailsById } from '../../../store/spot';
import './SpotDetails.css'; 

const SpotDetails = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  

  const spot = useSelector(state => state.spots.spotDetails);
  
  
  useEffect(() => {
    dispatch(getSpotDetailsById(id))
      .catch(err => {
       
        console.error('Failed to fetch spot details:', err);
      });
  }, [dispatch, id]);

  if (!spot || spot.id !== parseInt(id)) {
    return <div>Loading...</div>; 
  }


  const { name, city, state, country, description, Owner, SpotImages } = spot;
  

  const largeImage = SpotImages.find(img => img.preview === true) || SpotImages[0];
  const smallImages = SpotImages.filter(img => !img.preview).slice(0, 4);

  return (
    <div className="spot-details-container">
      <h1 className="spot-name">{name}</h1>
      <p className="spot-location">{city}, {state}, {country}</p>
      
      {/* Images Section */}
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
      
      {/* Host Information */}
      <div className="host-info">
        <p>Hosted by {Owner.firstName} {Owner.lastName}</p>
      </div>
      
      {/* Description */}
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SpotDetails;
