import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchProducts() {
  const [products, setProducts] = useState();
  // const [phone, setPhone] = useState();
  useEffect(() => {
    axios.get("http://localhost:3500/0").then((res) => {
      setProducts(res.data.iphones);
      // products.map((res) => {
      //   setPhone(res);
      // });
    });
  }, []);

  return { products };
}
