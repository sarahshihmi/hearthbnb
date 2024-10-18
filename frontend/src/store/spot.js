import { csrfFetch } from "./csrf";

const GET_SPOTS = 'spot/getSpots';
const GET_SPOT_DETAILS = 'spot/getSpotDetails';
const GET_USER_SPOTS = 'spot/getUserSpots';
const PUT_SPOT = 'spot/putSpot';
const DELETE_SPOT = 'spot/deleteSpot';

// Action Creators
const getSpots = (payload) => {
    return {
        type: GET_SPOTS,
        payload
    };
};

const getSpotDetails = (payload) => ({
    type: GET_SPOT_DETAILS,
    payload
});

const getUserSpots = (payload) => ({
    type: GET_USER_SPOTS,
    payload,
});

const putSpot = (payload) => ({
    type: PUT_SPOT,
    payload
});

const removeSpot = (spotId) => ({
    type: DELETE_SPOT,
    spotId
});

// Thunk Action Creators
export const getAllSpots = () => async (dispatch) => {
    const res = await csrfFetch('/api/spots');
    
    if (res.ok) {
        const data = await res.json();
        dispatch(getSpots(data.Spots));
        return data;
    }
};

export const getSpotDetailsById = (spotId) => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/spots/${spotId}`);
        if (res.ok) {
            const data = await res.json();
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

export const createSpot = (spotData) => async (dispatch) => {
    const res = await csrfFetch('/api/spots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spotData),
    });
  
    if (res.ok) {
        const newSpot = await res.json();
        dispatch(getSpotDetails(newSpot));
        return newSpot;
    } else {
        const error = await res.json();
        throw new Error(error.message || 'Failed to create spot');
    }
};

export const updateSpot = (spotId, updatedSpotData) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedSpotData),
    });
  
    if (res.ok) {
        const updatedSpot = await res.json();
        dispatch(putSpot(updatedSpot));
        return updatedSpot;
    } else {
        const error = await res.json();
        throw new Error(error.message || 'Failed to update spot');
    }
};

export const deleteSpot = (spotId) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'DELETE',
    });
  
    if (res.ok) {
        dispatch(removeSpot(spotId));
    } else {
        const error = await res.json();
        throw new Error(error.message || 'Failed to delete spot');
    }
};
  
export const fetchUserSpots = () => async (dispatch) => {
    const res = await csrfFetch('/api/spots/current');
  
    if (res.ok) {
        const data = await res.json();
        dispatch(getUserSpots(data.Spots)); // Make sure only spots data is dispatched
        return data;
    } else {
        const error = await res.json();
        throw new Error(error.message || 'Failed to fetch user spots');
    }
};

// Initial State
const initialState = {
    spots: [],  // Initial state is an empty array
    spotDetails: {},
    userSpots: []
};
  
// Reducer
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
            };
        case GET_USER_SPOTS:
            return {
                ...state,
                userSpots: action.payload,
            };
        case PUT_SPOT:
            return {
                ...state,
                spotDetails: action.payload,
                userSpots: state.userSpots.map(spot =>
                    spot.id === action.payload.id ? action.payload : spot
                ),
                spots: state.spots.map(spot =>
                    spot.id === action.payload.id ? action.payload : spot
                ),
            };
        case DELETE_SPOT:
            return {
                ...state,
                userSpots: state.userSpots.filter(spot => spot.id !== action.spotId),
                spots: state.spots.filter(spot => spot.id !== action.spotId),
            };
        default:
            return state;  // Return the current state for any other action
    }
};
  
export default spotsReducer;
