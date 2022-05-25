export const LoginStart = (ngoCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (ngo) => ({
  type: "LOGIN_SUCCESS",
  payload: ngo,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});
