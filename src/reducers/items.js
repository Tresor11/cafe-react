import {
  FETCH_ITEMS_ERROR,
  FETCH_ITEMS_PENDING,
  FETCH_ITEMS_SUCCESS,
} from './action-type';

const initialState = {
  pending: false,
  items: [],
  error: '',
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        pending: false,
        items: action.playload,
      };
    case FETCH_ITEMS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.playload,
      };
    default:
      return state;
  }
};

export default itemsReducer;