import JwtDecode from "jwt-decode";

const TOKEN = "token";

export const setTokenInLocalStorage = user => localStorage.setItem(TOKEN, user);

export const getUser = () => {
  try {
    const user = localStorage.getItem(TOKEN);
    return JwtDecode(user);
  } catch {
    return null;
  }
};

export const removeToken = () => localStorage.removeItem(TOKEN);

export const getToken = () => localStorage.getItem(TOKEN);
