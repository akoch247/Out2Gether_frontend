import { createContext, useContext, useRef } from "react";
import { useAuth } from "./AuthContext";

export const API = "http://localhost:3000";

const ApiContext = createContext();

export function ApiProvider({ children }) {
  const { token } = useAuth();

  const request = async (resource, options = {}) => {
    const headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const response = await fetch(API + resource, {
      ...options,
      headers,
    });

    const isJson = /json/.test(response.headers.get("Content-Type"));
    const result = isJson ? await response.json() : await response.text();
    if (!response.ok) {
      try {
        const errorJson = JSON.parse(result);
        throw Error(errorJson.message ?? "Something went wrong :(");
      } catch {
        throw Error(result ?? "Something went wrong :(");
      }
    }
    return result;
  };

  const tagsRef = useRef({});

  const provideTag = (tag, query) => {
    tagsRef.current[tag] = query;
  };

  const invalidateTags = (tagsToInvalidate) => {
    tagsToInvalidate.forEach((tag) => {
      const query = tagsRef.current[tag];

      console.log(" ");
      console.log("Invalidating: " + tag)
      
      if (query) {
        query();

        console.log("Successfully Invalidated: ", tag);
      }
    });
  };

  const value = { request, provideTag, invalidateTags };
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

export function useApi() {
  const context = useContext(ApiContext);
  if (!context) throw Error("Can only use useApi within ApiProvider");
  return context;
}
