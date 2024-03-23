import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await axios.get(url);
        const responseData = res.data; // Extract the response data

        // Check if the response data is an array
        if (Array.isArray(responseData)) {
          setData(responseData); // Set the data to the response data
          setError(null); // Reset error
        } else {
          // If the response data is not an array, handle the error
          setError("Invalid data format");
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
