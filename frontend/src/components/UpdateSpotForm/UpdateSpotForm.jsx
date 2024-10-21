import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getSpotDetailsById, updateSpot } from '../../store/spot';
import '../CreateSpotForm/CreateSpotForm.css'; 

const UpdateSpotForm = () => {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const spotDetails = useSelector(state => state.spots.spotDetails);
  const [form, setForm] = useState({
    country: '',
    address: '',
    city: '',
    state: '',
    lat: '',
    lng: '',
    description: '',
    name: '',
    price: '',
    previewImageUrl: '',
    imageUrls: ['', '', '', ''],
  });
  const [errors, setErrors] = useState({});

  // Fetch spot details for prepopulation
  useEffect(() => {
    dispatch(getSpotDetailsById(spotId));
  }, [dispatch, spotId]);

  // Prepopulate form when spot details are available
  useEffect(() => {
    if (spotDetails && spotDetails.id === parseInt(spotId)) {
      setForm({
        country: spotDetails.country || '',
        address: spotDetails.address || '',
        city: spotDetails.city || '',
        state: spotDetails.state || '',
        lat: spotDetails.lat || '',
        lng: spotDetails.lng || '',
        description: spotDetails.description || '',
        name: spotDetails.name || '',
        price: spotDetails.price || '',
        previewImageUrl: spotDetails.SpotImages?.find(img => img.preview)?.url || '',
        imageUrls: spotDetails.SpotImages?.filter(img => !img.preview).map(img => img.url) || ['', '', '', ''],
      });
    }
  }, [spotDetails, spotId]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    // Form validation
    const validationErrors = {};
    if (!form.country) validationErrors.country = 'Country is required';
    if (!form.address) validationErrors.address = 'Address is required';
    if (!form.city) validationErrors.city = 'City is required';
    if (!form.state) validationErrors.state = 'State is required';
    if (!form.description || form.description.length < 30)
      validationErrors.description = 'Description needs a minimum of 30 characters';
    if (!form.name) validationErrors.name = 'Name is required';
    if (!form.price) validationErrors.price = 'Price is required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Prepare updated data
    const updatedSpotData = {
      country: form.country,
      address: form.address,
      city: form.city,
      state: form.state,
      lat: form.lat || null,
      lng: form.lng || null,
      name: form.name,
      description: form.description,
      price: form.price,
    };

    try {
      await dispatch(updateSpot(spotId, updatedSpotData));
      navigate(`/spots/${spotId}`);
    } catch (error) {
      console.error('Failed to update the spot:', error);
    }
  };

  return (
    <div className="create-spot-form-container" data-testid='update-spot-form'>
      <h1 data-testid='form-title'>Update your Spot</h1>
      <form onSubmit={handleSubmit}>
        {/* Location Section */}
        <hr className="separator" />
        <h2>Where is your place located?</h2>
        <p>Guests will only get your exact address once they booked a reservation.</p>
        
        {errors.country && <span className="error-message">{errors.country}</span>}
        <input name="country" placeholder="Country" value={form.country} onChange={handleInputChange} />

        {errors.address && <span className="error-message">{errors.address}</span>}
        <input name="address" placeholder="Street Address" value={form.address} onChange={handleInputChange} />

        {errors.city && <span className="error-message">{errors.city}</span>}
        {errors.state && <span className="error-message">{errors.state}</span>}
        <div className="input-row">
          <div className="input-group city-group">
            <input name="city" placeholder="City" value={form.city} onChange={handleInputChange} />
            <span className="comma">,</span>
          </div>
          <div className="input-group state-group">
            <input name="state" placeholder="State" value={form.state} onChange={handleInputChange} />
          </div>
        </div>

        {/* Latitude and Longitude */}
        <div className="input-row">
          <div className="input-group lat-group">
            <input name="lat" placeholder="Latitude (Optional)" value={form.lat} onChange={handleInputChange} />
            <span className="comma">,</span>
          </div>
          <div className="input-group lng-group">
            <input name="lng" placeholder="Longitude (Optional)" value={form.lng} onChange={handleInputChange} />
          </div>
        </div>

        {/* Description Section */}
        <hr className="separator" />
        <h2>Describe your place to guests</h2>
        <p>Mention the best features of your space, any special amentities like fast wifi or parking, and what you love about the neighborhood.</p>
        {errors.description && <span className="error-message">{errors.description}</span>}
        <textarea name="description" placeholder="Please write at least 30 characters" value={form.description} onChange={handleInputChange} />

        {/* Title Section */}
        <hr className="separator" />
        <h2>Create a title for your spot</h2>
        <p>Catch guests attention with a spot title that highlights what makes your place special.</p>
        {errors.name && <span className="error-message">{errors.name}</span>}
        <input name="name" placeholder="Name of your spot" value={form.name} onChange={handleInputChange} />

        {/* Price Section */}
        <hr className="separator" />
        <h2>Set a base price for your spot</h2>
        <p>Competitive pricing can help your listing stand out and rank higher in search results.</p>
        {errors.price && <span className="error-message">{errors.price}</span>}
        <div className="price-input-container">
          <span className="dollar-sign">$</span>
          <input
            type="number"
            name="price"
            placeholder="Price per night (USD)"
            value={form.price}
            onChange={handleInputChange}
          />
        </div>

        {/* Photos Section */}
        <hr className="separator" />
        <h2>Liven up your spot with photos</h2>
        <p>Submit a link to at least one photo to update your spot.</p>
        <input name="previewImageUrl" placeholder="Preview Image URL" value={form.previewImageUrl} onChange={handleInputChange} />

        {form.imageUrls.map((url, index) => (
          <div key={index} className="image-url-group">
            <input
              name={`imageUrls-${index}`}
              placeholder="Image URL"
              value={form.imageUrls[index]}
              onChange={(e) => {
                const newImageUrls = [...form.imageUrls];
                newImageUrls[index] = e.target.value;
                setForm({ ...form, imageUrls: newImageUrls });
              }}
            />
          </div>
        ))}

        <button type="submit">Update Spot</button>
      </form>
    </div>
  );
};

export default UpdateSpotForm;
