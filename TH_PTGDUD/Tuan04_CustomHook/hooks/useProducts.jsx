import { useState, useEffect } from "react";
import axios from "axios";

function useProducts(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [data]);

  return { data, loading };
}

export default useProducts;