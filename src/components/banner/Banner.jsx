import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import requests from "../../requests";

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function getMovie() {
      let request = await axiosInstance.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length) - 1
        ]
      );
    }
    getMovie();
  }, []);
  console.log("randim movie", movie);
  return <header></header>;
}
