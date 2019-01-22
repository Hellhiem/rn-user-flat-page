// @flow

import React from "react";
import { Provider } from "react-redux";
import store from "./redux";
import UserList from "./screens/UsersList";

const InitialConfigScreen = () => {
  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  );
};

export default InitialConfigScreen;
