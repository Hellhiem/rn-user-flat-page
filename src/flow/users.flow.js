// @flow
/* eslint-disable no-unused-vars  */
type UserType = $Exact<{
  id: number,
  first_name: string,
  last_name: string,
  avatar: string
}>;

type UserStateType = $Exact<{
  data: Array<UserType>,
  isStarted: boolean,
  isFetching: boolean
}>;
