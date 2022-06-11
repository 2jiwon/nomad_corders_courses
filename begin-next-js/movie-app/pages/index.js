import Seo from "../components/Seo";
import { useEffect, useState } from "react";

const API_KEY = "4a638c7233d032a392b46401705afddf";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
      const json = await response.json();
      console.log(json);
    })();
  }, [])
  return (
    <div>
      <Seo title="Home" />
      <h1>This is Home</h1>
    </div>
  )
}