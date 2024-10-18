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
    if (!form.address) validationErrors.address = 'Street Address is required';
    if (!form.city) validationErrors.city = 'City is required';
    if (!form.state) validationErrors.state = 'State is required';
    if (!form.description || form.description.length < 30)
      validationErrors.description = 'Description needs a minimum of 30 characters';
    if (!form.name) validationErrors.name = 'Name is required';
    if (!form.price) validationErrors.price = 'Price is required';
    if (!form.previewImageUrl)
      validationErrors.previewImageUrl = 'Preview image is required';
    
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
      lat: form.lat || null,
      lng: form.lng || null,
      name: form.name,
      description: form.description,
      price: form.price,
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
        <h2>Where is your place located?</h2>
        <p>Guests will only get your exact address once they booked a reservation.</p>
        {errors.country && <span className="error-message">{errors.country}</span>}
        <input name="country" placeholder="Country" value={form.country} onChange={handleInputChange} />

        {errors.address && <span className="error-message">{errors.address}</span>}
        <input name="address" placeholder="Street Address" value={form.address} onChange={handleInputChange} />

        {errors.city && <span className="error-message">{errors.city}</span>}
        <input name="city" placeholder="City" value={form.city} onChange={handleInputChange} />

        {errors.state && <span className="error-message">{errors.state}</span>}
        <input name="state" placeholder="State" value={form.state} onChange={handleInputChange} />

        <input name="lat" placeholder="Latitude (Optional)" value={form.lat} onChange={handleInputChange} />
        <input name="lng" placeholder="Longitude (Optional)" value={form.lng} onChange={handleInputChange} />

        {/* Description Section */}
        <h2>Describe your place to guests</h2>
        <p>Mention the best features of your space...</p>
        {errors.description && <span className="error-message">{errors.description}</span>}
        <textarea name="description" placeholder="Please write at least 30 characters" value={form.description} onChange={handleInputChange} />

        {/* Title Section */}
        <h2>Create a title for your spot</h2>
        <p>Catch guests attention...</p>
        {errors.name && <span className="error-message">{errors.name}</span>}
        <input name="name" placeholder="Name of your spot" value={form.name} onChange={handleInputChange} />

        {/* Price Section */}
        <h2>Set a base price for your spot</h2>
        <p>Competitive pricing can help...</p>
        {errors.price && <span className="error-message">{errors.price}</span>}
        <input type="number" name="price" placeholder="Price per night (USD)" value={form.price} onChange={handleInputChange} />

        {/* Photos Section */}
        <h2>Liven up your spot with photos</h2>
        <p>Submit a link to at least one photo...</p>
        {errors.previewImageUrl && <span className="error-message">{errors.previewImageUrl}</span>}
        <input name="previewImageUrl" placeholder="Preview Image URL" value={form.previewImageUrl} onChange={handleInputChange} />

        {form.imageUrls.map((url, index) => (
          <input
            key={index}
            name={`imageUrls-${index}`}
            placeholder="Image URL"
            value={form.imageUrls[index]}
            onChange={(e) => {
              const newImageUrls = [...form.imageUrls];
              newImageUrls[index] = e.target.value;
              setForm({ ...form, imageUrls: newImageUrls });
            }}
          />
        ))}

        <button type="submit">Create Spot</button>
      </form>
    </div>
  );
};

export default CreateSpotForm;
