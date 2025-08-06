import { useEffect, useRef, useState } from "react";
import { useApi } from "../context/ApiContext";

export default function useQuery(resource, tag) {
  const { request, provideTag } = useApi();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const previousData = useRef();

  const query = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await request(resource);
      previousData.current = result;
      setData(result);
    } catch (e) {
      console.error(e);
      setError(e.message);
      setData(previousData.current);
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
    data: data ?? previousData.current,
    loading,
    error,
  };
}
