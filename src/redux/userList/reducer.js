// @flow
import concat from "lodash/concat";
import uniqBy from "lodash/uniqBy";
import { USER_FETCH_REQUEST, USER_FETCH_SUCCESS, USER_FETCH_FAIL } from "./constants";

const initialState: UserStateType = {
  data: {
    data: [],
    page: 0
  },
  isStarted: false,
  isFetching: false,
  error: null
};

function users(state: UserStateType = initialState, action: Object) {
  switch (action.type) {
    case USER_FETCH_REQUEST:
      return {
        ...state,
        isStarted: true,
        isFetching: true
      };
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        isStarted: true,
        isFetching: false,
        data: {
          data: uniqBy(concat(state.data.data, action.response.data.data), "id"),
          page: action.response.data.page,
          total_pages: action.response.data.total_pages
        }
      };
    case USER_FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

export { users, initialState };
