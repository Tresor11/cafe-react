import {
  fetchSinglePending,
  fetchSingleItem,
  fetchItemsError,
  BASE_URL,
} from "./index";
import { showLoader } from "../helpers/index";

function fetchSingle(id, method = "GET") {
  return (dispatch) => {
    if (method !== "DELETE") {
      showLoader();
    }
    dispatch(fetchSinglePending());
    const requestOptions = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`${BASE_URL}/items/${id}`, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        if (method !== "DELETE") {
          showLoader();
        }
        dispatch(fetchSingleItem(res));
      })
      .catch((error) => {
        dispatch(fetchItemsError(error));
      });
  };
}
export default fetchSingle;
