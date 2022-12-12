import { useState, useEffect } from "react";
import axios from "axios";
import { string } from "prop-types";

const useAxios = (method, url, body) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const api = process.env.API || "http://localhost:8181";

  useEffect(() => {
    axios[method](`${api}/${url}`, body || null)
      .then(({ data }) => {
        setLoading(false);
        setError(null);
        setData(data);
      })
      .catch(error => {
        setLoading(false);
        setError(error);
        setData(null);
      });
  }, [method, url, body, api]);

  return { data, isLoading, error };
};

useAxios.propTypes = {
  method: string.isRequired,
  url: string.isRequired,
};

export default useAxios;
