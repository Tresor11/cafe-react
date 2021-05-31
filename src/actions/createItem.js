import { fetchItemsPending, BASE_URL } from "./index";
// import { inputValidation, loadingIcon } from '../helper/index';
import { CREATE_ITEM_PENDING } from "./action-type";
import { showLoader } from "../helpers/index";

function createItem(data, callBack) {
  return (dispatch) => {
    showLoader();
    dispatch(fetchItemsPending(CREATE_ITEM_PENDING));
    const event = new FormData();
    for (const name in data) {
      event.append(name, data[name]);
    }
    const requestOptions = {
      method: "POST",
      body: event,
    };
    fetch(`${BASE_URL}/items`, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        if (res.id === undefined) {
          showLoader();
        } else {
          showLoader();
          callBack();
        }
      })
      .catch((error) => error);
  };
}

export default createItem;
