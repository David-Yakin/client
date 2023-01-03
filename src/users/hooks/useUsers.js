import { useState, useCallback } from "react";
import useAxios from "../../hooks/useAxios";
import { login, signup } from "../services/usersApiService";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import { useUser } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";

const useUsers = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { user, setUser, setToken } = useUser();
  useAxios();

  const requestStatus = useCallback(
    (loading, errorMessage, users, user = null) => {
      setLoading(loading);
      setUsers(users);
      setUser(user);
      setError(errorMessage);
    },
    [setUser]
  );

  const handleLogin = useCallback(
    async user => {
      try {
        const token = await login(user);
        setTokenInLocalStorage(token);
        setToken(token);
        const userFromLocalStorage = getUser();
        requestStatus(false, null, null, userFromLocalStorage);
        navigate(ROUTES.CARDS);
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [navigate, requestStatus, setToken]
  );

  const handleSignup = useCallback(
    async user => {
      try {
        const normalizedUser = normalizeUser(user);
        await signup(normalizedUser);
        await handleLogin({ email: user.email, password: user.password });
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [requestStatus, handleLogin]
  );

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
  }, [setUser]);

  return {
    isLoading,
    error,
    user,
    users,
    handleLogin,
    handleLogout,
    handleSignup,
  };
};

export default useUsers;
