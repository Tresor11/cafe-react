// import { inputValidation, loadingIcon } from '../helper/index';
import {
  fetchSinglePending, BASE_URL,
} from './index';

function editItem(data,id, callBack) {
  return dispatch => {
    // loadingIcon();
    dispatch(fetchSinglePending());
    const event = new FormData();
    for (const name in data) {
      event.append(name, data[name]);
    }
    const requestOptions = {
      method: 'PUT',
      body: event,
    };
    fetch(`${BASE_URL}/items/${id}`, requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        if (res.id === undefined) {
          // inputValidation(res);
          // loadingIcon();
        } else {
          callBack();
        }
      })
      .catch(error => error);
  };
}

export default editItem;