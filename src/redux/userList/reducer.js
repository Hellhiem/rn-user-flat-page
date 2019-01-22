// @flow
import { USER_FETCH_REQUEST, USER_FETCH_SUCCESS, USER_FETCH_FAIL } from "./constants";

const initialState: UserStateType = {
  data: {
    data: [],
    page: 1
  },
  isStarted: false,
  isFetching: false
};

function users(state: UserStateType = initialState, action: Object) {
  switch (action.type) {
    case USER_FETCH_REQUEST:
      return {
        ...initialState,
        isStarted: true,
        isFetching: true
      };
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        isStarted: true,
        isFetching: false,
        data: action.response.data
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

export { users };
