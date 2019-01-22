// @flow

import React, { Component } from "react";
import { View } from "react-native";

class UserList extends Component<Props> {
  componentDidMount() {
    this.props.fetchUsers(5, 1);
  }
  render() {
    console.log(this.props.usersData);
    return <View />;
  }
}

export default UserList;
