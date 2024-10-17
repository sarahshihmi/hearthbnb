// frontend/src/store/review.js
import { csrfFetch } from './csrf';

// Action Types
const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS';
const ADD_REVIEW = 'reviews/ADD_REVIEW';
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

// Action Creators
const loadReviews = (reviews) => ({
  type: LOAD_REVIEWS,
  reviews
});

const addReview = (review) => ({
  type: ADD_REVIEW,
  review
});

const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
});

// Thunk Action Creators

// Fetch reviews for a spot
export const fetchReviews = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}/reviews`);

  if (response.ok) {
    const { Reviews } = await response.json();
    dispatch(loadReviews(Reviews));
  }
};

// Post a new review
export const postReview = (spotId, reviewData) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
    method: 'POST',
    body: JSON.stringify(reviewData)
  });

  if (response.ok) {
    const review = await response.json();
    dispatch(addReview(review));
  }
};

// Delete a review
export const deleteReview = (reviewId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    dispatch(removeReview(reviewId));
  }
};

// Reviews Reducer
const initialState = { reviews: [] };

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REVIEWS:
      return { ...state, reviews: action.reviews };
    case ADD_REVIEW:
      return { ...state, reviews: [action.review, ...state.reviews] };
    case REMOVE_REVIEW:
      return { ...state, reviews: state.reviews.filter(review => review.id !== action.reviewId) };
    default:
      return state;
  }
};

export default reviewsReducer;
