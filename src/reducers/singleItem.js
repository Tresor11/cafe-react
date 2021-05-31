import {
  FETCH_ITEMS_ERROR,
  FETCH_SINGLE_PENDING,
  FETCH_SINGLE_SUCCESS,
} from "../actions/action-type";

const initialState = {
  pending: false,
  details: {},
  error: "",
};

const singleItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_SINGLE_SUCCESS:
      return {
        ...state,
        pending: false,
        details: action.payload.item,
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

export default singleItemReducer;
