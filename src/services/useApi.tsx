import React, { useState, useEffect } from "react";
import axios from "axios";

const url="https://api.openweathermap.org/data/2.5/forecast/daily?cnt=7&units=imperial&"
const ID="e43f64ee98be9268f7a7f49e34aecfdf"

export const useApi = (lat: string, lng: String) => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [data, setData] = useState<[] | null>(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${url}lat=${lat}&lon=${lng}&APPID=${ID}`
      )
      .then(function (response) {
        setData(response.data.results);
      });
    setLoading(false);
  }, [lat, lng]);
  return { data, loading };
};
