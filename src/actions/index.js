/* eslint-disable camelcase */
import {
  FETCH_ITEMS_ERROR,
  FETCH_ITEMS_PENDING,
  FETCH_SINGLE_SUCCESS,
  FETCH_ITEMS_SUCCESS,
} from './action-type';

const fetchItemsPending = () => ({
  type:FETCH_ITEMS_PENDING,
});

const fetchItemsSuccess = payload => ({
  type: FETCH_ITEMS_SUCCESS,
  payload,
});

const fetchItemsError = payload => ({
  type: FETCH_ITEMS_ERROR,
  payload,
});

const fetchSingleItem = payload => ({
  type: FETCH_SINGLE_SUCCESS,
  payload,
});

const BASE_URL = 'https://cafe-react-api.herokuapp.com';

export {
  fetchItemsError,
  fetchItemsPending,
  fetchItemsSuccess,
  fetchSingleItem,
  BASE_URL,
};
