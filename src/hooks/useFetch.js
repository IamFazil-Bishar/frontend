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
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${user?.token}`, // Ensure user token is included
          },
          credentials: 'include' // Add credentials: 'include' for CORS requests
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await res.json();
        setData(result.data);
      } catch (error) {
        setError(error.message); // Update error state with descriptive message
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, user?.token]); // Include user token in dependencies .

  return { data, loading, error };
};

export default useFetch;
