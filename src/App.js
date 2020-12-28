import React from "react";
import Row from "./components/rows/Row";
import requests from "./requests";

export default function App() {
  return (
    <div>
      <Row
        title={"Netflix Originals"}
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
    </div>
  );
}
