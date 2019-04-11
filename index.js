// @flow
/** @format */

import { AppRegistry } from "react-native";
import InitialConfigScreen from "./src/InitialConfigScreen";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => InitialConfigScreen);
