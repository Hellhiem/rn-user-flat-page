// @flow

import React, { Component } from "react";
import styled from "styled-components";
import { OneLineItemWithImage, PageIndicator, EmptyListComponent } from "../../components";
import { languages } from "../../lib/languageService"; // I know that is not i18n :D. I made this static

type PropsType = $Exact<{
  currentPage: number,
  usersData: Array<UserDataType>,
  fetchUsers: (itemsPerPage: number, page: number) => void,
  isFetching: boolean
}>;

const { en } = languages;

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
    this.props.fetchUsers(5, 1);
  }

  renderUserItem = ({ item }: { item: UserDataType }): React$Node => {
    return <OneLineItemWithImage imageSource={item.avatar} title={`${item.first_name} ${item.last_name}`} />;
  };

  renderEmptyListComponent = () => {
    return <EmptyListComponent noItemsText={en.usersListScreen.noUsers} />;
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
            renderItem={this.renderUserItem}
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
