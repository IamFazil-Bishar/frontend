import React, { useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import useFetch from "./useFetch";
import { BASE_URL } from "./../utils/config";

const YourComponent = () => {
  const { state, dispatch } = useContext(AuthContext);
  const { fetchData } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        console.log(data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    getData();
  }, [fetchData]);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
  };

  return (
    <div>
      {state.user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button>Login</button>
      )}
    </div>
  );
};

export default YourComponent;
