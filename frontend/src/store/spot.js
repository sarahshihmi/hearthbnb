import { csrfFetch } from "./csrf";

const GET_SPOTS = 'spot/getSpots'
const GET_SPOT_DETAILS = 'spot/getSpotDetails'


const getSpots = (payload) => {
    return {
        type: GET_SPOTS,
        payload
    }
}

const getSpotDetails = (payload) => ({
    type: GET_SPOT_DETAILS,
    payload
  });


export const getAllSpots = () => async (dispatch) => {
	const res = await csrfFetch('/api/spots');
    
	if (res.ok) {
		const data = await res.json();
        console.log('Fetched Spots from API:', data.Spots); 
		dispatch(getSpots(data.Spots));
		return data;
	}
};

export const getSpotDetailsById = (spotId) => async (dispatch) => {
    try {
      const res = await csrfFetch(`/api/spots/${spotId}`);
      if (res.ok) {
        const data = await res.json();
        console.log('Fetched Spot Details from API:', data);  // Debugging
        dispatch(getSpotDetails(data));
        return data;
      } else if (res.status === 404) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Spot not found');
      } else {
        console.error('Failed to fetch spot details:', res.statusText);
        throw new Error('Failed to fetch spot details');
      }
    } catch (error) {
      console.error('Error fetching spot details:', error);
      throw error;
    }
  };


const initialState = {
    spots: [],  // Initial state is an empty array
    spotDetails: {}
  };
  
const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_SPOTS:
        return {
          ...state,
          spots: action.payload  // Update the spots array with the fetched data
        };
        case GET_SPOT_DETAILS:
            return {
              ...state,
              spotDetails: action.payload
            }
      default:
        return state;  // Return the current state for any other action
    }
  };
  
  export default spotsReducer;