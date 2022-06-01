import React, { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year");
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(true);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? <h2>Loading...</h2> : null}
    </div>
  );
}

export default App;
