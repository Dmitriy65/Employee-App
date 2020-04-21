const isUserAuthenticated = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!!currentUser) return currentUser.isLoggedIn;

  return false;
}

const getAuthenticatedUser = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!!currentUser) return currentUser;

  return {};
}

export {
  isUserAuthenticated,
  getAuthenticatedUser
}