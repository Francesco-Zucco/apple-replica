import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchProducts() {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get("http://localhost:3500/0").then((res) => {
      setProducts(res.data.iphones);
    });
  }, []);

  return { products };
}

export function useFetchIpads() {
  const [ipadsData, setIpadsData] = useState();

  useEffect(() => {
    axios.get("http://localhost:3500/1").then((res) => {
      setIpadsData(res.data.ipads);
    });
  }, []);

  return { ipadsData };
}

export function useFetchMac() {
  const [macData, setMacData] = useState();

  useEffect(() => {
    axios.get("http://localhost:3500/2").then((res) => {
      setMacData(res.data.macbooks);
    });
  }, []);

  return { macData };
}

export function useFetchWatches() {
  const [watchesData, setWatchesData] = useState();

  useEffect(() => {
    axios.get("http://localhost:3500/3").then((res) => {
      setWatchesData(res.data.watches);
    });
  }, []);

  return { watchesData };
}
