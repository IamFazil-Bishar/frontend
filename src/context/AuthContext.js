import { createContext, useEffect, useReducer, useState } from "react";

const initial_state = {
  user: localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")) : null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
    } else {
      localStorage.removeItem("accessToken");
    }
  }, [accessToken]);

  const removeAccessToken = () => {
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
        accessToken,
        setAccessToken,
        removeAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
