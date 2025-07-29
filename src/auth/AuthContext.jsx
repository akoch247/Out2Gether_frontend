import { createContext, useContext, useEffect, useState } from "react";
import { API } from "../api/ApiContext";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const verify = async () => {
      try {
        const response = await fetch(API + "/users/me", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ jwt: token }),
        });

        if (!response.ok) {
          logout();
          return;
        }

        const result = await response.json();
        setToken(token);
        setUser(result);
      } catch (error) {
        console.error("Token verification failed", error);
        logout();
      }
    };

    verify();
  }, []);

  const register = async (credentials) => {
    const response = await fetch(API + "/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const result = await response.json();
    setToken(result.jwt);
    setUser(result.user);
    localStorage.setItem("token", result.jwt);
  };

  const login = async (credentials) => {
    const response = await fetch(API + "/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const result = await response.json();
    setToken(result.jwt);
    setUser(result.user);
    localStorage.setItem("token", result.jwt);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  const value = { token, user, register, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("Can only use useAuth within AuthProvider");
  return context;
}
