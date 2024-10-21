import { csrfFetch } from './csrf';


const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS';
const ADD_REVIEW = 'reviews/ADD_REVIEW';
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';
const UPDATE_REVIEW = 'reviews/UPDATE_REVIEWS'; 


const loadReviews = (reviews) => ({
  type: LOAD_REVIEWS,
  reviews,
});

const addReview = (review) => ({
  type: ADD_REVIEW,
  review,
});

const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId,
});

const updateReviewAction = (review) => ({
  type: UPDATE_REVIEW,
  review,
});


export const fetchReviews = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}/reviews`);

  if (response.ok) {
    const { Reviews } = await response.json();
    dispatch(loadReviews(Reviews));
  }
};


export const fetchUserReviews = () => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/current`); 
  
    if (response.ok) {
      const { Reviews } = await response.json();
      dispatch(loadReviews(Reviews));
    }
  };
  

export const postReview = (spotId, reviewData) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reviewData),
  });

  if (response.ok) {
    const review = await response.json();
    dispatch(addReview(review));
  }
};


export const deleteReview = (reviewId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    dispatch(removeReview(reviewId));
  }
};


export const updateReview = (reviewId, reviewData) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify(reviewData),
  });

  if (response.ok) {
    const updatedReview = await response.json();
    dispatch(updateReviewAction(updatedReview));
    return updatedReview; 
  } else {
    const errorData = await response.json();
    if (errorData.message) {
      throw new Error(errorData.message);
    } else {
      throw new Error('Failed to update review');
    }
  }
};


const initialState = { reviews: [] };

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REVIEWS:
      return { ...state, reviews: action.reviews };
    case ADD_REVIEW:
      return { ...state, reviews: [action.review, ...state.reviews] };
    case REMOVE_REVIEW:
      return { ...state, reviews: state.reviews.filter(review => review.id !== action.reviewId) };
    case UPDATE_REVIEW: 
      return {
        ...state,
        reviews: state.reviews.map(review =>
          review.id === action.review.id ? action.review : review
        ),
      };
    default:
      return state;
  }
};

export default reviewsReducer;
