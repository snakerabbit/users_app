import $ from 'jquery';

export const fetchUsers = () => {
  return $.ajax({
    method: "GET",
    url: 'https://appsheettest1.azurewebsites.net/sample/list'
  });
};

export const fetchUsersWithToken = token => {
  return $.ajax({
      method: "GET",
      url: `https://appsheettest1.azurewebsites.net/sample/list?token=${token}`
  });
};

export const fetchUserDetail = userId => {
  return $.ajax({
    method: "GET",
    url: `http://appsheettest1.azurewebsites.net/sample/detail/${userId}`
  });
};
