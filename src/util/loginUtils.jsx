let token;

export const signIn = newToken => {
  return localStorage.setItem("BEARER_TOKEN", newToken);
};

export const signOut = () => {
  token = undefined;
  return localStorage.removeItem("BEARER_TOKEN");
};

export const getToken = async () => {
  if (token) return Promise.resolve(token);
  token = await localStorage.getItem("BEARER_TOKEN");
  return token;
};
