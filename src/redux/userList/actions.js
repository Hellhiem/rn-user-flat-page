// @flow
import { type Dispatch } from "redux";
import { fetchUsers } from "../../lib/client";
import { USER_FETCH_REQUEST, USER_FETCH_SUCCESS, USER_FETCH_FAIL } from "./constants";

const fetchUsersAction = (itemsPerPage: number, page: number) => {
  return (dispatch: Dispatch<*>) => {
    return dispatch({
      types: [USER_FETCH_REQUEST, USER_FETCH_SUCCESS, USER_FETCH_FAIL],
      asyncRequest: {
        request: () => {
          return fetchUsers(itemsPerPage, page);
        }
      }
    });
  };
};

export { fetchUsersAction };
