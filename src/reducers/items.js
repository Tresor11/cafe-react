import {
  FETCH_ITEMS_ERROR,
  FETCH_SINGLE_PENDING,
  FETCH_ITEMS_SUCCESS,
} from "../actions/action-type";

const initialState = {
  pending: false,
  items: [],
  error: "",
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        pending: false,
        items: action.payload,
      };
    case FETCH_ITEMS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default itemsReducer;
