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

const fetchItemsSuccess = playload => ({
  type: FETCH_ITEMS_SUCCESS,
  playload,
});

const fetchItemsError = playload => ({
  type: FETCH_ITEMS_ERROR,
  playload,
});

const fetchSingleItem = playload => ({
  type: FETCH_SINGLE_SUCCESS,
  playload,
});

const BASE_URL = 'https://cafe-react-api.herokuapp.com';

export {
  fetchItemsError,
  fetchItemsPending,
  fetchItemsSuccess,
  fetchSingleItem,
  BASE_URL,
};
