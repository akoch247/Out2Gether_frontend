import { createContext, useContext, useState } from "react";
import { useAuth } from "../auth/AuthContext";

export const API = "http://localhost:3000";

const ApiContext = createContext();

export function ApiProvider({ children }) {
  const { token } = useAuth();
  
  const headers = { "Content-Type": "application/json" };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const request = async (resource, options) => {
    const response = await fetch(API + resource, {
      ...options,
      headers,
    });

    const isJson = /json/.test(response.headers.get("Content-Type"));
    const result = isJson ? await response.json() : await response.text();
    if (!response.ok) throw Error(result ?? "Something went wrong :(");
    return result;
  };

  const [tags, setTags] = useState({});

  const provideTag = (tag, query) => {
    setTags((currentTags) => ({ ...currentTags, [tag]: query }));
  };

  const invalidateTags = (tagsToInvalidate) => {
    tagsToInvalidate.forEach((tag) => {
      const query = tags[tag];
      if (query) query();
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
