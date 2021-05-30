import {
  fetchSinglePending, fetchSingleItem, fetchItemsError, BASE_URL,
} from './index';

function fetchSingle(id, method="GET") {
  return dispatch => {
    dispatch(fetchSinglePending());
    const requestOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch(`${BASE_URL}/items/${id}`, requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }


        dispatch(fetchSingleItem(res));
      })
      .catch(error => {
        dispatch(fetchItemsError(error));
      });
  };
}
export default fetchSingle;