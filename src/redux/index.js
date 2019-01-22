// @flow
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools";
import asyncRequestMiddleware from "../lib/asyncRequestMiddleware";
import rootReducer from "./RootReducer";

const store = composeWithDevTools(applyMiddleware(thunk, asyncRequestMiddleware))(createStore)(rootReducer);

export default store;
