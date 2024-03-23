import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, page) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await axios.get(url);
        const responseData = res.data;

        setData(responseData.data); // Set the data to responseData.data
        setError(null);
        setLoading(false);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, page]);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
