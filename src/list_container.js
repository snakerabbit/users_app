import { connect } from 'react-redux';
import { fetchUsers, fetchUsersWithToken } from './actions/user_actions';
import List from './list';

const mapStateToProps = (state) => {
  return({
    users: state.users
  });
};

const mapDispatchToProps = dispatch => {
  return({
      fetchUsers: () => dispatch(fetchUsers())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
