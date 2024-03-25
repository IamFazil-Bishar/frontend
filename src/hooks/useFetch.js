import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        if (!user || !user.token) {
          // Handle the case where the user or user.token is null
          throw new Error("User not authenticated");
        }

        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
          credentials: 'include', // Include credentials such as cookies
        });

        if (!res.ok) {
          setError("Failed to fetch data");
          return;
        }

        const result = await res.json();
        setData(result.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, user]);

  return { data, loading, error };
};

export default useFetch;
