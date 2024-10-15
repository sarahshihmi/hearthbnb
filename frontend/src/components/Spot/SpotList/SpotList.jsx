import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SpotTile from '../SpotTile/SpotTile'; 
import { getAllSpots } from '../../../store/spot';
import './SpotList.css'; 

const SpotList = () => {
  const dispatch = useDispatch();
  const spots = useSelector(state => state.spots.spots); 

  useEffect(() => {
    dispatch(getAllSpots());  
  }, [dispatch]);

  return (
    <div className="spots-container">
    {spots && spots.length > 0 ? (
      spots.map(spot => (
        <SpotTile key={spot.id} spot={spot} />
      ))
    ) : (
      <p>No spots available.</p>  // Handle empty state
    )}
    </div>
  );
};

export default SpotList;
