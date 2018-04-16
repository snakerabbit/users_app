import * as APIUtil from '../util/users_util';
var Heap = require('heap');
export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

function filterByValidNumber(users){
  //filters phone numbers based on whether it is a valid US number
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return users.filter(user => phoneRegex.test(user.number));
}

function sortedFiveYoungest(users){
  //uses a heap to find the 5 smallest age value within the users
  //then it returns those users, sorted by name alphabetically
  let ages = Heap.nsmallest(users.map(users => users.age), 5);
  return users.filter(user => ages.includes(user.age)).sort(function(a,b){
    return a.name > b.name;
  });
}

function processUsersList(users){
  //calls the filter by valid number function, then order by age function on result
  let usersWithValidNumbers = filterByValidNumber(users);
  return sortedFiveYoungest(usersWithValidNumbers);
}

async function getUsers(){
  //fetches initial users data
  let users = await APIUtil.fetchUsers().then(data => data);
  let results = users.result;
  //continues to fetch users data until there is no token given
  // results contains the array of user ID's
  while (users.token){
    users = await APIUtil.fetchUsersWithToken(users.token).then(data => data);
    results = results.concat(users.result);
  }
  let usersWithDetails = [];
  //fetch user details for all users that are in the results array
  for(let i = 0; i< results.length; i++){
    let user = await APIUtil.fetchUserDetail(results[i]).then(data => data, err => console.log(err));
    if(user){
      usersWithDetails.push(user);
    }
  }
  //process detailed user list by sorting and filtering by valid number and getting youngest
  return processUsersList(usersWithDetails);
}

export const fetchUsers = () => dispatch => {
  return getUsers().then(users => dispatch(receiveUsers(users)));
};
