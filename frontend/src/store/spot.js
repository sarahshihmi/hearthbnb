import { csrfFetch } from "./csrf";

const GET_SPOTS = 'spot/getSpots'

const getSpots = (payload) => {
    return {
        type: GET_SPOTS,
        payload
    }
}

export const getAllSpots = () => async (dispatch) => {
	const res = await csrfFetch('/api/spots');
	if (res.ok) {
		const data = await res.json();
		dispatch(getSpots(data.Spots));
		return data;
	}
};

const initialState = {
    spots: []  // Initial state is an empty array
  };
  
  const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_SPOTS:
        return {
          ...state,
          spots: action.payload  // Update the spots array with the fetched data
        };
      default:
        return state;  // Return the current state for any other action
    }
  };
  
  export default spotsReducer;