// @flow

import React, { Component } from "react";
import styled from "styled-components";
import { OneLineItemWithImage, PageIndicator, EmptyListComponent } from "../../components";
import { languages } from "../../lib/languageService"; // I know that is not i18n :D. I made this static

type PropsType = $Exact<{
  currentPage: number,
  usersData: Array<UserDataType>,
  fetchUsers: (itemsPerPage: number, page: number) => void,
  isFetching: boolean,
  totalPages: number
}>;

const { en } = languages;

const PAGE_ITEMS = 5;

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;

const UserFlatList = styled.FlatList``;

const Loader = styled.ActivityIndicator`
  margin-top: 25px;
`;

class UserList extends Component<PropsType> {
  componentDidMount() {
    this.props.fetchUsers(PAGE_ITEMS, 1);
  }

  renderUserItem = ({ item }: { item: UserDataType }): React$Node => {
    return <OneLineItemWithImage imageSource={item.avatar} title={`${item.first_name} ${item.last_name}`} />;
  };

  renderEmptyListComponent = () => {
    return <EmptyListComponent noItemsText={en.usersListScreen.noUsers} />;
  };

  onEndReached = () => {
    const { currentPage, fetchUsers, totalPages } = this.props;

    if (currentPage === totalPages) {
      return null;
    }

    fetchUsers(PAGE_ITEMS, currentPage + 1);
  };

  onRefresh = () => {
    const { currentPage, fetchUsers, totalPages } = this.props;

    if (currentPage === totalPages) {
      return null;
    }

    fetchUsers(PAGE_ITEMS, currentPage);
  };

  render() {
    const { currentPage, usersData, isFetching } = this.props;

    return (
      <Container>
        <PageIndicator pageNumber={currentPage} indicatorTitle={en.usersListScreen.pageNumber} />
        {isFetching ? (
          <Loader size="large" color="grey" />
        ) : (
          <UserFlatList
            data={usersData}
            refreshing={isFetching}
            onRefresh={this.onRefresh}
            onEndReached={this.onEndReached}
            renderItem={this.renderUserItem}
            onEndReachedThreshold={0.1}
            keyExtractor={item => {
              return item.id.toString();
            }}
            ListEmptyComponent={this.renderEmptyListComponent}
          />
        )}
      </Container>
    );
  }
}

export default UserList;
