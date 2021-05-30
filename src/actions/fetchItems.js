import {
  fetchItemsPending, fetchItemsSuccess, fetchItemsError, BASE_URL,
} from './index';

import { FETCH_ITEMS_PENDING } from './action-type';

function fetchItems() {
  return dispatch => {
    dispatch(fetchItemsPending(FETCH_ITEMS_PENDING));
    fetch(`${BASE_URL}/items`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        console.group("fetchItems");
        console.log(res);
        dispatch(fetchItemsSuccess(res));
      })
      .catch(error => {
        dispatch(fetchItemsError(error));
      });
  };
}
export default fetchItems;