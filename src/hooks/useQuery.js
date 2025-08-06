import { useEffect, useRef, useState } from "react";
import { useApi } from "../context/ApiContext";

/** Queries the API and returns the data, loading status, and error message. */
export default function useQuery(resource, tag) {
  const { request, provideTag } = useApi();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Store the last successful data result
  const previousData = useRef();

  const query = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await request(resource);
      previousData.current = result; // Save latest successful data
      setData(result);
    } catch (e) {
      console.error(e);
      setError(e.message);
      setData(previousData.current); // Fallback to previous data on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!resource) return;
    if (tag) provideTag(tag, query);
    query();
  }, [resource]);

  return {
    data: data ?? previousData.current, // Use fallback if data is temporarily undefined
    loading,
    error,
  };
}
