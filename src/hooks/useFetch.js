const useFetch = (url, token) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const headers = {};
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
          console.log("Token fetch:",token)
        }

        const res = await fetch(url, {
          headers,
        });

        if (!res.ok) {
          setError("failed to fetch");
        }
        const result = await res.json();
        setData(result.data);
        setLoading(false)
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, token]);

  return {
    data,
    error,
    loading,
  };
};
