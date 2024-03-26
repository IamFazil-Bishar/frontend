import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const useFetch = (url) => {
  const { state } = useContext(AuthContext);

  const fetchData = async () => {
    try {
      const accessToken = state.user ? state.user.accessToken : null;

      const response = await fetch(url, {
        headers: {
          Authorization: accessToken ? `Bearer ${accessToken}` : "",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      return await response.json();
    } catch (error) {
      console.error("Error:", error.message);
      return { error: error.message };
    }
  };

  return { fetchData };
};

export default useFetch;
