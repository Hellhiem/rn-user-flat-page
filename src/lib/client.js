// @flow
import axios from "react-native-axios";

const fetchUsers = (itemsPerPage: number, page: number) => {
  return axios
    .get(`https://reqres.in/api/users?per_page=${itemsPerPage}&page=${page}`, {})
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

export { fetchUsers };
