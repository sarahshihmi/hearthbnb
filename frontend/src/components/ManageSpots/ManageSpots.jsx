import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserSpots } from '../../store/spot';
import './ManageSpots.css';

const ManageSpots = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userSpots = useSelector(state => state.spots.userSpots);
  const user = useSelector(state => state.session?.user);

  useEffect(() => {
    if (user) {
        console.log('before fetchuserspots woooooooooot')
      dispatch(fetchUserSpots());
      console.log('after fetchuserspots woooooooooot')
    }
  }, [dispatch, user]);

  // No other API calls should be happening here that could be causing the unexpected request to /reviews

  if (!userSpots.length) {
    return (
      <div className="manage-spots-container">
        <h1>Manage Spots</h1>
        <button onClick={() => navigate('/spots/new')} className="create-spot-link">
          Create a New Spot
        </button>
      </div>
    );
  }

  return (
    <div className="manage-spots-container">
      <h1>Manage Spots</h1>
      {/* Rest of your component */}
    </div>
  );
};

export default ManageSpots;
