// @flow
import { createStackNavigator, createAppContainer } from "react-navigation";
import UserList from "./screens/UsersList";
import { languages } from "./lib/languageService"; // I know that is not i18n :D. I made this static

const { en } = languages;

const RootNavigator = createStackNavigator({
  UserList: {
    screen: UserList,
    navigationOptions: {
      title: en.usersListScreen.title,
      headerStyle: {
        backgroundColor: "#6b52ae"
      }
    }
  }
});

export default createAppContainer(RootNavigator);
