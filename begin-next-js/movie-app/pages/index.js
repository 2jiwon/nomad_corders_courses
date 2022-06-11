import Seo from "../components/Seo";
import { useEffect, useState } from "react";

const API_KEY = "4a638c7233d032a392b46401705afddf";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await (
        await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      ).json();
      console.log(data);
    })();
  }, [])
  return (
    <div>
      <Seo title="Home" />
      <h1>This is Home</h1>
    </div>
  )
}