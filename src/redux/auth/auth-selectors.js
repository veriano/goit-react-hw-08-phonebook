const isAuthenticated = state => state.auth.isAuthenticated;

const getUserName = state => state.auth.user.name;

export {
  isAuthenticated,
  getUserName,
};