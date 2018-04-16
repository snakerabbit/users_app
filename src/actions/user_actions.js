import * as APIUtil from '../util/users_util';
export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export const fetchUsers = () => dispatch => {
  // let users = APIUtil.fetchUsers();
  // let results = users.result;
  // while (users.token) {
  //   users = APIUtil.fetchUsersWithToken(users.token);
  //   results.concat(users.result);
  // }
  // let usersWithDetail = results.map(userId =>{
  //   return APIUtil.fetchUserDetail(userId);
  // });
  // dispatch(receiveUsers(usersWithDetail));
  return APIUtil.fetchUsers().then(users => dispatch(receiveUsers(users)));
};
