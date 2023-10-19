export const login = userData => {
  return {type: 'LOGIN', payload: userData};
};

export const signup = userData => {
  return {type: 'SIGNUP', payload: userData};
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT',
  };
};
