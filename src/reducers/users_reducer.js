import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return {users: action.users};
    default:
      return state;
  }
};

export default UsersReducer;
