import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import "../../styles/Row.css";

export default function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const request = await axiosInstance.get(fetchUrl);
      console.log("req", request);
      return request;
    }
    getMovies();
  }, []);
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}
