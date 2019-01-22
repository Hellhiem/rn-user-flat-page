// @flow
import { connect } from "react-redux";
import { compose } from "redux";
import { fetchUsersAction } from "../../redux/userList/actions";
import UserList from "./UsersList.component";

const mapStateToProps = ({ users }) => {
  return {
    usersData: users.data,
    isFetching: users.isFetching,
    isStarted: users.isStarted
  };
};

const mapDispatchToProps = {
  fetchUsers: fetchUsersAction
};

const UserListContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(UserList);

export default UserListContainer;
