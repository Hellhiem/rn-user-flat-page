// @flow
import concat from "lodash/concat";
import { users, initialState } from "../userList/reducer";
import { USER_FETCH_REQUEST, USER_FETCH_SUCCESS, USER_FETCH_FAIL } from "../userList/constants";

describe("userList reducer test", () => {
  it("should return default state", () => {
    expect(users(undefined, {})).toEqual(initialState);
  });

  it("should handle USER_FETCH_REQUEST", () => {
    const action = {
      type: USER_FETCH_REQUEST
    };
    const previousState = {
      ...initialState
    };
    const expectedState = {
      ...previousState,
      isStarted: true,
      isFetching: true
    };

    expect(users(previousState, action)).toEqual(expectedState);
  });

  it("should handle USER_FETCH_SUCCESS", () => {
    const response = {
      data: {
        page: 1,
        total_pages: 3,
        data: [
          {
            id: 1,
            first_name: "George",
            last_name: "Bluth",
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
          },
          {
            id: 2,
            first_name: "Janet",
            last_name: "Weaver",
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
          }
        ]
      }
    };

    const action = {
      type: USER_FETCH_SUCCESS,
      response
    };

    const previousState = {
      ...initialState,
      isStarted: true,
      isFetching: false
    };

    const expectedState = {
      ...previousState,
      isFetching: false,
      data: {
        data: concat(initialState.data.data, response.data.data),
        page: action.response.data.page,
        total_pages: action.response.data.total_pages
      }
    };

    expect(users(previousState, action)).toEqual(expectedState);
  });

  it("should handle USER_FETCH_FAIL", () => {
    const action = {
      type: USER_FETCH_FAIL,
      error: "error"
    };

    const previousState = {
      ...initialState,
      isStarted: true,
      isFetching: true
    };

    const expectedState = {
      ...initialState,
      isStarted: true,
      error: "error"
    };

    expect(users(previousState, action)).toEqual(expectedState);
  });
});
