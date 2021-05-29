/* eslint-disable camelcase */
import {
  FETCH_PRODUCTS_ERROR,
  FETCH_SINGLE_SUCCESS,
  FETCH_PRODUCTS_SUCCESS,
} from './action-type';

const fetchItemsPending = type => ({
  type,
});

const fetchItemsSuccess = playload => ({
  type: FETCH_PRODUCTS_SUCCESS,
  playload,
});

const fetchItemsError = playload => ({
  type: FETCH_PRODUCTS_ERROR,
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
