import React, { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import { axiosInstance, endPoint } from "../../endPoint/api";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        isLoading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = Cookie.get("token");
      if (token) {
        try {
          const response = await axiosInstance.get(endPoint.ME, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          // console.log(response.data)
          if (response.status === 200) {
            dispatch({
              type: "SET_USER",
              payload: response.data?.Me,
            });
          }
        } catch (error) {
          console.error("Authentication Error:", error);
          dispatch({
            type: "LOGOUT",
          });
          navigate("/");
        }
      } else {
        dispatch({
          type: "LOGOUT",
        });
        navigate("/");
      }
    };
    checkAuthentication();
  }, [navigate]);

  const logout = () => {
    Cookie.remove("token");
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const login = async (email, password) => {
    try {
      const response = await axiosInstance.post(endPoint.LOGIN, {
        email,
        password,
      });

      if (response.status === 200) {
        console.log(response.data);
        const { token, user } = response.data;
        Cookie.set("token", token);
        dispatch({
          type: "SET_USER",
          payload: user,
        });
        toast.success("Logged in Successfully!", {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/home");
      }
    } catch (error) {
      console.error("Login Error:", error);

      toast.error(error.response?.data?.message, {
        position: "top-center",
        autoClose: 200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/");
    }
  };

  const signup = async (firstname, lastname, email, password) => {
    try {
      const response = await axiosInstance.post(endPoint.SIGNUP, {
        firstname,
        lastname,
        email,
        password,
      });

      if (response.status === 201) {
        console.log(response.data);

        const { accessToken } = response.data;
        Cookies.set("token", accessToken);

        toast.success("User registered successfully", {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        // dispatch({type:"SET_USER",payload:user})
        navigate("/home");
      }
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message, {
        position: "top-center",
        autoClose: 200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <AuthContext.Provider value={{ state, logout, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
