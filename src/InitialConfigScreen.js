// @flow

import React from "react";
import { Provider } from "react-redux";
import store from "./redux";
import RootNavigator from "./RootNavigator";

const InitialConfigScreen = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default InitialConfigScreen;
