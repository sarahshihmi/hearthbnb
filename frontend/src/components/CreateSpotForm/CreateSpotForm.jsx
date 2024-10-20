// frontend/src/components/CreateSpotForm/CreateSpotForm.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createSpot } from '../../store/spot';
import './CreateSpotForm.css';

const CreateSpotForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    // Validations
    const validationErrors = {};
    if (!form.country) validationErrors.country = 'Country is required';
    if (!form.address) validationErrors.address = 'Address is required';
    if (!form.city) validationErrors.city = 'City is required';
    if (!form.state) validationErrors.state = 'State is required';

    // Latitude Validation
    if (!form.lat) {
      validationErrors.lat = 'Latitude is required';
    } else {
      const lat = parseFloat(form.lat);
      if (isNaN(lat) || lat < -90 || lat > 90) {
        validationErrors.lat = 'Latitude needs to be between -90 and 90';
      }
    }

    // Longitude Validation
    if (!form.lng) {
      validationErrors.lng = 'Longitude is required';
    } else {
      const lng = parseFloat(form.lng);
      if (isNaN(lng) || lng < -180 || lng > 180) {
        validationErrors.lng = 'Longitude needs to be between -180 and 180';
      }
    }

    if (!form.description || form.description.length < 30)
      validationErrors.description = 'Description needs a minimum of 30 characters';
    if (!form.name) validationErrors.name = 'Name is required';
    if (!form.price) validationErrors.price = 'Price is required';
    if (!form.previewImageUrl)
      validationErrors.previewImageUrl = 'Preview image is required';

    // Image URL Validation
    const imageUrlPattern = /\.(jpeg|jpg|png)$/i;
    if (form.previewImageUrl && !imageUrlPattern.test(form.previewImageUrl)) {
      validationErrors.previewImageUrl = 'Image URL must end in .png, .jpg, or .jpeg';
    }

    form.imageUrls.forEach((url, index) => {
      if (url && !imageUrlPattern.test(url)) {
        validationErrors[`imageUrls-${index}`] = 'Image URL must end in .png, .jpg, or .jpeg';
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Prepare the data
    const spotData = {
      country: form.country,
      address: form.address,
      city: form.city,
      state: form.state,
      lat: parseFloat(form.lat),
      lng: parseFloat(form.lng),
      name: form.name,
      description: form.description,
      price: parseFloat(form.price),
    };

    try {
      const newSpot = await dispatch(createSpot(spotData));
      navigate(`/spots/${newSpot.id}`);
    } catch (error) {
      console.error('Failed to create a spot:', error);
    }
  };

  return (
    <div className="create-spot-form-container">
      <h1>Create a New Spot</h1>
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

        {errors.lat && <span className="error-message">{errors.lat}</span>}
        {errors.lng && <span className="error-message">{errors.lng}</span>}
        <div className="input-row">
          <div className="input-group lat-group">
            <input name="lat" placeholder="Latitude" value={form.lat} onChange={handleInputChange} />
            <span className="comma">,</span>
          </div>
          <div className="input-group lng-group">
            <input name="lng" placeholder="Longitude" value={form.lng} onChange={handleInputChange} />
          </div>
        </div>

        {/* Description Section */}
        <hr className="separator" />
        <h2>Describe your place to guests</h2>
        <p>Mention the best features of your space, any special amentities like
        fast wifi or parking, and what you love about the neighborhood.</p>
        {errors.description && <span className="error-message">{errors.description}</span>}
        <textarea name="description" placeholder="Please write at least 30 characters" value={form.description} onChange={handleInputChange} />

        {/* Title Section */}
        <hr className="separator" />
        <h2>Create a title for your spot</h2>
        <p>Catch guests attention with a spot title that highlights what makes
        your place special.</p>
        {errors.name && <span className="error-message">{errors.name}</span>}
        <input name="name" placeholder="Name of your spot" value={form.name} onChange={handleInputChange} />

        {/* Price Section */}
        <hr className="separator" />
        <h2>Set a base price for your spot</h2>
        <p>Competitive pricing can help your listing stand out and rank higher
        in search results.</p>
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
        <p>Submit a link to at least one photo to publish your spot.</p>
        {errors.previewImageUrl && <span className="error-message">{errors.previewImageUrl}</span>}
        <input name="previewImageUrl" placeholder="Preview Image URL" value={form.previewImageUrl} onChange={handleInputChange} />

        {form.imageUrls.map((url, index) => (
          <div key={index} className="image-url-group">
            {errors[`imageUrls-${index}`] && <span className="error-message">{errors[`imageUrls-${index}`]}</span>}
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

        <button type="submit">Create Spot</button>
      </form>
    </div>
  );
};

export default CreateSpotForm;
