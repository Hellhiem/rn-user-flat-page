// @flow

import React, { Component } from "react";
import styled from "styled-components";
import { OneLineItemWithImage, PageIndicator } from "../../components";
import { languages } from "../../lib/languageService";

type PropsType = $Exact<{
  currentPage: number,
  usersData: Array<UserDataType>,
  fetchUsers: (itemsPerPage: number, page: number) => void
}>;

const { en } = languages;
const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;

const UserFlatList = styled.FlatList``;

class UserList extends Component<PropsType> {
  renderUserItem = ({ item }: { item: UserDataType }): React$Node => {
    return <OneLineItemWithImage imageSource={item.avatar} title={`${item.first_name} ${item.last_name}`} />;
  };

  renderListHeader = (): React$Node => {
    const { currentPage } = this.props;

    return <PageIndicator pageNumber={currentPage} indicatorTitle={en.usersListScreen.pageNumber} />;
  };

  componentDidMount() {
    this.props.fetchUsers(5, 1);
  }

  render() {
    const { usersData } = this.props;

    return (
      <Container>
        <UserFlatList data={usersData} renderItem={this.renderUserItem} ListHeaderComponent={this.renderListHeader} />
      </Container>
    );
  }
}

export default UserList;
