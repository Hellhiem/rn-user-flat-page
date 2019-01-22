// @flow
/* eslint-disable no-unused-vars  */
type UserDataType = $Exact<{
  id: number,
  first_name: string,
  last_name: string,
  avatar: string
}>;

type UserResponseType = $Exact<{
  data: ?Array<UserDataType>,
  page: number,
  per_page?: number,
  total?: number,
  total_pages?: number
}>;
type UserStateType = $Exact<{
  data: UserResponseType,
  isStarted: boolean,
  isFetching: boolean,
  error: ?string
}>;
