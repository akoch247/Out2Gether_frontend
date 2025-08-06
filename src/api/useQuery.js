import { useEffect, useState, useCallback } from "react";
import { useApi } from "./ApiContext";

export default function useQuery(resource, tags) {
  const { request, provideTag } = useApi();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const tagsString = JSON.stringify(tags);

  const query = useCallback(async () => {
    setError(null);
    try {
      const result = await request(resource);
      console.log(`[useQuery] Refetched data for ${resource}:`, result);
      setData(result);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [resource, request]);

  useEffect(() => {
    if (tags) {
      const tagArray = Array.isArray(tags) ? tags : [tags];
      tagArray.forEach((tag) => provideTag(tag, query));
    }
    query();
  }, [query, tagsString, provideTag]);

  return { data, loading, error };
}
